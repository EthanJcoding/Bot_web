import { Interfaces } from '@/utils'

function usePreprocess(games: Interfaces.GamesOfGuild) {
  const currentDate = new Date()

  const pastGamesCount = Object.values(games).filter(
    (game) => new Date(game.date) < currentDate,
  ).length

  const futureGames = Object.values(games)
    .filter((game) => new Date(game.date) >= currentDate)
    .sort((a, b) => +new Date(a.date) - +new Date(b.date))

  const allParticipants = []
  const gamesSchedule = []

  let nearestGame: null | Interfaces.Game = null
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

  const gameList: Interfaces.Game[] = Object.values(games).sort(
    (a: Interfaces.Game, b: Interfaces.Game) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)

      if (dateA < dateB) return 1
      if (dateA > dateB) return -1
      return 0
    },
  )

  return {
    gameList,
    nearestGame,
    pastGamesCount,
    futureGames,
    totalParticipants,
    gameId: Object.values(games)[0].gameId,
    gamesSchedule,
  }
}

export default usePreprocess
