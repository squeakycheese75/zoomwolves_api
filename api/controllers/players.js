const express = require('express')

const router = express.Router()

const Game = require('../data/db')

router.route('/:id').post((req, res) => {
  // Get individual player details registered to gameId
  const clientInfo = req.body

  Game.findById(req.params.id, (err, game) => {
    if (err) throw err

    game.players.push({ name: clientInfo.name })
    game.save((error) => {
      if (error) throw error

      console.log('Added new player', clientInfo.name, ' to game')
      res.setHeader('Content-Type', 'application/json')
      res.send(game)
    })
  })
})

module.exports = router
