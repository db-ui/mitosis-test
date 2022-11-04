const Replace = require("replace-in-file");
const { copyFile } = require("../utils");

const Components = require("./components");

module.exports = () => {
  Components.forEach((component) => {
    const options = {
      files: `./output/angular/src/components/${component.name}/${component.name}.ts`,
      processor: (input) =>
        input
          .split("\n")
          .filter((line) => !line.includes("@db-ui"))
          .map((line) => {
            if (line.includes("selector:") && !input.includes("styleUrls:")) {
              return `${line}\n  styleUrls:['./${component.name}.css'],`;
            }
            return line;
          })
          .join("\n"),
    };

    try {
      Replace.sync(options);

      copyFile(
        `../../src/components/${component.name}/${component.name}.css`,
        `../../output/angular/src/components/${component.name}/${component.name}.css`
      );
    } catch (error) {
      console.error("Error occurred:", error);
    }
  });
};
