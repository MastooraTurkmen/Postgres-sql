const express = require('express')
const app = express()
const config = require('./config')
const mongoose = require('mongoose')
const setupController = require('./controllers/setupController')

app.use('/assets', express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

mongoose.connect(config.getDdConnectionString())
setupController(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('server is listening on port 3000')
})