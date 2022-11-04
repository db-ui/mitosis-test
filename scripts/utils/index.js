const Fs = require("fs");
const Path = require("path");
const copyFile = (oPath, nPath) => {
  if (Fs.existsSync(Path.join(__dirname, oPath))) {
    const oldPath = Path.join(__dirname, oPath);
    const newPath = Path.join(__dirname, nPath);

    Fs.copyFileSync(oldPath, newPath);
  }
};

const renameFile = (oPath, nPath) => {
  if (Fs.existsSync(Path.join(__dirname, oPath))) {
    const oldPath = Path.join(__dirname, oPath);
    const newPath = Path.join(__dirname, nPath);

    Fs.renameSync(oldPath, newPath);
  }
};

module.exports = { copyFile, renameFile };
