const dotenv = require("dotenv");
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = env =>
  merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      hot: true,
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      historyApiFallback: true
    },
    optimization: {
      usedExports: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      }),
      new Dotenv({
        path: env.ENVIRONMENT === "staging" ? "./.env.staging" : "./.env.dev"
      })
    ]
  });
