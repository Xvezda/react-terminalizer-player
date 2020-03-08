/**
 * Copyright (c) 2020 Xvezda <xvezda@naver.com>
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
const webpack = require('webpack');
const path = require('path');

const config = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: path.resolve(path.join(__dirname, 'src', 'index.js')),
    player: path.resolve(path.join(__dirname, 'src', 'player.js')),
  },
  output: {
    path: path.resolve(path.join(__dirname, 'dist')),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    /*
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Terminal: ['xterm', 'Terminal'],
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    */
   new webpack.NoEmitOnErrorsPlugin()
  ],
};

if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'eval';
} else {
  config.devtool = false;
  /*
  config.optimization = {
    splitChunks: {
      chunks: 'all'
    }
  }
  */
}

module.exports = config


