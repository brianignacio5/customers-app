const webpack = require("webpack");
const path = require("path");

var dotenv = require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});
const serverConfig = {
  entry: {
    server: path.resolve(__dirname, "index.ts"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed,
    })
  ],
  resolve: {
    extensions: ["tsx", ".ts", ".js", ".json"],
  },
  target: "node",
};

module.exports = serverConfig;
