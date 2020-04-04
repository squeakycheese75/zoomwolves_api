const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const playerRoute = require('./api/controllers/player')
const clientRoute = require('./api/controllers/client')
const characterRoute = require('./api/controllers/character')

app.use('/', express.static(__dirname))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // support json encoded bodies

app.get('/', (req, res) => {
  res.send(
    'Welcome adventurer!  Are you sure you wish to proceeed.   There are dark things lurking in the shadows......'
  )
})
app.use('/api/player', playerRoute)
app.use('/api/client', clientRoute)
app.use('/api/character', characterRoute)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app
