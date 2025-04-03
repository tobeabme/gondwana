"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html", // 明确指定输出文件名
    }),
    new HtmlWebpackPlugin({
      template: "./src/aboutus.html",
      filename: "aboutus.html", // 明确指定输出文件名
    }),
    new HtmlWebpackPlugin({
      template: "./src/products.html",
      filename: "products.html", // 明确指定输出文件名
    }),
    new HtmlWebpackPlugin({
      template: "./src/brand.html",
      filename: "brand.html", // 明确指定输出文件名
    }),
    new HtmlWebpackPlugin({
      template: "./src/contactus.html",
      filename: "contactus.html", // 明确指定输出文件名
    }),
    new HtmlWebpackPlugin({
      template: "./src/slice.html",
      filename: "slice.html", // 明确指定输出文件名
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader",
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                // This silences the deprecation warnings.  Use with caution!
                // The best solution is to update Bootstrap.
                quietDeps: true,
              },
            },
          },
        ],
      },
    ],
  },
};
