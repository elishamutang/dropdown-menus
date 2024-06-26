const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  plugins: [new MiniCSSExtractPlugin({filename: "styles.css"})],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
    ]
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerWebpackPlugin(),
    ]
  }
});
