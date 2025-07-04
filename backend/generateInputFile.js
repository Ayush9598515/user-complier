const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const dirInputs = path.join(__dirname, "inputs");

if (!fs.existsSync(dirInputs)) {
    fs.mkdirSync(dirInputs, { recursive: true });
}

const generateInputFile = (input = "") => {
    const jobId = uuid();
    const inputFileName = `${jobId}.txt`;
    const inputFilePath = path.join(dirInputs, inputFileName);

    try {
        fs.writeFileSync(inputFilePath, input);
        console.log("📥 Input file created at:", inputFilePath);
        return inputFilePath.trim();
    } catch (err) {
        console.error("❌ Error writing input file:", err);
        return null;
    }
};

module.exports = generateInputFile;
