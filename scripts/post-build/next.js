const Path = require("path");

const Fse = require("fs-extra");

module.exports = () => {
  try {
    if (Fse.pathExistsSync(Path.join(__dirname, "../../output/react/src"))) {
      const oldPath = Path.join(__dirname, "../../output/react/src");
      const newPath = Path.join(
        __dirname,
        "../../showcases/next-showcase/output/src"
      );

      Fse.copySync(oldPath, newPath, { overwrite: true });
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
