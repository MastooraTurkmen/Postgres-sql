const express = require('express')

const app = express()


app.use('/assets', express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('server is listening on port 3000')
})