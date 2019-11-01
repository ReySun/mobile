const path = require('path');

const UrlResolved = (...args) => {
  return path.resolve(...args)
}
module.exports = {
  UrlResolved
}