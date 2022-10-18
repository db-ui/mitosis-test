module.exports = {
  files: "src/**",
  targets: ["angular", "vue3", "webcomponent", "svelte", "react", "preact"],
  options: {
    react: {
      typescript: true,
    },
    angular: {
      typescript: true,
    },
  },
  extension: "dbux.tsx",
};
