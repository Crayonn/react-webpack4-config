var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var miniCssExtractPlugin = require('mini-css-extract-plugin');
var HotMiddleWareConfig = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
var paths = require('./paths');
var vendors = require('./vendors');
var packageConfig = require(paths.packagePath);

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: {
    vendors,
    app: [HotMiddleWareConfig, '@babel/polyfill', './index.js']
  },
  output: {
    path: paths.assetsPath,
    filename: 'js/[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.es6', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['css-hot-loader', {
          loader: miniCssExtractPlugin.loader,
        }, "css-loader"],
      },
      {
        test: /\.less$/,
        use: ['css-hot-loader', {
          loader: miniCssExtractPlugin.loader,
        }, 'css-loader', 'less-loader']
      },
      {
        test: /\.(gif|jpg|jpeg|png|eot|woff|ttf|woff2|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[ext]',
            outputPath: 'images/',
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
        }
      },
    }
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new HtmlWebpackPlugin({
      title: packageConfig.name,
      filename: paths.htmlFilePath,
      template: paths.htmlTempletePath,
      favicon: paths.faviconPath,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
  ]
}
