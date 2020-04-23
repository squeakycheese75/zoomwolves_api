const { loadCharacters } = require('../helpers/charactersHelpers')

function characterController(monitor, Game) {
  function get(req, res) {
    loadCharacters()
      .then((result) => {
        res.send(result)
      })
      .catch((error) => res.status(500).send(error))
  }
  function getWithPlayerIdGameId(req, res) {
    const { gameId, playerId } = req.params
    // Console.log()
    const eventId = `gameClosed${gameId}`
    monitor.on(eventId, () => {
      console.log('Registering eventListener: ', eventId)
      // if (id === gameId) {
      // console.log('Matched gamedId:', id)
      Game.findById(gameId, (err, game) => {
        if (err) throw err
        const resval = game.players.find((player) => player.id === playerId)
        monitor.removeListener(eventId, () => {
          console.log('Removing event listener: ', eventId)
        })

        res.send(JSON.stringify({ role: resval.role, desc: '' }))
      })
    })
  }
  return { get, getWithPlayerIdGameId }
}

module.exports = characterController
