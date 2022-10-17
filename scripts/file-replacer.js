const replace = require('replace-in-file');

const options = {
  files: "./output/vue/vue3/src/components/button/index.js",
  from: './button',
  to: './button.vue',
};

try {
  const results = replace.sync(options);
  console.log("Replacement results:", results);
} catch (error) {
  console.error("Error occurred:", error);
}
