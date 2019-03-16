const { resolvePath } = require('./utils')
const { description } = require(resolvePath('package.json'))

module.exports = {
  port: 3000, // dev server port
  publicUrl: process.env.PUBLIC_URL || '/',
  // @see https://github.com/jaketrent/html-webpack-template
  templateConfig: {
    title: "Buddy's Github Events",
    appMountId: 'root',
    mobile: true,
    // @see https://github.com/joshbuchea/HEAD#meta
    meta: [
      {
        name: 'description',
        content: description,
      },
    ],
  },
}
