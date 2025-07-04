const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const outputPath = path.join(__dirname, "outputs");
if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = async (filePath, inputFile) => {
    const jobId = path.basename(filePath).split(".")[0];
    const outPath = path.join(outputPath, `${jobId}.exe`);
    const compileCommand = `g++ "${filePath}" -o "${outPath}"`;

    return new Promise((resolve, reject) => {
        exec(compileCommand, (error, stdout, stderr) => {
            if (error || stderr) {
                return reject({ error, stderr });
            }

            const runCommand = `"${outPath}" < "${inputFile}"`;

            exec(runCommand, (runError, runStdout, runStderr) => {
                if (runError) {
                    return reject({ error: runError });
                }
                if (runStderr) {
                    return reject({ error: runStderr });
                }
                resolve(runStdout);
            });
        });
    });
};

module.exports = executeCpp;

