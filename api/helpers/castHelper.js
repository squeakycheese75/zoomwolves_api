function randomlypickaplayer(players) {
  const character = players[Math.floor(Math.random() * players.length)]
  return character
}

function fillRole(players, cast, role) {
  const player = randomlypickaplayer(players)
  player.role = role
  cast.push(player)
  const index = players.indexOf(player)
  if (index > -1) {
    players.splice(index, 1)
  }
}

function castPlayers(players) {
  // if (players.length < 7)
  //   return {
  //     status: 'failed',
  //   }
  // console.log('players', players)
  const cast = []
  const clonePlayers = [...players]
  // console.log('calling fillRole')
  fillRole(clonePlayers, cast, 'werewolf')
  // fillRole(clonePlayers, cast, 'werewolf')
  // fillRole(clonePlayers, cast, 'seer')
  // fillRole(clonePlayers, cast, 'witch')

  // The rest are villagers
  for (let i = 0; i <= clonePlayers.length; i += 1) {
    fillRole(clonePlayers, cast, 'villager')
  }

  const resval = {
    status: 'passed',
    cast,
  }
  return resval
}

module.exports = { castPlayers }
