const express = require('express')

const router = express.Router()

const { uuid } = require('uuidv4')

router.route('/:id').post((req, res) => {
  // Get individual player details registered to gameId
  const gameId = req.params.id
  const clientInfo = req.body
  const playerId = uuid()
  // const keyName = normalizeName(clientInfo.name)
  console.log('name is: ', clientInfo.name)
  console.log('gameId is: ', gameId)
  console.log('playerId is: ', playerId)
  const resval = { gameId, playerId, status: 'success' }
  res.setHeader('Content-Type', 'application/json')
  res.send(resval)
})
// .get((req, res) => {

//   res.setHeader('Content-Type', 'application/json')
//   res.send('GET received.')
// })

module.exports = router
