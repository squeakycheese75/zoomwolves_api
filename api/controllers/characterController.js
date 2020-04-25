// const { loadCharacters } = require('../helpers/charactersHelpers')

function characterController(monitor, Game, Cast) {
  async function get(req, res) {
    Cast.find()
      .then((result) => {
        res.send(result)
      })
      .catch((error) => res.status(500).send(error))
  }
  async function getWithPlayerIdGameId(req, res) {
    const { gameId, playerId } = req.params
    Game.findById(gameId, (err, game) => {
      if (err) throw err
      const resval = game.players.find((player) => player.id === playerId)
      let casting = {
        character: { role: 'pending', desc: '', script: '' },
        isCast: false,
      }
      if (resval && resval.role.length > 0) {
        Cast.findOne({ role: resval.role }, (err, result) => {
          if (err) {
            res.status(500).send(err)
          }
          casting = {
            character: {
              role: resval.role,
              desc: result.desc,
              script: result.script,
            },
            isCast: true,
          }
          res.send(JSON.stringify(casting))
        })
      } else {
        res.send(JSON.stringify(casting))
      }
    })
  }
  return { get, getWithPlayerIdGameId }
}

module.exports = characterController
