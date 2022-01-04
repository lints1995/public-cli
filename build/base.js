const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const ProgressBar = require("progress-bar-webpack-plugin");

function resolvePath(relativePath) {
  const rootDirectory = process.cwd();
  return path.resolve(rootDirectory, relativePath);
}

const plugins = [
  new ProgressBar(),
  new HtmlWebpackPlugin({
    title: "搜索",
    inject: "body",
    template: resolvePath("index.html"),
  }),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "production"
    ),
  }),
];

const baseConfig = {
  entry: resolvePath("src/main.ts"),
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
    alias: {
      "@": resolvePath("src"),
      "@assets": resolvePath("src/assets"),
    },
  },
};

module.exports = { baseConfig, plugins, resolvePath };
