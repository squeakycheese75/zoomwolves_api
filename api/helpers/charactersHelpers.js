const fsPromises = require('fs').promises

const dataFile = './api/data/characters.json'

async function loadCharacters() {
    console.log('In load charactersHelper')
    const rawData = await fsPromises.readFile('./api/data/characters.json', 'utf8')
    console.log('rawdata', rawData)
    return rawData
    // return JSON.parse(rawData)
}

module.exports = { loadCharacters }
