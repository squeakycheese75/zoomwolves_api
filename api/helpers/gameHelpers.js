function normalizeName(name) {
  return name.replace(/[ ]/g, '_').toLowerCase()
}

module.exports = { normalizeName }
