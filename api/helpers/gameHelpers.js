const palette = [
  '#68838b',
  '#6878a0',
  '#ff7f50',
  '#ff8c00',
  '#f08080',
  '#68838b',
  '#53aeb6',
  '#088da5',
  '#28b4c9',
  '#f268ae',
  '#9f9892',
  '#bfb7c7',
  '#415d4f',
  '#c68b8b',
  '#6878a0',
  '#e7f6d9',
  '#d9f5f6',
  '#9e3fa5',
  '#9739b0',
  '#f268ae',
  '#28b4c9',
  '#aa93e9',
  '#6375df',
  '#ca0f6f',
  '#de73b5',
  '#088da5',
  '#53aeb6',
  '#a9288c',
  '#da80b1',
  '#b6b8f1',
  '#61c1a1',
  '#61c1a1',
  '#c8d6bf',
  '#f6968d',
  '#d3f1e3',
  '#c0fff4',
  '#ffc0cb',
  '#da80b1',
  '#61c1a1',
  '#9fd6f4',
  '#c68b8b',
  '#b6b8f1',
]

function randomlyPickAColour() {
  const item = palette[Math.floor(Math.random() * palette.length)]
  return item
}

function normalizeName(name) {
  return name.replace(/[ ]/g, '_').toLowerCase()
}

module.exports = { randomlyPickAColour, normalizeName }
