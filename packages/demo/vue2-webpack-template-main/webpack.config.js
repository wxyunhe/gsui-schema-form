const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/pages/index/index.js",
    "schema-generator": "./src/pages/schema-generator/schema-generator.js",
  },
  resolve: {
    extensions: [".vue", ".js", ".jsx", ".json"],
    alias: {
      "demo-common": path.resolve(__dirname, "src/common"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.ejs"),
      inject: "body",
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    hot: true,
    client: {
      progress: true,
      reconnect: true,
    },
    compress: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
