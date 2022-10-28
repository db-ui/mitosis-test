const ChildProcess = require("child_process");

module.exports = () => ({
  json: {
    post: (json) => {
      console.log(json)
      const props = json.meta?.useMetadata?.powerAppProperties;
      let propsCliString = "";
      if (props?.length > 0) {
        const propsString = JSON.stringify(props);
        const propsBuffer = Buffer.from(propsString).toString("base64");
        propsCliString = `--props ${propsBuffer}`;
      }
      // TODO: Make Version dynamic
      ChildProcess.execSync(
        `hygen power-apps new --version 1.0.0 ${json.name
          .replace("DB", "")
          .toLowerCase()} ${propsCliString}`
      );
      return json;
    },
  },
});
