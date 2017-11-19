const fs = require('fs')
const cheerio = require('cheerio')

module.exports = (url) => {
  return new Promise((resolve, reject) => {
    return fs.readFile(url, (err, data) => {
      if(err) {
        reject(err)
        return
      }
      resolve(cheerio.load(data, { normalizeWhitespace:true }))
    })
  })
}