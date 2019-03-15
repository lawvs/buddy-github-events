const url = require('url')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const { resolvePath } = require('./utils')

const publicUrl = process.env.PUBLIC_URL || '/'
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
    publicPath: publicPath,
  },
  plugins: [
    new CleanWebpackPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: resolvePath('public/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
})

module.exports = webpackConfig
