const crawl = require("../index");
const utils = require("../../utils");
const offline = require("../file");
const url = 'http://silverbirdcinemas.com/secabuja/'
const file= "./silverbird-secabuja.html"

module.exports = () => {
  const title = "p span strong";
  return {
    offline: async () => {
      return await offline(file).then($ => {
        let postLength = $("span").has("img.alignleft").length
        let x = 0;
        let arr = [];
        while (x < postLength) {
          arr.push({
            title: $("span").has("img.alignleft").eq(x).children("strong").eq(0).text().replace(/(\t|\n)/g,"")
          });
          x++;
        }
        console.log(arr)
        return arr;
      });
    },
    nowShowing: async () => {
      return await crawl(url).then($ => {
        let postLength = $("span").has("img.alignleft").length
        let x = 0;
        let arr = [];
        while (x < postLength) {
          arr.push({
            title: $("span").has("img.alignleft").eq(x).children("strong").eq(0).text().replace(/(\t|\n)/g,"")
          });
          x++;
        }
        console.log(arr)
        return arr;
      });
    }
  };
};
