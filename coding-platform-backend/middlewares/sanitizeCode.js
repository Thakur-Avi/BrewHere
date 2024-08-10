module.exports = (req, res, next) => {
    const { code, language } = req.body;

    if (!code || !language) {
        return res.status(400).json({ error: 'Code and language are required' });
    }

    // Basic sanitization: Remove non-ASCII characters
    const sanitizedCode = code.replace(/[^\x00-\x7F]/g, '');

    // General check for dangerous patterns
    const dangerousPatterns = [
        /rm -rf/,  // Unix command to delete directories
        /system\(/,  // C/C++/Python system call
        /exec\(/,  // Python exec function
        /import os/,  // Python OS module
        /import subprocess/,  // Python subprocess module
        /Runtime\.getRuntime\(\)/,  // Java runtime exec
        /ProcessBuilder\(/,  // Java ProcessBuilder class
    ];

    for (let pattern of dangerousPatterns) {
        if (pattern.test(sanitizedCode)) {
            return res.status(400).json({ error: 'Potentially harmful code detected' });
        }
    }

    // Language-specific validations
    switch (language) {
        case 'cpp':
            if (/fork\(/.test(sanitizedCode) || /popen\(/.test(sanitizedCode)) {
                return res.status(400).json({ error: 'Potentially harmful C++ code detected' });
            }
            break;

        case 'python':
            if (/os\./.test(sanitizedCode) || /subprocess\./.test(sanitizedCode)) {
                return res.status(400).json({ error: 'Potentially harmful Python code detected' });
            }
            break;

        case 'java':
            if (/System\.exit/.test(sanitizedCode) || /Runtime\.getRuntime\(\)/.test(sanitizedCode)) {
                return res.status(400).json({ error: 'Potentially harmful Java code detected' });
            }
            break;

        default:
            return res.status(400).json({ error: 'Unsupported language' });
    }

    // Replace the original code with the sanitized version
    req.body.code = sanitizedCode;

    next();
};
