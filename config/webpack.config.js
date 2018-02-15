const webpack = require('webpack');
const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const rootPath = path.resolve(__dirname, '../');
const sourcePath = path.resolve(rootPath, 'src');

module.exports = {
  entry: {
    app: path.resolve(sourcePath, 'index.js')
  },
  output: {
    path: path.resolve(rootPath, '/dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      path.resolve(sourcePath)
    ]
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Webpack setup',
      template: path.resolve(sourcePath, 'index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin({ port: 8080 })
  ]
};
