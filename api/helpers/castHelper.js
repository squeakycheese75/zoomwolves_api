function randomlypickaplayer(players) {
  const character = players[Math.floor(Math.random() * players.length)]
  return character
}

function fillRole(players, cast, role) {
  const player = randomlypickaplayer(players)
  cast.push({ id: player, role })
  const index = players.indexOf(player)
  if (index > -1) {
    players.splice(index, 1)
  }
}

function castPlayers(players) {
  if (players.length < 7)
    return {
      status: 'failed',
    }

  const cast = []
  const playerList = players.map((a) => a.id)
  fillRole(playerList, cast, 'werewolf')
  fillRole(playerList, cast, 'werewolf')
  fillRole(playerList, cast, 'seer')
  fillRole(playerList, cast, 'doctor')

  // The rest are villagers
  for (let i = 0; i <= playerList.length; i += 1) {
    fillRole(playerList, cast, 'villager')
  }

  const resval = {
    status: 'passed',
    cast,
  }
  return resval
}

module.exports = { castPlayers }
