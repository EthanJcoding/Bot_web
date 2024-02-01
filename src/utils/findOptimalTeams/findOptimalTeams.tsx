import { Interfaces } from '..'

function findOptimalTeams(
  players: Interfaces.Member[],
): Interfaces.RoundInterface {
  const n = players.length
  const halfN = n / 2

  let minDiff = Infinity
  let optimalTeamA: Interfaces.Member[] = []
  let optimalTeamB: Interfaces.Member[] = []

  const tierAdjustments: Record<string, number> = {
    '아이언 1': -10,
    '아이언 2': -5,
    '아이언 3': -1,
    '브론즈 1': 1,
    '브론즈 2': 2,
    '브론즈 3': 3,
    '언랭 ': 4,
    '실버 1': 5,
    '실버 2': 6,
    '실버 3': 7,
    '골드 1': 8,
    '골드 2': 9,
    '골드 3': 10,
    '플래티넘 1': 13,
    '플래티넘 2': 16,
    '플래티넘 3': 19,
    '다이아몬드 1': 22,
    '다이아몬드 2': 25,
    '다이아몬드 3': 28,
    '초월자 1': 35,
    '초월자 2': 37,
    '초월자 3': 39,
    '불멸 1': 43,
    '불멸 2': 47,
    '불멸 3': 51,
    '레디언트 ': 80,
  }

  // Calculate tier adjustments only once
  const tierAdjustmentsMap = new Map(Object.entries(tierAdjustments))

  // Generate all possible combinations of players
  for (let mask = 0; mask < 1 << n; mask++) {
    if (countBits(mask) !== halfN) continue

    const teamA: Interfaces.Member[] = []
    const teamB: Interfaces.Member[] = []

    for (let i = 0; i < n; i++) {
      const player = players[i]
      if (mask & (1 << i)) {
        teamA.push(player)
      } else {
        teamB.push(player)
      }
    }

    const acsTeamA = calculateCompensatedAcsAverage(teamA, tierAdjustmentsMap)
    const acsTeamB = calculateCompensatedAcsAverage(teamB, tierAdjustmentsMap)
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
    avgAcsTeamA: Math.round(calculateAcsAverage(optimalTeamA)),
    avgAcsTeamB: Math.round(calculateAcsAverage(optimalTeamB)),
    compensatedAcsTeamA: Math.round(
      calculateCompensatedAcsAverage(optimalTeamA, tierAdjustmentsMap),
    ),
    compensatedAcsTeamB: Math.round(
      calculateCompensatedAcsAverage(optimalTeamB, tierAdjustmentsMap),
    ),
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

function calculateCompensatedAcsAverage(
  team: Interfaces.Member[],
  tierAdjustmentsMap: Map<string, number>,
) {
  if (team.length === 0) return 0

  const totalAcs = team.reduce((total, player) => total + player.acs, 0)

  const adjustedTotalAcs =
    totalAcs +
    team.reduce(
      (adjustment, player) =>
        adjustment + (tierAdjustmentsMap.get(player.tier) || 0),
      0,
    )

  return adjustedTotalAcs / team.length
}

function calculateAcsAverage(team: Interfaces.Member[]) {
  if (team.length === 0) return 0

  const totalAcs = team.reduce((total, player) => total + player.acs, 0)
  return totalAcs / team.length
}

export default findOptimalTeams
