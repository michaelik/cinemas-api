const cheerio = require('cheerio');
const request = require('request');

module.exports = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {
        reject(err)
        return
      }
      resolve(cheerio.load(body, { normalizeWhitespace:true }) , body)
    })
  })
}