const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractWebpackPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const Autoprefixer = require('autoprefixer');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractWebpackPlugin({
      filename: 'style.css',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({}),
      new OptimizeCssAssetsWebpackPlugin({}),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
            cacheDirectory: true,
          }
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractWebpackPlugin.loader,
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
        test: /.*\.(png|svg|jpe?g)/i,
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
