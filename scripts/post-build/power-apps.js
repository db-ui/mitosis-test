const Fse = require("fs-extra");
const { copyFile } = require("../utils");

const Components = require("./components");
const Replace = require("replace-in-file");

const updateNestedComponents = (input, rootComponentName, powerAppsFolder) => {
  let fileContent = input;
  Components.filter((nComp) => nComp.name !== rootComponentName).forEach(
    (nestedComponent) => {
      if (input.includes(`"../${nestedComponent.name}"`)) {
        fileContent = fileContent.replace(`"./${nestedComponent.name}"`);

        Fse.copySync(
          `./output/react/src/components/${nestedComponent.name}`,
          `./output/power-apps/${rootComponentName}/${powerAppsFolder}/${nestedComponent.name}`,
          { overwrite: true }
        );
      }
    }
  );

  return fileContent;
};

module.exports = () => {
  Components.forEach((component) => {
    try {
      const powerAppsFolder = `DB${component.name[0].toUpperCase()}${component.name.slice(
        1
      )}`;
      const cleanName = component.name.replace("-", "");
      const files = [`${component.name}.tsx`, "model.ts"];

      Replace.sync({
        files: `./output/react/src/components/${component.name}/${component.name}.tsx`,
        processor: (input) => {
          return updateNestedComponents(input, cleanName, powerAppsFolder);
        },
      });

      Fse.removeSync(`./output/power-apps/${cleanName}/node_modules`);

      files.forEach((file) => {
        copyFile(
          `../../output/react/src/components/${component.name}/${file}`,
          `../../output/power-apps/${cleanName}/${powerAppsFolder}/${file}`
        );
      });
    } catch (error) {
      console.error("Error occurred:", error);
    }
  });
};
