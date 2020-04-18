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

      // console.log('Added new player', clientInfo.name, ' to game')

      const player = game.players.find((item) => {
        return item.name === clientInfo.name
      })
      // eslint-disable-next-line no-underscore-dangle
      const playerId = player._id
      const resval = { id: playerId }
      res.setHeader('Content-Type', 'application/json')
      res.send(resval)
    })
  })
})

module.exports = router
