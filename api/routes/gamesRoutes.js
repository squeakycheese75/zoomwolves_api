const express = require('express')

const router = express.Router()

const gamesController = require('../controllers/gamesController')

const Game = require('../data/dbGames')

module.exports = () => {
  const controller = gamesController(Game)

  router.route('/').post(controller.post)
  router.route('/:id').get(controller.get)
  router.route('/:id/close').post(controller.postClose)

  return router
}
