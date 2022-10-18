const Replace = require("replace-in-file");

const Components = require("./components");

module.exports = () => {
  Components.forEach((component) => {
    const options = {
      files: `./output/vue/vue3/src/components/${component.name}/index.js`,
      from: `./${component.name}`,
      to: `./${component.name}.vue`,
    };

    try {
      Replace.sync(options);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  });
};
