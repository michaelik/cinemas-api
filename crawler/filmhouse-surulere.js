const crawl = require("../crawler")
const utils = require('../utils')
const offline = require("./file")
const url = "http://filmhouseng.com/surulere.html"
const file = "./filmhouseng.com-surulere.html"

module.exports = () => {
  // const 
  return {
    offline: async () => {
      return await offline(file).then($ => {
        const list = ".section.read_post_list > ul.vertical_list > li.clearfix"
        const title = list + " > .col-lg-7.col-md-6.col-sm-6 > .section_5 .clearfix  b > font"
        const post_text = list + " div .post_text > p"
        const showTime = list + " div .post_text div "
        const trailer = list + " .iframe_video_container iframe"
        const runningTime = list + " .section_title"
        let x = 0
        console.log("List length ", $(list).length)
        let res = []
        while(x < $(list).length) {
          res.push({
            title: $(title).eq(x).text().replace(/\\n/g,"").trim(),
            trailer: $(trailer).eq(x).attr("src"),
            showTime: $(showTime).eq(x).text().match(/\w{3}( to \w{3})?: .+ (\d{1,2}:\d{1,2}){1,}PM/),
            runningTime: $(runningTime).eq(x).find("p").eq(1).text().replace(/\\n/g, "").replace("Running Time", "").trim(),
            text: $(post_text).eq(x).text().replace(/\n/g,"").replace("  ", "").trim()
          })
          x++
        }
        return res
      })
    },
    nowShowing: async () => {
      return await crawl(url).then($ => {
        const list = ".section.read_post_list > ul.vertical_list > li.clearfix"
        const title = list + " > .col-lg-7.col-md-6.col-sm-6 > .section_5 .clearfix  b > font"
        const post_text = list + " div .post_text > p"
        const showTime = list + " div .post_text div "
        const trailer = list + " .iframe_video_container iframe"
        const runningTime = list + " .section_title"
        let x = 0
        console.log("List length ", $(list).length)
        let res = []
        while(x < $(list).length) {
          res.push({
            title: $(title).eq(x).text().replace(/\\n/g,"").trim(),
            trailer: $(trailer).eq(x).attr("src"),
            showTime: $(showTime).eq(x).text().match(/\w{3}( to \w{3})?: .+ (\d{1,2}:\d{1,2}){1,}PM/),
            runningTime: $(runningTime).eq(x).find("p").eq(1).text().replace(/\\n/g, "").replace("Running Time", "").trim(),
            text: $(post_text).eq(x).text().replace(/\n/g,"").replace("  ", "").trim()
          })
          x++
        }
        return res
      })
    }
  }
}