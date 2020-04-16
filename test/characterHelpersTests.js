const assert = require('chai').assert
const { loadCharacters } = require('../api/helpers/charactersHelpers')


it('Test we return a failed result if there are not enough players.', () => {
    loadCharacters().then((result) => {
        console.log(resval)
        assert.isArray(resval)
    })
        .catch((error) => res.status(500).send(error))
})