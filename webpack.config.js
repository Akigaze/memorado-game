const path = require("path");

const config = {
  // 打包的入口文件
  entry: "./src/index.js",
  // 打包输出的目录和文件夹
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  mode: "development",
  // 打包监听
  watch: false,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 2000
  },

  module: {
    rules: [
      // JS 加载配置
      {
        test: /\.js/,
        use: ["babel-loader"],
        exclude: /(node_modules|bower_components)/
      },
      // CSS 加载配置
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: "inline-source-map",
  // webpack-dev-server 对webpack服务的配置
  devServer: {
    contentBase: "./dist",
    host: "localhost",
    port: 8090,
    historyApiFallback: true
  }
};

module.exports = config;
