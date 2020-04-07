const express = require('express')

const router = express.Router()

const { uuid } = require('uuidv4')

function normalizeName(name) {
  return name.replace(/[ ]/g, '_').toLowerCase()
}

router
  .route('/')
  .get((req, res) => {
    const id = uuid()
    // const resval = `Welcome brave ${keyName}, your game id is: ${id}.   Pass the link onto your players /api/player/${id}   You are now the zoomwolves master.`
    const resval = { id }
    console.log('GET client received')
    res.setHeader('Content-Type', 'application/json')
    res.send(resval)
  })
  .post((req, res) => {
    // console.log('req body is', req.body)
    const clientInfo = req.body
    const keyName = normalizeName(clientInfo.name)

    const id = uuid()
    // const resval = `Welcome brave ${keyName}, your game id is: ${id}.   Pass the link onto your players /api/player/${id}   You are now the zoomwolves master.`
    const resval = { id, keyName }
    res.setHeader('Content-Type', 'application/json')
    res.send(resval)
  })

module.exports = router
