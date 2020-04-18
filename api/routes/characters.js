const express = require('express')

const router = express.Router()

const Game = require('../data/db')

const { loadCharacters } = require('../helpers/charactersHelpers')

module.exports = (monitor) => {
  const gameMonitor = monitor

  router.route('/').get((req, res) => {
    loadCharacters()
      .then((result) => {
        res.send(result)
      })
      .catch((error) => res.status(500).send(error))
  })

  router.route('/:gameId/player/:playerId').get((req, res) => {
    const { gameId, playerId } = req.params
    gameMonitor.on('gameClosed', (id) => {
      if (id === gameId) {
        Game.findById(gameId, (err, game) => {
          if (err) throw err
          const resval = game.players.find((player) => player.id === playerId)

          res.send({ role: resval.role, desc: '' })
        })
      }
    })
  })

  return router
}
