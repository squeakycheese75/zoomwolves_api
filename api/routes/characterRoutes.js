const express = require('express')

const router = express.Router()

const Game = require('../data/dbGames')
const Cast = require('../data/dbCast')

const characterController = require('../controllers/characterController')

module.exports = (monitor) => {
  const controller = characterController(monitor, Game, Cast)

  router.route('/').get(controller.get)

  router
    .route('/:gameId/player/:playerId')
    .get(controller.getWithPlayerIdGameId)

  return router
}
