function usePreprocess(games: {
  [key: string]: {
    createdBy: string
    date: string
    isActive: boolean
    gameId: string
    members: Array<{
      gameUsername: string
      joinedAt: string
      user: string
      avatar: string
    }>
  }
}) {
  const currentDate = new Date()

  const pastGamesCount = Object.values(games).filter(
    (game) => new Date(game.date) < currentDate,
  ).length
  const futureGamesCount = Object.values(games).filter(
    (game) => new Date(game.date) >= currentDate,
  ).length
  const allParticipants = []
  const gamesSchedule = []

  let nearestGame = null
  let nearestGameDate = null

  for (const gameId in games) {
    const game = games[gameId]
    const gameDate = new Date(game.date)

    if (
      gameDate > currentDate &&
      (!nearestGameDate || gameDate < nearestGameDate)
    ) {
      nearestGame = game
      nearestGameDate = gameDate
    }
    gamesSchedule.push({ date: game.date, href: game.gameId })
    if (game.members) {
      allParticipants.push(...game.members)
    }
  }

  const uniqueParticipantsMap = new Map()
  for (const participant of allParticipants) {
    uniqueParticipantsMap.set(JSON.stringify(participant), participant)
  }

  const uniqueParticipants = Array.from(uniqueParticipantsMap.values())

  const totalParticipants = uniqueParticipants.length

  return {
    nearestGame,
    pastGamesCount,
    futureGamesCount,
    totalParticipants,
    gameId: Object.values(games)[0].gameId,
    gamesSchedule,
  }
}

export default usePreprocess
