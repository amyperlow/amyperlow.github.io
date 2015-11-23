var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'main': [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      './scripts/main.js'
    ],
    'base-style': './style/base.less',
    'desktop-style': './style/desktop.less'
  },
  output: {
    filename: '[name].js',
    publicPath: '/static/',
    path: './static/',
    chunkFilename: '[id].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css', { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      }
    ]
  }
};

