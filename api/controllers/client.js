const express = require('express')

const router = express.Router()

const { uuid } = require('uuidv4')

function normalizeName(name) {
  return name.replace(/[ ]/g, '_').toLowerCase()
}

router
  .route('/')
  .get((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send('GET received.')
  })
  .post((req, res) => {
    // console.log('req body is', req.body)
    const clientInfo = req.body
    const keyName = normalizeName(clientInfo.name)

    const id = uuid()
    const resval = `Welcome brave ${keyName}, your game id is: ${id}.  Guard it well!  You are now the zoomwolf master.`
    res.setHeader('Content-Type', 'application/json')
    res.send(resval)
  })

module.exports = router
