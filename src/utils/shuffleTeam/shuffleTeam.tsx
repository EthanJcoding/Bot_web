// Shuffle an array using Fisher-Yates shuffle algorithm
interface PlayersProps {
  acs: number
  avatar: string
  gameUsername: string
  joinedAt: string
  user: string
}

const shuffleArray = (players: PlayersProps[]) => {
  const shuffledPlayers = [...players]
  for (let i = players.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[players[i], players[j]] = [players[j], players[i]]
  }
  const middleIndex = Math.ceil(shuffledPlayers.length / 2)
  const teamA = shuffledPlayers.slice(0, middleIndex)
  const teamB = shuffledPlayers.slice(middleIndex)
  const avgAcsTeamA = calculateAcsAverage(teamA)
  const avgAcsTeamB = calculateAcsAverage(teamB)
  return {
    teamA,
    teamB,
    avgAcsTeamA,
    avgAcsTeamB,
  }
}

function calculateAcsAverage(team: PlayersProps[]) {
  if (team.length === 0) return 0

  const totalAcs = team.reduce((total, player) => total + player.acs, 0)
  return totalAcs / team.length
}

export default shuffleArray
