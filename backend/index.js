const express = require("express");
const cors = require("cors");
const app = express();
const generateFile = require("./generateFile.js");
const executeCpp = require("./executeCpp.js");
const generateInputFile = require("./generateInputFile.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Ayushji !");
});

app.post("/run", async (req, res) => {
  const { language = "cpp", code, input = "" } = req.body;

  if (!code) {
    return res.status(400).json({ success: false, error: "Empty Code body" });
  }

  try {
    const rawFilePath = generateFile(language, code);
    const rawInputFile = generateInputFile(input);

    if (!rawFilePath || !rawInputFile) {
      return res.status(500).json({ success: false, error: "File generation failed" });
    }

    const filePath = rawFilePath.trim().replace(/\n/g, "");
    const inputFile = rawInputFile.trim().replace(/\n/g, "");

    console.log("✅ filePath:", filePath);
    console.log("✅ inputFile:", inputFile);

    const output = await executeCpp(filePath, inputFile);
    return res.json({ success: true, output });
  } catch (error) {
    console.error("❌ Error occurred:", error);
    return res.status(500).json({ success: false, error: error.message || String(error) });
  }
});

app.listen(8000, () => {
  console.log("✅ Compiler backend running on port 8000");
});
