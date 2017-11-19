const express = require('express')
const ozone = require('../crawler/ozone')()
const router = express.Router()


router.get('/', (req, res) => {
  res.json({ result: "Welcome to the Cinemas API" });
})


router.get('/ozone', (req, res) => {
  ozone.nowShowing().then($ => {
    console.log($('iframe').attr('src'))
    res.send({res: $('iframe').attr('src')});
  }).catch(console.log)
})


module.exports = router