const express = require('express')

const router = express.Router()

const cast = [
  { role: 'Villager', job: 'To defend your village.' },
  { role: 'Werewolf', job: 'To feed!   ' },
  {
    role: 'Seer',
    desc:
      'When you are woken by the master you can pick any player.  The m will tell you if they are a werewolf or not.',
  },
  {
    role: 'Doctor',
    desc:
      'When you are woken by the master you can decide if you are going to save a victim.  You only get the power once thoug, so use it wisely.  Btw. you can also revivie yourself!',
  },
]

router.route('/:id').get((req, res) => {
  const character = cast[Math.floor(Math.random() * cast.length)]
  //   const resval = `You are a  ${character.role}!  Good luck. \n  Your role is: ${character.desc}`
  res.send(character)
})

module.exports = router
