const express = require('express')

require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const GameMonitor = require('./GameMonitor')

const gameMonitor = new GameMonitor()
const app = express()
const port = 5000

const playerRoute = require('./api/controllers/players')
const gamesRoute = require('./api/controllers/games')(gameMonitor)
const characterRoute = require('./api/controllers/characters')(gameMonitor)

app.use(cors())
app.use('/', express.static(__dirname))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // support json encoded bodies

app.get('/', (req, res) => {
  res.send(
    'Welcome adventurer!  Are you sure you wish to proceeed.   There are dark things lurking in the shadows......'
  )
})
app.use('/api/players', playerRoute)
app.use('/api/games', gamesRoute)
app.use('/api/characters', characterRoute)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app
