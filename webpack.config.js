const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");

module.exports = {
  devtool: "eval",
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./ui/theme/elements.scss",
    "./ui/index.js"
  ],
  output: {
    publicPath: "/static/",
    path: path.join(__dirname, "static"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            query: {
              sourceMap: true,
              module: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            query: {
              outputStyle: "expanded",
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: { postcss: [autoprefixer] } }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    inline: false,
    historyApiFallback: true,
    proxy: {
      "/api/*": {
        target: "http://127.0.0.1:5000"
      }
    }
  }
};
