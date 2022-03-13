const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
require("dotenv").config();

module.exports = ({ production }) => {
  const { API_LOCAL_HOST, API_SERVER_HOST, API_PORT } = process.env;
  const API = `https://${
    production ? `${API_SERVER_HOST}` : `${API_LOCAL_HOST}`
  }:${API_PORT}`;
  return {
    entry: "./src/js/index.js",
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
        base: production ? "/js-study/" : "/dist/",
      }),
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
      new webpack.EnvironmentPlugin({
        API_URL: API,
      }),
    ],
    mode: production ? "production" : "development",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "> 2%, not dead",
                    corejs: 3,
                    useBuiltIns: "entry",
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
  };
};
