const path = require("path");
const Extract = require("mini-css-extract-plugin");
const WebpackWatchPlugin = require("webpack-watch-files-plugin").default;

module.exports = {
  mode: 'development',
  entry: `${__dirname}/src/index.ts`,
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "scripts.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: "ts-loader"
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [Extract.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  devtool: false,
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new Extract({
      filename: "styles.css",
    }),
    new WebpackWatchPlugin({
      files: ["./app/**/*", "./app/**/**/*"]
    })
  ]
};