const { resolve } = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({}),
      new OptimizeCssAssetsWebpackPlugin({}),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /.*\.(png|jpe?g|svg)/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            esModule: false,
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
