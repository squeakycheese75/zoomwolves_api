function normalizeName(name) {
  return name.replace(/[ ]/g, '_').toLowerCase()
}

function randomlyPickAColour(){
  return 'Red'
}

module.exports = { normalizeName, randomlyPickAColour }
