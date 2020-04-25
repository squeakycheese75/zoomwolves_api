const { randomlyPickAColour, normalizeName } = require('../helpers/gameHelpers')
const { castPlayers } = require('../helpers/castHelper')

function gamesController(monitor, Game) {
  async function post(req, res) {
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
      console.info('New Game created')
    })

    const colour = randomlyPickAColour()
    newGame.colour = colour
    // eslint-disable-next-line no-underscore-dangle
    const newGameId = newGame._id
    const resval = { id: newGameId, keyName, colour }

    res.setHeader('Content-Type', 'application/json')
    res.send(resval)
  }
  async function get(req, res) {
    Game.findById(req.params.id, (err, registeredGame) => {
      if (err) {
        throw err
      }
      res.setHeader('Content-Type', 'application/json')
      res.send(registeredGame)
    })
  }
  async function postClose(req, res) {
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
              res.setHeader('Content-Type', 'application/json')
              res.send(result)
            }
          }
        )
      }
    })
  }
  return { post, get, postClose }
}

module.exports = gamesController
