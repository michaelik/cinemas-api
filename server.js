const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 4111
const routes = require('./routes')

const isProduction = () => false;

app.use(cors())
app.use(routes)

app.all('*', (err, req, res, next) => {
  if (!isProduction()) {
    res.json(err)
  }
})
module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('Running on...', port)
})
