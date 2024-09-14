const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const fs = require("fs")

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "[name][chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(process.cwd(), "tsconfig.json"),
              appendTsSuffixTo: [/\.vue$/],
            },
          },
          path.resolve(__dirname, "src/loaders/test-loader"),
          path.resolve(__dirname, "src/loaders/clean-log-loader"),
        ],
      },
      {
        test: /\.(png|jpg)/,
        type: "asset/resource",
      },
      {
        test: /\.vue/,
        loader: "vue-loader",
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    usedExports: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    host: "www.ysg.com",
    port: 8088,
    server: {
      type: "https",
      options: {
        key: fs.readFileSync("src/assets/www.example.com+3-key.pem"),
        cert: fs.readFileSync("src/assets/www.example.com+3.pem"),
      },
    },
    client: {
      // 当出现编译错误或警告时，再浏览器中显示全覆盖
      overlay: true,
    },
    proxy: [
      {
        context: ["/vue3-element-admin"],
        target: "https://www.ysg.com:3001/",
        secure: false,
      },
    ],
  },
}
