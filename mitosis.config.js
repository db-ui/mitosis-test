module.exports = {
  files: "src/**",
  targets: [
    "angular",
    "vue3",
    "webcomponent",
    "svelte",
    "react",
    "preact",
    "lit",
  ],
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
