const express = require('express')

const router = express.Router()

const Game = require('../data/dbGames')

router.route('/:id').post(async (req, res) => {
  // Get individual player details registered to gameId
  const clientInfo = req.body
  const gameId = req.params.id

  Game.findById(gameId, (err, game) => {
    if (err) throw err

    game.players.push({ name: clientInfo.name })
    game.save((error, gameSaved) => {
      if (error) throw error

      const playerRecord = gameSaved.players.find((item) => {
        return item.name === clientInfo.name
      })

      res.setHeader('Content-Type', 'application/json')
      // eslint-disable-next-line no-underscore-dangle
      res.send({ id: playerRecord._id })
    })
  })
})

module.exports = router
