// Shuffle an array using Fisher-Yates shuffle algorithm

import { Interfaces } from '..'

const shuffleArray = (players: Interfaces.Member[]) => {
  const shuffledPlayers = [...players]

  for (let i = shuffledPlayers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledPlayers[i], shuffledPlayers[j]] = [
      shuffledPlayers[j],
      shuffledPlayers[i],
    ]
  }

  const middleIndex = Math.ceil(shuffledPlayers.length / 2)
  const [teamA, teamB] = [
    shuffledPlayers.slice(0, middleIndex),
    shuffledPlayers.slice(middleIndex),
  ]
  const [avgAcsTeamA, avgAcsTeamB] = [
    calculateAcsAverage(teamA),
    calculateAcsAverage(teamB),
  ]

  return { teamA, teamB, avgAcsTeamA, avgAcsTeamB }
}

function calculateAcsAverage(team: Interfaces.Member[]) {
  if (team.length === 0) return 0

  const totalAcs = team.reduce((total, player) => total + Number(player.acs), 0)
  return totalAcs / team.length
}

export { shuffleArray, calculateAcsAverage }
