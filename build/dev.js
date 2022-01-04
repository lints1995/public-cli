const { baseConfig, plugins, resolvePath } = require("./base");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

let devPlugins = [
  new FriendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
      messages: [`You application is running at http://localhost:4000`],
    },
    clearConsole: true,
  }),
].concat(plugins);
module.exports = {
  ...baseConfig,
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: resolvePath("dist"),
  },
  plugins: devPlugins,
};
