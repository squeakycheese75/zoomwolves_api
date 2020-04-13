const express = require('express')
const router = express.Router()

const Game = require('../data/db')

// const { uuid } = require('uuidv4')

router.route('/:id').post((req, res) => {
  // Get individual player details registered to gameId
  // const gameId = req.params.id
  const clientInfo = req.body

  // console.log('name is: ', clientInfo.name)
  // console.log('gameId is: ', gameId)
  Game.findById(req.params.id, (err, game) => {
    if (err) throw err

    game.players.push({ name: clientInfo.name })
    game.save((err) => {
      if (err) throw err

      console.log('Added new player to game.')
      // console.log(game)
    })
    res.setHeader('Content-Type', 'application/json')
    res.send(game)
  })
})

module.exports = router
