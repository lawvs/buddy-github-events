const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTemplate = require('html-webpack-template')

const { resolvePath } = require('./utils')
const { templateConfig } = require('./config')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: process.env.NODE_ENV,
  entry: resolvePath('src/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'json'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[chunkhash:7].[ext]',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    // @see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,
      ...templateConfig,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
}
