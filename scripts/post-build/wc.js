const { renameFile } = require("../utils");
const Replace = require("replace-in-file");

const Components = require("./components");

const updateNestedComponents = (input, rootComponentName) => {
  let fileContent = input;

  Components.filter((nComp) => nComp.name !== rootComponentName).forEach(
    (nestedComponent) => {
      const nCompUpperCase =
        nestedComponent.name.charAt(0).toUpperCase() +
        nestedComponent.name.slice(1);

      if (
        fileContent.includes(
          `import { DB${nCompUpperCase} } from "../${nestedComponent.name}";`
        )
      ) {
        fileContent = fileContent.replace(
          `import { DB${nCompUpperCase} } from "../${nestedComponent.name}";`,
          `import "../${nestedComponent.name}/${nestedComponent.name}";`
        );

        while (
          fileContent.includes(`<DB${nCompUpperCase}`) |
          fileContent.includes(`</DB${nCompUpperCase}`)
        ) {
          fileContent = fileContent.replace(
            `<DB${nCompUpperCase}`,
            `<db-${nestedComponent.name}`
          );
          fileContent = fileContent.replace(
            `</DB${nCompUpperCase}`,
            `</db-${nestedComponent.name}`
          );
        }
      }
    }
  );

  return fileContent;
};

module.exports = () => {
  Components.forEach((component) => {
    const fixImports = {
      files: `./output/webcomponent/src/components/${component.name}/${component.name}.ts`,
      processor: (input) => {
        const filteredInput = input
          .split("\n")
          .filter((line) => !line.includes("@db-ui"))
          .join("\n");
        return updateNestedComponents(filteredInput, component.name);
      },
    };

    const defaultStyleUrl = {
      files: `./output/webcomponent/src/components/${component.name}/${component.name}.ts`,
      from: "this.state = {",
      to: `this.state = {stylePath: "${component.defaultStylePath}",`,
    };

    try {
      Replace.sync(fixImports);
      Replace.sync(defaultStyleUrl);
      renameFile(
        `../../output/webcomponent/src/components/${component.name}/${component.name}.ts`,
        `../../output/webcomponent/src/components/${component.name}/${component.name}.js`
      );
    } catch (error) {
      console.error("Error occurred:", error);
    }
  });
};
