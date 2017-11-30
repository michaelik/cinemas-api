const crawl = require("../../crawler")
const offline = require("../../crawler/file")
const utils = require('../../utils')
const url = "https://www.nowshowing.com.ng/today.php"
const file = "now-showing-filmhouse.html"

function main() {
  let cinemas = "select.lagosCinemas option"
  let list = "card"
  return crawl(url)
  .then($ => {
    let length = $(list).length
    let arr = []
    for(let x; x <= length; length++) {
      arr.push({
        title: $(list + " > .card-header > a > h2").eq(x).text(),
        starring: $(list + " > .card-content .list-block").eq(x).find("ul li.item-content .content-block").eq(0), 
        synopsis: $(list + " > .card-content .list-block").eq(x).find("ul li.item-content .content-block").eq(1), 
        runningTime: $(list + " > .card-content .list-block").eq(x).find("ul li.item-content .content-block").eq(2), 
        videoUrl: $(list + " > .card-content .list-block").eq(x).find("ul li.item-content .content-block").eq(3), 
      })
    }
    return arr
  })
  .catch(err => {
    return offline(file)
      .then($ => {
        let length = $(list).length
        let arr = []
        for(let x; x <= length; length++) {
          arr.push({
            title: $(list + " > .card-header > a > h2").eq(x).text(),
            starring: $(list + " > .card-content .list-block").eq(x).find("ul li.item-content .content-block").eq(0), 
            synopsis: $(list + " > .card-content .list-block").eq(x).find("ul li.item-content .content-block").eq(1), 
            runningTime: $(list + " > .card-content .list-block").eq(x).find("ul li.item-content .content-block").eq(2), 
            videoUrl: $(list + " > .card-content .list-block").eq(x).find("ul li.item-content .content-block").eq(3), 
          })
        }
        return arr
      })
  })
}


module.exports = main