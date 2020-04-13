const express = require('express')
const { uuid } = require('uuidv4')
const mongoose = require('mongoose')
const router = express.Router()

const { castPlayers } = require('../helpers/castHelper')

// var db = require('../data/db')
var Game = require('../data/db')

function normalizeName(name) {
  return name.replace(/[ ]/g, '_').toLowerCase()
}

// let registeredgames = []

module.exports = function (monitor) {
  const gameMonitor = monitor

  gameMonitor.on('newGameStarted', (id) => {
    console.log('newGameStarted detected', id)
  })

  router.route('/').post((req, res) => {
    // console.log('here')
    const clientInfo = req.body
    const keyName = normalizeName(clientInfo.name)

    // const id = uuid()
    const newGame = Game({
      owner: keyName,
      status: 'open',
      players: [],
    })
    newGame.save((error) => {
      if (error) throw error
      console.info('new Game created')
    })
    // console.log(newGame)
    // eslint-disable-next-line no-underscore-dangle
    const newGameId = newGame._id
    const resval = { id: newGameId, keyName }
    gameMonitor.emit('newGameStarted', newGameId)
    res.setHeader('Content-Type', 'application/json')
    res.send(resval)
  })

  router.route('/:id').get((req, res) => {
    // Get individual player details registered to gameId
    Game.findById(req.params.id, (err, user) => {
      if (err) throw err

      res.setHeader('Content-Type', 'application/json')
      res.send(user)
    })
  })

  // router.route('/:id/close').get((req, res) => {
  //   // Get individual player details registered to gameId
  //   const game = Game.registeredgames.findById(req.params.id)
  //   const p = castPlayers(game.players)
  //   gameMonitor.emit('gameClosed', req.params.id)
  //   res.setHeader('Content-Type', 'application/json')
  //   res.send(game)
  // })

  return router
}
