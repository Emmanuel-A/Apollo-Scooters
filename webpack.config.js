const path = require("path");
const Extract = require("mini-css-extract-plugin");
const WebpackWatchPlugin = require("webpack-watch-files-plugin").default;

module.exports = {
  entry: `${__dirname}/app/scripts/index.js`,
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "scripts.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/transform-runtime"],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [Extract.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new Extract({
      filename: "styles.css",
    }),
    new WebpackWatchPlugin({
      files: ["./app/**/*", "./app/**/**/*"],
    }),
  ],
};