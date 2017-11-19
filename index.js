const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 4111
const routes = require('./routes')

app.use(cors())
app.use(routes)

module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('Running on...', port)
})