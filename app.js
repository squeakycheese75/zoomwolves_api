const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const cors = require('cors')

const playerRoute = require('./api/controllers/players')
const gamesRoute = require('./api/controllers/games')
const characterRoute = require('./api/controllers/characters')

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
