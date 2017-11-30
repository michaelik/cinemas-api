const express = require("express");
const ozone = require("../crawler/ozone")();
const main = require("../crawler/nowshowing/main");
const filmhouseImax = require("../crawler/filmhouse-imax")();
const filmhouseSurulere = require("../crawler/filmhouse-surulere")();
const silverbirdFestac = require("../crawler/silverbird/silverbird-festac")();
const silverbirdUyo = require("../crawler/silverbird/silverbird-uyo")();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ result: "Welcome to the Cinemas API" });
});

router.get("/ozone", (req, res) => {
  ozone
    .upcoming()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      ozone.offline().then(result => {
        res.json(result);
      });
    });
});

router.get("/filmhouse-imax", (req, res) => {
  filmhouseImax
    .nowShowing()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      filmhouseImax.offline().then(result => {
        res.json(result);
      });
    });
});

router.get("/filmhouse-surulere", (req, res) => {
  filmhouseSurulere
    .nowShowing()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      filmhouseSurulere.offline().then(result => {
        res.json(result);
      });
    });
});

router.get("/silverbird-festac", (req, res) => {
  silverbirdFestac
    .nowShowing()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      silverbirdFestac.offline().then(result => {
        res.json(result);
      });
    });
});

router.get("/silverbird-uyo", (req, res) => {
  silverbirdUyo
    .nowShowing()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      silverbirdUyo.offline().then(result => {
        res.json(result);
      });
    });
});

router.get("/now-showing", async (req, res) => {
  res.json( await main());
})

module.exports = router;
