const Fs = require("fs");
const Path = require("path");
const Replace = require("replace-in-file");

const Components = require("./components");

module.exports = () => {
  Components.forEach((component) => {
    const deleteImport = {
      files: `./output/webcomponent/src/components/${component.name}/${component.name}.ts`,
      processor: (input) =>
        input
          .split("\n")
          .filter((line) => !line.includes("@db-ui"))
          .join("\n"),
    };

    const defaultStyleUrl = {
      files: `./output/webcomponent/src/components/${component.name}/${component.name}.ts`,
      from: /stylePath: ""/g,
      to: `stylePath: "${component.defaultStylePath}"`,
    };

    try {
      Replace.sync(deleteImport);
      Replace.sync(defaultStyleUrl);

      if (
        Fs.existsSync(
          Path.join(
            __dirname,
            `../../output/webcomponent/src/components/${component.name}/${component.name}.ts`
          )
        )
      ) {
        const oldPath = Path.join(
          __dirname,
          `../../output/webcomponent/src/components/${component.name}/${component.name}.ts`
        );
        const newPath = Path.join(
          __dirname,
          `../../output/webcomponent/src/components/${component.name}/${component.name}.js`
        );

        Fs.renameSync(oldPath, newPath);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  });
};
