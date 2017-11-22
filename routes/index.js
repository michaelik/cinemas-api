const express = require('express')
const ozone = require('../crawler/ozone')()
const filmhouseImax = require('../crawler/filmhouse-imax')()
const router = express.Router()


router.get('/', (req, res) => {
  res.json({ result: "Welcome to the Cinemas API" });
})


router.get('/ozone', (req, res) => {
  ozone.upcoming().then(result => {
    res.json(result);
  }).catch((err) => {
    ozone.offline().then(result => {
      res.json(result);
    })
  })
})

router.get('/filmhouse-imax', (req, res) => {
  // filmhouseImax.upcoming().then(result => {
  //   res.json(result);
  // }).catch((err) => {
    filmhouseImax.offline().then(result => {
      res.json(result);
    })
  // })
})


module.exports = router