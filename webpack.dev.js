const HTMLWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: {
      directory: './dist'
    },
    historyApiFallback: true,
    port: 8080
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './template.dev.html'
    })
  ]
})
