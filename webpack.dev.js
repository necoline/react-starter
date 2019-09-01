const dotenv = require("dotenv");
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
      contentBase: "./dist",
      hot: true,
      port: 3000,
      historyApiFallback: true
    },
    optimization: {
      usedExports: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new Dotenv({
        path: env.ENVIRONMENT === "staging" ? "./.env.staging" : "./.env.dev"
      })
    ]
  });
