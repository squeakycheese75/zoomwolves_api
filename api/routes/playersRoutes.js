const express = require('express')

const router = express.Router()

const Game = require('../data/dbGames')

const playersController = require('../controllers/playersController')

module.exports = (monitor) => {
  const controller = playersController(monitor, Game)

  router.route('/:id').post(controller.post)

  return router
}
