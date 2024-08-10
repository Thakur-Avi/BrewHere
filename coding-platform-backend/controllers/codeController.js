const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const jwt = require('jsonwebtoken');

exports.submitCode = (req, res) => {
    const { userId, language, code } = req.body;
    // const token = req.headers.authorization.split(' ')[1];

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
    fs.writeFile(codeFilePath, code, (err) => {
        if (err) return res.status(500).json({ error: 'Failed to write code to file' });

        // Define Docker commands for each language
        const dockerCommands = {
            cpp: `docker run --rm -v ${userCodePath}:/app cpp-executor bash -c "g++ /app/code.cpp -o /app/code && /app/code"`,
            py: `docker run --rm -v ${userCodePath}:/app python-executor python3 /app/code.py`,
            java: `docker run --rm -v ${userCodePath}:/app java-executor bash -c "javac /app/code.java && java -cp /app code"`
        };

        const command = dockerCommands[language];

        if (!command) {
            return res.status(400).json({ error: 'Unsupported language' });
        }

        // Execute the Docker command
        exec(command, (error, stdout, stderr) => {
            if (error) return res.status(500).json({ error: `Execution failed: ${error.message}` });
            if (stderr) return res.status(500).json({ error: `Compilation/Execution error: ${stderr}` });

            res.json({ output: stdout });
        });
    });
};
