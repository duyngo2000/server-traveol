const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
var cors = require('cors')

const port = process.env.PORT || 5000
const tourRouter = require('./routers/tour.js')
const newsRouter = require('./routers/news.js')
const contactRouter = require('./routers/contact.js')
const accountRouter = require('./routers/account.js')
const uploadRouter = require('./routers/upload.js')
const paypalRouter = require('./routers/paypal.js')
const userRouter = require('./routers/user.js')
const placeRouter = require('./routers/place.js')
const connectDB = require('./connectDB.js')

connectDB()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/news/upload', express.static('upload'))
app.use('/api/tour/upload', express.static('upload'))
app.use('/upload/', express.static('upload'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/tour/', cors(), tourRouter)
app.use('/api/news/', cors(), newsRouter)
app.use('/api/contact/', cors(), contactRouter)
app.use('/api/account/', cors(), accountRouter)
app.use('/upload/', cors(), uploadRouter)
app.use('/paypal/', cors(), paypalRouter)
app.use('/api/user/', cors(), userRouter)
// app.use('/api/place/', cors(), placeRouter)

app.use(cors(), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})