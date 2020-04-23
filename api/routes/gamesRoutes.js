const express = require('express')

const router = express.Router()

const gamesController = require('../controllers/gamesController')

const Game = require('../data/db')

module.exports = (monitor) => {
  // const gameMonitor = monitor

  // gameMonitor.on('newGameStarted', (id) => {
  //   // eslint-disable-next-line no-console
  //   console.log('newGameStarted detected', { id })
  // })
  const controller = gamesController(monitor, Game)

  router.route('/').post(controller.post)
  router.route('/:id').get(controller.get)
  router.route('/:id/close').post(controller.postClose)

  return router
}
