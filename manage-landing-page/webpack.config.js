const { resolve } = require('path');

const Autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin({}),
      new TerserWebpackPlugin({}),
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
            plugins: [
              '@babel/plugin-proposal-class-properties',
            ],
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          },
        },
      },

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

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],

  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    port: 3000,
  },
};
