const path = require('path')

exports.resolvePath = function(dir = '') {
  return path.join(__dirname, '..', dir)
}
