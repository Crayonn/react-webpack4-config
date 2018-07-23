

const webpackDevMiddleware = require('webpack-hot-middleware');
const webpackHotMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../config/webpack.config.dev');
const webpack = require('webpack');

module.exports = function () {
  const compiler = webpack(webpackConfig);
  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: {
      colors: true,
      chunks: false,
      children: false,
    },
  });
  const hotMiddleware = webpackHotMiddleware(compiler);

  return {
    devMiddleware,
    hotMiddleware,
  }
}

