const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const { resolvePath } = require('./utils')

/**
 * @type {import('webpack').Configuration}
 */
const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  // https://webpack.js.org/configuration/devtool/
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/',
  },
  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: resolvePath('public/index.html'),
      inject: true,
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    contentBase: resolvePath('public'),
  },
  performance: {
    hints: false,
  },
})

module.exports = webpackConfig
