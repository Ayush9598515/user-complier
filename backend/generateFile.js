const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const dirCodes = path.join(__dirname, "Codes");

if (!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = (language, code = "") => {
    const jobId = uuid();
    const fileName = `${jobId}.${language}`;
    let filePath = path.join(dirCodes, fileName);

    filePath = filePath.trim().replace(/\n/g, ""); // ✅ Clean the path before writing

    try {
        fs.writeFileSync(filePath, code);
        console.log("📄 Code file created at:", filePath);
        return filePath;
    } catch (err) {
        console.error("❌ Error writing code file:", err);
        return null;
    }
};

module.exports = generateFile;
