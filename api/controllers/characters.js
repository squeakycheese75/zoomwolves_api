const express = require('express')

const router = express.Router()
const dataFile = './api/data/characters.json'
const fs = require('fs')
// const cast = [
//   { role: 'Villager', desc: 'To defend your village.' },
//   { role: 'Werewolf', desc: 'To feed!   ' },
//   {
//     role: 'Seer',
//     desc:
//       'When you are woken by the master you can pick any player.  The m will tell you if they are a werewolf or not.',
//   },
//   {
//     role: 'Doctor',
//     desc:
//       'When you are woken by the master you can decide if you are going to save a victim.  You only get the power once thoug, so use it wisely.  Btw. you can also revivie yourself!',
//   },
// ]

function castCharacter() {
  return new Promise((resolve, reject) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        const cast = JSON.parse(data)
        const character = cast[Math.floor(Math.random() * cast.length)]
        resolve(character)
      }
    })
  })
}

router.route('/:id').get((req, res) => {
  castCharacter()
    .then((data) => {
      res.send(data)
    })
    .catch((error) => res.status(500).send(error))
})

module.exports = router
