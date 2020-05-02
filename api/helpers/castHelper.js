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
  if (players.length < 6)
    return {
      status: 'failed',
      cast: [],
    }

  const cast = []
  const clonePlayers = [...players]
  // Select key characters
  fillARole(clonePlayers, cast, 'Werewolf')
  fillARole(clonePlayers, cast, 'Werewolf')
  fillARole(clonePlayers, cast, 'Seer')
  fillARole(clonePlayers, cast, 'Witch')
  // if (players.length > 10) {
  //   fillARole(clonePlayers, cast, 'Doctor')
  // }

  // The rest are villagers
  for (let i = 0; i <= clonePlayers.length; i += 1) {
    fillARole(clonePlayers, cast, 'Villager')
  }
  fillARole(clonePlayers, cast, 'Villager')

  return {
    status: 'passed',
    cast,
  }
}

module.exports = { castPlayers }
