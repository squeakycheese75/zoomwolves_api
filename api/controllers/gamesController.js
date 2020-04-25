const { randomlyPickAColour, normalizeName } = require('../helpers/gameHelpers')
const { castPlayers } = require('../helpers/castHelper')

function gamesController(monitor, Game) {
  async function post(req, res) {
    // console.log('POST /api/games/ received.')
    const clientInfo = req.body
    const keyName = normalizeName(clientInfo.name)

    const newGame = Game({
      owner: keyName,
      status: 'open',
      players: [],
      colour: '',
    })
    newGame.save((error) => {
      if (error) throw error
      // eslint-disable-next-line no-console
      console.info('new Game created')
    })

    const colour = randomlyPickAColour()
    newGame.colour = colour
    // eslint-disable-next-line no-underscore-dangle
    const newGameId = newGame._id
    const resval = { id: newGameId, keyName, colour }

    // Create 5 min timeout to close events..
    // console.log('POST /api/games/ ', resval, 'response ')
    res.setHeader('Content-Type', 'application/json')
    res.send(resval)
  }
  async function get(req, res) {
    // eslint-disable-next-line no-console
    // console.log('GET /api/games/id', req.params.id, ' received.')
    Game.findById(req.params.id, (err, registeredGame) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('Error retrieving item from database', err)
        throw err
      }
      console.log(
        'GET /api/games/id ',
        req.params.id,
        ' responding ',
        registeredGame
      )
      res.setHeader('Content-Type', 'application/json')
      res.send(registeredGame)
    })
  }
  async function postClose(req, res) {
    // console.log('In POST game close', req.params.id)
    Game.findById(req.params.id, (err, game) => {
      if (err) throw err
      // if (game.players.length >= 7) {
      const cast = castPlayers(game.players)

      if (cast.status === 'passed') {
        Game.findByIdAndUpdate(
          req.params.id,
          { players: cast.cast },
          { new: true },
          (erorr, result) => {
            if (err) {
              res.send(erorr)
            } else {
              // console.log('Publishing gameClosed event', req.params.id)
              // const eventId = `gameClosed${req.params.id}`
              // monitor.emit(eventId)
              res.setHeader('Content-Type', 'application/json')
              res.send(result)
            }
          }
        )
      }
      // }
    })
  }
  return { post, get, postClose }
}

module.exports = gamesController
