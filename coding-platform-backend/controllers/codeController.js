const path = require('path');
const fs = require('fs');
const Docker = require('dockerode');
const docker = new Docker();
const CodeSubmission = require('../models/codeSubmission'); // Import the CodeSubmission model

exports.submitCode = async (req, res) => {
    const { userId, language, code, inputs, questionID } = req.body; // Expecting 'inputs' as an array

    if (!userId || !language || !code) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const userCodePath = path.join(__dirname, '../user_code', userId);
    const codeFilePath = path.join(userCodePath, `code.${language}`);

    try {
        // Ensure the user's directory exists
        await fs.mkdir(userCodePath, { recursive: true });

        // Write the code to a file
        await fs.writeFile(codeFilePath, code);

        // Write custom inputs to a file
        const inputsFilePath = path.join(userCodePath, 'inputs.txt');
        await fs.writeFile(inputsFilePath, inputs.join('\n'));

        // Docker container setup
        const containerConfigs = {
            cpp: {
                image: 'coding-platform-backend-cpp-executor',
                command: 'g++ /app/code.cpp -o /app/code && /app/code < /app/inputs.txt'
            },
            py: {
                image: 'coding-platform-backend-python-executor',
                command: 'python3 /app/code.py < /app/inputs.txt'
            },
            java: {
                image: 'coding-platform-backend-java-executor',
                command: 'javac /app/code.java && java -cp /app $(basename /app/code.java .java) < /app/inputs.txt'
            }
        };

        const config = containerConfigs[language];
        if (!config) {
            return res.status(400).json({ error: 'Unsupported language' });
        }

        const container = await docker.createContainer({
            Image: config.image,
            Cmd: [config.command],
            Tty: false,
            Volumes: { '/app': {} },
            HostConfig: {
                Binds: [`${userCodePath}:/app`]
            }
        });

        // Record the start time
        const startTime = Date.now();
        await container.start();

        // Wait for container to finish execution
        const waitResult = await container.wait();
        const endTime = Date.now();
        const executionTime = (endTime - startTime) / 1000; // Convert milliseconds to seconds

        // Get container stats for memory usage
        const statsStream = await container.stats({ stream: true });
        const stats = await new Promise((resolve, reject) => {
            statsStream.on('data', (data) => {
                const parsed = JSON.parse(data.toString());
                resolve(parsed);
            });
            statsStream.on('error', reject);
            statsStream.on('end', resolve);
        });

        const memoryUsage = stats.memory_stats.usage; // Memory usage in bytes

        // Get container logs
        const output = await container.logs({stdout: true, stderr: true});
        const logData = output.toString();

        // Remove the container
        await container.remove({ v: true, force: true });

        // Store the submission in the database if questionID is present
        if (questionID) {
            const codeSubmission = new CodeSubmission({
                userId,
                questionId: questionID,
                language,
                code,
                output: logData
            });
            await codeSubmission.save();
        }

        // Clean up user-specific directory after sending the response
        await fs.rm(userCodePath, { recursive: true, force: true });

        res.json({
            output: logData,
            executionTime: `${executionTime} seconds`,
            memoryUsage: `${memoryUsage} bytes`
        });
    } catch (error) {
        res.status(500).json({ error: `Docker execution failed: ${error.message}` });
    }
};

exports.getCodeSubmissions = async (req, res) => {
    const { userId, questionId } = req.query;
    
    if (!userId || !questionId) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // Fetch code submissions from the database
        const submissions = await CodeSubmission.find({ userId, questionId });

        // Check if any submissions were found
        if (submissions.length === 0) {
            return res.status(404).json({ message: 'No submissions found' });
        }

        // Send the submissions as a response
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ error: `Failed to fetch submissions: ${error.message}` });
    }
};