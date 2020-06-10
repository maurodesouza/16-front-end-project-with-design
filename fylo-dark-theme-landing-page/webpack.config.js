const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptmizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const Autoprefixer = require('autoprefixer');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({}),
      new OptmizeCssAssetsWebpackPlugin({}),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [Autoprefixer()],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /(png|svg|jpe?g)/i,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            outputPath: 'images',
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    port: 3000,
  },
};
