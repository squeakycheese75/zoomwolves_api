const assert = require('assert')
const castHelper = require('../api/helpers/castHelper.js')

const emptyList = []
const playersList = [
  { id: '5e94c8d86224539c575136f0', name: 'jamie' },
  { id: '5e94c8e2302cb3d712fddfe1', name: 'bob' },
  { id: '5e94c8eae7e6c985c3b5d5e3', name: 'andrea' },
  { id: '5e94c8f286d1d0f5ab6ff88b', name: 'sue' },
  { id: '5e94c8f998c27255fd72af41', name: 'rita' },
  { id: '5e94c902e4b2fd7b8a1cf882', name: 'sam' },
  { id: '5e94c90c2087024448b9ebe5', name: 'alan' },
  { id: '5e94c91404337da8bde0f931', name: 'derek' },
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

it('Test that exactly 1 player is cast in the witch role.', () => {
  const resval = castHelper.castPlayers(playersList)
  const castFiltered = resval.cast.filter((el) => {
    return el.role === 'witch'
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
