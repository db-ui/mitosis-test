const Replace = require("replace-in-file");
const Fs = require("fs");
const Path = require("path");

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

      if (
        Fs.existsSync(
          Path.join(
            __dirname,
            `../../src/components/${component.name}/${component.name}.css`
          )
        )
      ) {
        const oldPath = Path.join(
          __dirname,
          `../../src/components/${component.name}/${component.name}.css`
        );
        const newPath = Path.join(
          __dirname,
          `../../output/angular/src/components/${component.name}/${component.name}.css`
        );

        Fs.copyFileSync(oldPath, newPath);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  });
};
