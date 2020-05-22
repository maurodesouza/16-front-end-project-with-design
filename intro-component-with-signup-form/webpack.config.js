const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({}),
      new OptimizeCssAssetsWebpackPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true }}],
        },
      }),
    ],
  },
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
          MinCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ],
      },
      {
        test: /.*\.(png|jpe?g|gif|svg)/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            esModule: false,
          }
        },
      },
    ],
  },
  plugins: [
    new MinCssExtractPlugin({
      filename: 'style.css',   
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
  }
};
