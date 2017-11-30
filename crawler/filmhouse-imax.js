const crawl = require('./index')
const utils = require('../utils')
const offline = require('./file')
const url = 'http://ozonecinemas.com/now_showing.php'
const file= "./filmhouseng.com-imax.html"

module.exports = () => {
  return {
    offline: async () => {
      return await offline(file).then($ => {
        const list = ".ection.group .col.mholder2"
        const title = list + " .col.mholder2-1"
        const text = list + " .col.mholder2-3 > p:first-of-type"
        const image = list + " .warning img"
        const trailer = ".col.mholder1 .col.mholder1-2 .video-link"
        let x = 0
        console.log("List length ", $(list).length)
        let res = []
        while(x < $(list).length) {
          res.push({
            title: $(title).eq(x).text().replace(/\\n/g,"").trim(),
            image: $(image).eq(x).attr("src"),
            trailer: "https://www.youtube.com/embed/"+$(trailer).eq(x).data("video-id"),
            text: $(text).eq(x).text().replace(/\\n/g,"").trim()
          })
          x++
        }
        return res
      })
    },
    nowShowing: async () => {
      return await crawl(url).then($ => {
        const list = ".ection.group .col.mholder2"
        const title = list + " .col.mholder2-1"
        const text = list + " .col.mholder2-3 > p:first-of-type"
        const image = list + " .warning img"
        const trailer = ".col.mholder1 .col.mholder1-2 .video-link"
        let x = 0
        console.log("List length ", $(list).length)
        let res = []
        while(x < $(list).length) {
          res.push({
            title: $(title).eq(x).text().replace(/\\n/g,"").trim(),
            image: $(image).eq(x).attr("src"),
            trailer: "https://www.youtube.com/embed/"+$(trailer).eq(x).data("video-id"),
            text: $(text).eq(x).text().replace(/\\n/g,"").trim()
          })
          x++
        }
        return res
      })
    }
  }
}