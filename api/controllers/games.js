const express = require('express')

const router = express.Router()

const { castPlayers } = require('../helpers/castHelper')

const Game = require('../data/db')

function normalizeName(name) {
  return name.replace(/[ ]/g, '_').toLowerCase()
}

module.exports = (monitor) => {
  const gameMonitor = monitor

  gameMonitor.on('newGameStarted', (id) => {
    // eslint-disable-next-line no-console
    console.log('newGameStarted detected', id)
  })

  router.route('/').post((req, res) => {
    const clientInfo = req.body
    const keyName = normalizeName(clientInfo.name)

    const newGame = Game({
      owner: keyName,
      status: 'open',
      players: [],
    })
    newGame.save((error) => {
      if (error) throw error
      // eslint-disable-next-line no-console
      console.info('new Game created')
    })

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

  router.route('/:id/close').post((req, res) => {
    Game.findById(req.params.id, (err, game) => {
      if (err) throw err
      // console.log('Found game server')
      // if (game.players.length > 7) {
      const cast = castPlayers(game.players)

      if (cast.status === 'passed') {
        Game.findByIdAndUpdate(
          req.params.id,
          { players: cast.cast },
          { new: true },
          (err, result) => {
            if (err) {
              res.send(err)
            } else {
              // console.log('back from update ', result)
              gameMonitor.emit('gameClosed', req.params.id)
              res.setHeader('Content-Type', 'application/json')
              res.send(result)
            }
          }
        )
      }
    })
  })

  return router
}
