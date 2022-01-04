const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".ts", ".json"],
  },
  devtool: "source-map",
  entry: {
    app: "./src/main.ts",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
