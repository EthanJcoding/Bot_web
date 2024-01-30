import { Interfaces } from '..'

function findOptimalTeams(
  players: Interfaces.Member[],
): Interfaces.RoundInterface {
  const n = players.length
  const halfN = n / 2

  let minDiff = Infinity
  let optimalTeamA: Interfaces.Member[] = []
  let optimalTeamB: Interfaces.Member[] = []

  // Generate all possible combinations of players
  for (let mask = 0; mask < 1 << n; mask++) {
    if (countBits(mask) !== halfN) continue

    const teamA: Interfaces.Member[] = []
    const teamB: Interfaces.Member[] = []

    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        teamA.push(players[i])
      } else {
        teamB.push(players[i])
      }
    }

    const acsTeamA = calculateAcsAverage(teamA)
    const acsTeamB = calculateAcsAverage(teamB)
    const diff = Math.abs(acsTeamA - acsTeamB)

    if (diff < minDiff) {
      minDiff = diff
      optimalTeamA = teamA
      optimalTeamB = teamB
    }
  }

  return {
    teamA: optimalTeamA.sort((a, b) => b.acs - a.acs),
    teamB: optimalTeamB.sort((a, b) => b.acs - a.acs),
    avgAcsTeamA: calculateAcsAverage(optimalTeamA),
    avgAcsTeamB: calculateAcsAverage(optimalTeamB),
  }
}

function countBits(num: number) {
  let count = 0
  while (num > 0) {
    count += num & 1
    num >>= 1
  }
  return count
}

function calculateAcsAverage(team: Interfaces.Member[]) {
  if (team.length === 0) return 0

  const totalAcs = team.reduce((total, player) => total + player.acs, 0)
  return totalAcs / team.length
}

export default findOptimalTeams
