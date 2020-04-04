const express = require('express')

const router = express.Router()

router
  .route('/:id')
  .get((req, res) => {
    res.send('GET received.')
  })
  .post((req, res) => {
    const playerInfo = req.body
    const gameId = req.params.id
    console.log('POST received')
    console.log(playerInfo)
    // const body = req.body
    // const zoomId = body.zoomId
    const resval = `Welcome brave ${playerInfo.name}, you are registered to game : ${gameId}.`
    res.setHeader('Content-Type', 'application/json')
    res.send(resval)
  })

module.exports = router
