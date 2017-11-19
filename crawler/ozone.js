const crawl = require('./index')
const offline = require('./file')
const url = 'http://ozonecinemas.com/now_showing.php'
const file= "./ozone-cinemas.html"

module.exports = () => {
  return {
    nowShowing: async () => {
      return await offline(file)
    }
  }
}