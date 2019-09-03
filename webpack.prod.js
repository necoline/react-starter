const common = require("./webpack.common.js");
const dotenv = require("dotenv");
const merge = require("webpack-merge");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = env =>
  merge(common, {
    mode: "production",
    devtool: "source-map",
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            warnings: false,
            compress: {
              comparisons: false
            },
            parse: {},
            mangle: true,
            output: {
              comments: false,
              ascii_only: true
            }
          },
          parallel: true,
          cache: true,
          sourceMap: true
        })
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyURLs: true
        },
        inject: true
      }),
      new Dotenv({
        path: env.ENVIRONMENT === "staging" ? "./.env.staging" : "./.env.prod"
      })
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.eot(\?v=\d+.\d+.\d+)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,
                mimetype: "application/font-woff",
                name: "[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,
                mimetype: "application/octet-stream",
                name: "[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,
                mimetype: "image/svg+xml",
                name: "[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|ico)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]"
              }
            }
          ]
        }
      ]
    }
  });
