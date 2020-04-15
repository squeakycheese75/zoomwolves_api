const express = require('express')

const router = express.Router()

const Game = require('../data/db')

module.exports = function (monitor) {
  const gameMonitor = monitor

  router.route('/:gameId/:playerId').get((req, res) => {
    // castCharacter()
    //   .then((data) => {
    // Only return a response when we detect the
    console.log(req.param.gameId)
    console.log(req.param.playerId)
    gameMonitor.on('gameClosed', (id) => {
      if (id === req.param.gameId) {
        Game.findById(req.params.gameId, (err, game) => {
          if (err) throw err
          console.log('gameClosed detected', id)
          res.send(game.players)
        })
      }
    })
    // .catch((error) => res.status(500).send(error))
  })

  return router
}
