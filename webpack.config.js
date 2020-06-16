const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

var dotenv = require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});
const serverConfig = {
  entry: {
    server: path.resolve(__dirname, "server", "index.ts"),
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

const clientConfig = {
  entry: {
    client: path.resolve(__dirname, "client", "main.ts")
  },
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.sass$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: [".ts", ".js", ".vue", ".json"],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9001,
  },
};

module.exports = [serverConfig, clientConfig];
