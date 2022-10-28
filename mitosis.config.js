const PowerAppsPlugin = require("./plugins/power-apps");

module.exports = {
  files: "src/**",
  targets: [
    "angular",
    "vue3",
    "webcomponent",
    "svelte",
    "react",
    "preact",
    "reactNative",
  ],
  options: {
    react: {
      typescript: true,
      plugins: [PowerAppsPlugin],
    },
    angular: {
      typescript: true,
    },
  },
  extension: "dbux.tsx",
};
