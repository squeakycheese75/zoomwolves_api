const randomlyPickAPlayer = (players) => {
  const character = players[Math.floor(Math.random() * players.length)]
  return character
}

const fillARole = (players, cast, role) => {
  const selectedPlayer = randomlyPickAPlayer(players)
  selectedPlayer.role = role
  cast.push(selectedPlayer)
  const index = players.indexOf(selectedPlayer)
  if (index > -1) {
    players.splice(index, 1)
  }
}

const castPlayers = (players) => {
  // if (players.length < 7)
  //   return {
  //     status: 'failed',
  //     cast: [],
  //   }

  const cast = []
  const clonePlayers = [...players]
  // Select key characters
  fillARole(clonePlayers, cast, 'werewolf')
  // fillARole(clonePlayers, cast, 'werewolf')
  // fillARole(clonePlayers, cast, 'seer')
  // fillARole(clonePlayers, cast, 'witch')

  // The rest are villagers
  for (let i = 0; i <= clonePlayers.length; i += 1) {
    fillARole(clonePlayers, cast, 'villager')
  }

  return {
    status: 'passed',
    cast,
  }
}

// export default { castPlayers }
module.exports = { castPlayers }
