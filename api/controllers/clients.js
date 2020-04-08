const express = require('express')

const router = express.Router()

const { uuid } = require('uuidv4')

function normalizeName(name) {
  return name.replace(/[ ]/g, '_').toLowerCase()
}

var registeredgames = []

router
  .route('/')
  .get((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(registeredgames)
  })
  .post((req, res) => {
    // console.log('req body is', req.body)
    const clientInfo = req.body
    const keyName = normalizeName(clientInfo.name)

    const id = uuid()
    // const resval = `Welcome brave ${keyName}, your game id is: ${id}.   Pass the link onto your players /api/player/${id}   You are now the zoomwolves master.`
    const resval = { id, keyName }
    registeredgames.push({ id, owner: keyName, status: 'open', players: [] })
    res.setHeader('Content-Type', 'application/json')
    res.send(resval)
  })

router.route('/:id').get((req, res) => {
  // Get individual player details registered to gameId
  const game = registeredgames.find((q) => q.id === req.params.id)
  res.setHeader('Content-Type', 'application/json')
  res.send(game)
})

module.exports = router
