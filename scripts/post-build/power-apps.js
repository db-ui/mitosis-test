const Fs = require("fs");
const Path = require("path");

const Components = require("./components");

module.exports = () => {
  Components.forEach((component) => {
    try {
      const powerAppsFolder = `DB${component.name[0].toUpperCase()}${component.name.slice(
        1
      )}`;
      const files = [`${component.name}.tsx`, "model.ts"];

      files.forEach((file) => {
        if (
          Fs.existsSync(
            Path.join(
              __dirname,
              `../../output/react/src/components/${component.name}/${file}`
            )
          )
        ) {
          const oldPath = Path.join(
            __dirname,
            `../../output/react/src/components/${component.name}/${file}`
          );
          const newPath = Path.join(
            __dirname,
            `../../output/power-apps/${component.name}/${powerAppsFolder}/${file}`
          );

          Fs.copyFileSync(oldPath, newPath);
        }
      });
    } catch (error) {
      console.error("Error occurred:", error);
    }
  });
};
