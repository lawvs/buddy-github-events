const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.conf')
const { port } = require('./config')
const { resolvePath } = require('./utils')

/**
 * @type {import('webpack').Configuration}
 */
const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  // @see https://webpack.js.org/configuration/devtool/
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    port,
    open: true,
    historyApiFallback: true,
    contentBase: resolvePath('public'), // static assets
  },
  performance: {
    hints: false,
  },
})

module.exports = webpackConfig
