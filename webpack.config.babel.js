// import path from "path";
import Webpack from "webpack";
import WriteFilePlugin from "write-file-webpack-plugin";

export default {
  entry: {
    app: [
      "webpack-dev-server/client?http://0.0.0.0:8080",
      "webpack/hot/only-dev-server",
      "./src/index.js"
    ]
  },
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loaders: ["react-hot", "babel"],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: !true,
    contentBase: "./",
    outputPath: __dirname,
    filename: "bundle.js",
    hot: true,
    stats: { colors: true }
  },
  plugins: [
      //new WriteFilePlugin(),
      new Webpack.HotModuleReplacementPlugin(),
      new Webpack.NoErrorsPlugin()
  ]
};
