var vendors = require('./vendors');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var miniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var paths = require('./paths');
var vendors = require('./vendors');
var packageConfig = require(paths.packagePath);

module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    app: ['@babel/polyfill', './index.js'],
    vendors
  },
  output: {
    path: paths.assetsPath,
    filename: 'js/[name]-[hash].js',
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
        use: [{
          loader: miniCssExtractPlugin.loader,
        }, "css-loader", {
          loader: "postcss-loader",
          options: {
            config: {
              path: paths.configPath
            }
          }
        }],
      },
      {
        test: /\.less$/,
        use: [{
          loader: miniCssExtractPlugin.loader,
        },
          'css-loader',
        {
          loader: "postcss-loader",
          options: {
            config: {
              path: paths.configPath,
            },
          }
        },
        {
          loader: 'less-loader',
        }]
      },
      {
        test: /\.(gif|jpg|jpeg|png|eot|woff|ttf|woff2|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
        }
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
        uglifyOptions: {
          compress: true,
          mangle: {
            safari10: true,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
        }
      })
    ]
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
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
}
