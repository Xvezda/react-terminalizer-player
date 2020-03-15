/**
 * Copyright (c) 2020 Xvezda <xvezda@naver.com>
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
const webpack = require('webpack')
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: path.resolve(path.join(__dirname, 'src', 'index.js')),
    demo: path.resolve(path.join(__dirname, 'src', 'demo.js'))
  },
  output: {
    path: path.resolve(path.join(__dirname, 'dist')),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
    publicPath: '../dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname),
    compress: true,
    port: 9000
  }
}

if (process.env.NODE_ENV !== 'production') {
  /* Development mode */
  config.devtool = 'eval'
  // config.entry.demo = path.resolve(path.join(__dirname, 'src', 'demo.js'))
} else {
  config.devtool = false
}

module.exports = config
