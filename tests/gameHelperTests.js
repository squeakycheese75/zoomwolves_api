const assert = require('assert')
const { normalizeName } = require('../api/helpers/gameHelpers.js')

it('Test we replace uppercase characters with lowercase', () => {
  const resval = normalizeName('Jamie')
  assert.equal(resval, 'jamie')
})

it('Test we replace spaces with underscores', () => {
  const resval = normalizeName('Jamie D')
  assert.equal(resval, 'jamie_d')
})
