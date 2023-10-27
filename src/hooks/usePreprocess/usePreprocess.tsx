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
  const firstGame = Object.values(games)[0]
  const currentDate = new Date()
  const pastGamesCount = Object.values(games).filter(
    (game) => new Date(game.date) < currentDate,
  ).length
  const futureGamesCount = Object.values(games).filter(
    (game) => new Date(game.date) >= currentDate,
  ).length
  const allParticipants = []
  const gamesSchedule = []

  for (const gameId in games) {
    const game = games[gameId]
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
    firstGame,
    pastGamesCount,
    futureGamesCount,
    totalParticipants,
    gameId: Object.values(games)[0].gameId,
    gamesSchedule,
  }
}

export default usePreprocess
