// import { promises as fsPromises } from 'fs'
const fsPromises = require('fs').promises

const dataFile = './api/data/characters.json'

async function loadCharacters() {
  const rawData = await fsPromises.readFile(dataFile, 'utf8')
  return rawData
}

module.exports = { loadCharacters }
