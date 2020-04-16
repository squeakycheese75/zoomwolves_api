import { Router } from 'express'
import { findById } from '../data/db'
import loadCharacters from '../helpers/charactersHelpers'

const router = Router()

export default (monitor) => {
  const gameMonitor = monitor

  router.route('/').get((req, res) => {
    loadCharacters()
      .then((result) => {
        res.send(result)
      })
      .catch((error) => res.status(500).send(error))
  })

  router.route('/:gameId/player/:playerId').get((req, res) => {
    const { gameId, playerId } = req.params
    gameMonitor.on('gameClosed', (id) => {
      if (id === gameId) {
        findById(gameId, (err, game) => {
          if (err) throw err
          const resval = game.players.find((player) => player.id === playerId)

          res.send({ role: resval.role, desc: '' })
        })
      }
    })
  })

  return router
}
