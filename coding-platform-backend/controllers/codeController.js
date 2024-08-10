const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

// Handle code submission
exports.submitCode = (req, res) => {
    const { userId, language, code } = req.body;
    const token = req.headers.authorization.split(' ')[1]; // Extract JWT from Authorization header

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

        // Compile and execute the code based on language
        const compileAndRun = {
            cpp: () => `g++ ${codeFilePath} -o ${path.join(userCodePath, 'code')} && ${path.join(userCodePath, 'code')}`,
            python: () => `python3 ${codeFilePath}`,
            java: () => {
                const className = path.basename(codeFilePath, '.java');
                return `javac ${codeFilePath} && java -cp ${userCodePath} ${className}`;
            }
        };

        const command = compileAndRun[language];

        if (!command) {
            return res.status(400).json({ error: 'Unsupported language' });
        }

        exec(command(), (error, stdout, stderr) => {
            if (error) return res.status(500).json({ error: `Execution failed: ${error.message}` });
            if (stderr) return res.status(500).json({ error: `Compilation/Execution error: ${stderr}` });

            res.json({ output: stdout });
        });
    });
};
