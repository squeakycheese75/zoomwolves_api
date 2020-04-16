import { promises as fsPromises } from 'fs'

const dataFile = './api/data/characters.json'

async function loadCharacters() {
  const rawData = await fsPromises.readFile(dataFile, 'utf8')
  return rawData
}

export default { loadCharacters }
