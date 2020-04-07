const express = require('express')

const router = express.Router()

const { uuid } = require('uuidv4')

router
  .route('/:id')
  .get((req, res) => {
    res.send('GET received.')
  })
  .post((req, res) => {
    // register play to game
    // const playerInfo = req.body
    const gameId = req.params.id

    console.log(req.body)

    const id = uuid()
    const resval = { gameId, playerId: id, status: 'success' }
    res.setHeader('Content-Type', 'application/json')
    res.send(resval)
  })

module.exports = router
