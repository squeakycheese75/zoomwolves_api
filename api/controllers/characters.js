const express = require('express')

const router = express.Router()

const Game = require('../data/db')

module.exports = (monitor) => {
  const gameMonitor = monitor

  router.route('/:gameId/player/:playerId').get((req, res) => {
    const { gameId, playerId } = req.params
    gameMonitor.on('gameClosed', (id) => {
      if (id === gameId) {
        Game.findById(gameId, (err, game) => {
          if (err) throw err
          // console.log('gameClosed detected', id)
          const resval = game.players.find((player) => player.id === playerId)
          res.send({ role: resval.role, desc: 'some desc' })
        })
      }
    })
    // res.status(500).send('not working')
  })

  return router
}
