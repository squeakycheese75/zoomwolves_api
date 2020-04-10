const express = require('express')

const router = express.Router()

const { uuid } = require('uuidv4')

router.route('/:id').get((req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send('GET received.')
})

router.route('/:gameid').post((req, res) => {
  // Get individual player details registered to gameId
  const gameId = req.params.id
  const id = uuid()
  const resval = { gameId, playerId: id, status: 'success' }
  res.setHeader('Content-Type', 'application/json')
  res.send(resval)
})

module.exports = router
