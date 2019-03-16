const url = require('url')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const { resolvePath } = require('./utils')

const { publicUrl } = require('./config')
const publicPath = url.parse(publicUrl).pathname

/**
 * @type {import('webpack').Configuration}
 */
const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  bail: true,
  devtool: process.env.CI ? 'source-map' : false,
  output: {
    filename: '[name].[chunkhash:8].js',
    publicPath,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolvePath('public'), // static assets
        to: '[name].[ext]',
      },
    ]),
  ],
})

module.exports = webpackConfig
