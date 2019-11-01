const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const loaders = require('./config/loaders');
const routesConfig = require('./src/config.routes');

const isEnvDevelopment = process.env.NODE_ENV === 'development' ? true: false;

let enterObject = {}, // 入口
  plugins = [];
for (let route of routesConfig) {
  enterObject[route['filename']] = [route['scriptUrl'], ...route['commonJs']]
  let htmlTemplate =  new HtmlWebpackPlugin({
    filename: `${route['filename']}.html`,
    template: route['templateUrl'],
    inject: true,
    chunks: ['common', route['filename']],
    // favicon: './src/favicon.ico',
    // title: 'title',
    minify: {
      collapseWhitespace: true
    }
  });
  plugins.push(htmlTemplate);
}

!isEnvDevelopment && plugins.push(new OptimizeCSSAssetsPlugin({}));

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: enterObject,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash:5].js'
  },
  module: {
    rules: loaders
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:5].css',
    }),
    ...plugins
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
}
