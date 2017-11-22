const cheerio = require('cheerio')
const crawl = require('./index')
const utils = require('../utils')
const offline = require('./file')
const url = 'http://ozonecinemas.com/now_showing.php'
const file= "./ozone-cinemas.html"

module.exports = () => {
  const upcoming = ".content .container #layerslider > .ls-layer"
  const nowShowing = ".section.read_post_list .vertical_list > .clearfix"
  const img = nowShowing+ ' img '
  const title = nowShowing+ " .slide-text1 .clearfix a"
  const date = nowShowing+ " .slide-text1 .clearfix .event_date"
  return {
    offline: async () => {
      return await offline(file).then($ => {
        let x = 0//$(nowShowing).length
        let res = []
        console.log("Loaded..")
        const trailer = " .section_5 iframe"
        const title = " .section_5 .clearfix > b > font"
        const text = " .section_5 .post_text p"
        const days = " .section_5 .post_text p > span > strong"
        const time = $(nowShowing + text).eq(x).text().match(/\d{1,2}:\d{2}(AM|PM)/g)
        while (x < $(nowShowing).length) {
          res.push({
            title: $(nowShowing + title).eq(x).text().trim().replace(/\n +/g, ""),
            text: $(nowShowing + text).eq(x).text().trim().replace(/\n +/g, ""),
            showTime: utils.date(
              $(nowShowing + days).eq(x).text().replace(":", "").trim(),
              $(nowShowing + text).eq(x).text().match(/\d{1,2}:\d{2}(AM|PM)/g)
            ).interval(),
            trailer: $(nowShowing + trailer).eq(x).attr('src')
          })
          x++
        }
        return res
      })
    },
    upcoming: async () => {
      return await crawl(url).then($ => {
        let x = 0//$(nowShowing).length
        let res = []
        console.log("Loaded..")
        const trailer = " .section_5 iframe"
        const title = " .section_5 .clearfix font"
        const text = " .section_5 .post_text p"
        while (x < $(nowShowing).length) {
          console.log(x)
          res.push({
            title: $(nowShowing + title).eq(x).text(),
            text: $(nowShowing + text).eq(x).text(),
            trailer: $(nowShowing + trailer).eq(x).attr('src')
          })
          x++
        }
        return res
      })
    }
  }
}
