const path = require('path');
const fs = require('fs');
const Docker = require('dockerode');
const docker = new Docker(); // Connect to Docker daemon

exports.submitCode = async (req, res) => {
    const { userId, language, code } = req.body;

    if (!userId || !language || !code) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const userCodePath = path.join(__dirname, '../user_code', userId);
    const codeFilePath = path.join(userCodePath, `code.${language}`);
    
    // Ensure the user's directory exists
    if (!fs.existsSync(userCodePath)) {
        fs.mkdirSync(userCodePath, { recursive: true });
    }

    // Write the code to a file
    fs.writeFile(codeFilePath, code, async (err) => {
        if (err) return res.status(500).json({ error: 'Failed to write code to file' });

        // Docker container setup
        const containerConfigs = {
            cpp: {
                image: 'coding-platform-backend-cpp-executor',
                command: ['bash', '-c', 'g++ /app/code.cpp -o /app/code && /app/code']
            },
            py: {
                image: 'coding-platform-backend-python-executor',
                command: ['python3', '/app/code.py']
            },
            java: {
                image: 'coding-platform-backend-java-executor',
                command: ['bash', '-c', 'javac /app/code.java && java -cp /app $(basename /app/code.java .java)']
            }
        };

        const config = containerConfigs[language];

        if (!config) {
            return res.status(400).json({ error: 'Unsupported language' });
        }

        try {
            const container = await docker.createContainer({
                Image: config.image,
                Cmd: config.command,
                Tty: false,
                Volumes: { '/app': {} },
                HostConfig: {
                    Binds: [`${userCodePath}:/app`]
                }
            });

            await container.start();

            // Wait for container to finish execution
            await container.wait();
            const logs = await container.logs({stdout: true, stderr: true});
            const logData = logs.toString();

            // Clean up user-specific directory after sending the response
            fs.rm(userCodePath, { recursive: true, force: true }, (cleanupErr) => {
                if (cleanupErr) {
                    console.error(`Failed to clean up user directory: ${cleanupErr.message}`);
                }
            });

            // Remove the container after execution
            await container.remove();

            res.json({ output: logData });
        } catch (error) {
            res.status(500).json({ error: `Docker execution failed: ${error.message}` });
        }
    });
};
