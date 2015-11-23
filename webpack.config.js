var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var debug = process.env.NODE_ENV !== 'production';

var liveReload = [
  'webpack/hot/dev-server',
  'webpack-dev-server/client?http://localhost:8080'
];
var mainEntry = ['./scripts/main.js'];

if (debug) {
  mainEntry = liveReload.concat(mainEntry);
}

module.exports = {
  entry: {
    'main': mainEntry,
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

