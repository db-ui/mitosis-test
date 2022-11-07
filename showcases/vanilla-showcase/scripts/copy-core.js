import Fs from "fs";

Fs.cpSync("./node_modules/@db-ui/core/dist/", "./public/@db-ui/core/dist", {
  recursive: true,
});
