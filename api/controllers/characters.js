const express = require('express')

const router = express.Router()
const dataFile = './api/data/characters.json'
const fsPromises = require('fs').promises

module.exports = function (monitor) {
  const gameMonitor = monitor

  async function castCharacter() {
    const rawData = await fsPromises.readFile(dataFile, 'utf8')
    const cast = JSON.parse(rawData)
    //
    const character = cast[Math.floor(Math.random() * cast.length)]
    return character
  }

  router.route('/:id').get((req, res) => {
    castCharacter()
      .then((data) => {
        // Only return a response when we detect the
        gameMonitor.on('newGameStarted', (id) => {
          if (id === req.param.id) {
            console.log('newGameStarted detected', id)
            res.send(data)
          }
        })
      })
      .catch((error) => res.status(500).send(error))
  })

  return router
}
