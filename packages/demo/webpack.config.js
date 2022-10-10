const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
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
      "demo-common": path.resolve(__dirname, "src/common/"),
      // "@cps/vue2-schema-form-gsui": '@cps/vue2-schema-form-gsui/src/index'
    },
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
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
      template: path.resolve(__dirname, "src/pages/index/index.html"),
      inject: "body",
      filename: "index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/pages/schema-generator/schema-generator.html"),
      inject: "body",
      filename: "schema-generator.html",
      chunks: ["schema-generator"]
    }),
    new HtmlWebpackTagsPlugin({
      links: [
        'https://cdn.jsdelivr.net/npm/element-ui@2.15.10/lib/theme-chalk/index.css',
        'public/gs-ui/gs-ui.min.css',
      ],
      scripts: [
        'https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.min.js',
        'https://cdn.jsdelivr.net/npm/vue-router@3.6.5/dist/vue-router.min.js',
        'https://cdn.jsdelivr.net/npm/element-ui@2.15.10/lib/index.js',
        'public/gs-ui/gs-ui.min.js',
      ],
      append: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: '../../node_modules/@gs-ui/gs-ui/lib/umd/gs-ui.min.js', to: 'public/gs-ui' },
        { from: '../../node_modules/@gs-ui/gs-ui/lib/umd/gs-ui.min.css', to: 'public/gs-ui' },
      ]
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
