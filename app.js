const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// const morgan = require('morgan')
const router = require('./config/routes')
const bodyParser = require('body-parser')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/', router)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
