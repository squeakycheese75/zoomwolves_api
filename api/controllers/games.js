const express = require('express')
const { uuid } = require('uuidv4')

const router = express.Router()

const { castPlayers } = require('../helpers/castHelper')

var db = require('../data/db')

function normalizeName(name) {
  return name.replace(/[ ]/g, '_').toLowerCase()
}

// let registeredgames = []

module.exports = function (monitor) {
  const gameMonitor = monitor

  gameMonitor.on('newGameStarted', (id) => {
    console.log('newGameStarted detected', id)
  })

  router
    .route('/')
    // .get((req, res) => {
    //   res.setHeader('Content-Type', 'application/json')
    //   res.send(registeredgames)
    // })
    .post((req, res) => {
      // console.log('here')
      const clientInfo = req.body
      const keyName = normalizeName(clientInfo.name)

      const id = uuid()
      // const resval = `Welcome brave ${keyName}, your game id is: ${id}.   Pass the link onto your players /api/player/${id}   You are now the zoomwolves master.`
      const resval = { id, keyName }
      db.registeredgames.push({
        id,
        owner: keyName,
        status: 'open',
        players: [],
      })
      // console.log('publishing event')
      gameMonitor.emit('newGameStarted', id)
      res.setHeader('Content-Type', 'application/json')
      res.send(resval)
    })

  router.route('/:id').get((req, res) => {
    // Get individual player details registered to gameId
    const game = db.registeredgames.find((q) => q.id === req.params.id)
    res.setHeader('Content-Type', 'application/json')
    res.send(game.players)
  })

  router.route('/:id/close').get((req, res) => {
    // Get individual player details registered to gameId
    const game = db.registeredgames.find((q) => q.id === req.params.id)
    console.log(game)
    // game.status = 'closed'
    // Let's allocate the characters
    const p = castPlayers(game.players)
    console.log(p)
    gameMonitor.emit('gameClosed', req.params.id)
    res.setHeader('Content-Type', 'application/json')
    res.send(game)
  })

  return router
}
