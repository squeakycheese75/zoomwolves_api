const assert = require('assert')
const castHelper = require('../api/helpers/castHelper.js')

const emptyList = []
const playersList = [
  { id: 'jamie' },
  { id: 'bob' },
  { id: 'andrea' },
  { id: 'sue' },
  { id: 'rita' },
  { id: 'sam' },
  { id: 'alan' },
  { id: 'derek' },
]

it('Test we return a failed result if there are not enough players.', () => {
  const resval = castHelper.castPlayers(emptyList)
  assert.equal(resval.status, 'failed')
})

it('Test we return a passed result if there are enough players.', () => {
  const resval = castHelper.castPlayers(playersList)
  assert.equal(resval.status, 'passed')
})

it('Test that exactly 2 players are cast in the werewolves role', () => {
  const resval = castHelper.castPlayers(playersList)
  const castFiltered = resval.cast.filter((el) => {
    return el.role === 'werewolf'
  })
  assert.equal(castFiltered.length, 2)
})

it('Test that exactly 1 player is cast in the seer role.', () => {
  const resval = castHelper.castPlayers(playersList)
  const castFiltered = resval.cast.filter((el) => {
    return el.role === 'seer'
  })
  assert.equal(castFiltered.length, 1)
})

it('Test that exactly 1 player is cast in the doctor role.', () => {
  const resval = castHelper.castPlayers(playersList)
  const castFiltered = resval.cast.filter((el) => {
    return el.role === 'doctor'
  })
  assert.equal(castFiltered.length, 1)
})

it('Test the remaining 3 players are cast in the village role.', () => {
  const resval = castHelper.castPlayers(playersList)
  const castFiltered = resval.cast.filter((el) => {
    return el.role === 'villager'
  })
  assert.equal(castFiltered.length, 3)
})
