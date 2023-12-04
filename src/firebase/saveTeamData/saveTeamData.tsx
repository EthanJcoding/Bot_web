import { get, ref, update } from 'firebase/database'
import { database } from '@/firebase/config'

interface PlayersProps {
  gameUsername: string
  joinedAt: string
  user: string
  avatar: string
  acs: number
}

const saveTeamData = async (
  guildId: string,
  gameId: string,
  currentRound: string,
  roundData: {
    allMembers: PlayersProps[]
    teamA: PlayersProps[]
    teamB: PlayersProps[]
    avgAcsTeamA: number
    avgAcsTeamB: number
    hasSelected: boolean
    map: string
    isSaved: boolean
  },
) => {
  try {
    const gameRef = ref(database, `guilds/${guildId}/games/${gameId}`)
    const snapshot = await get(gameRef)

    if (snapshot.exists()) {
      const game = snapshot.val()
      roundData.isSaved = true
      game.roundInfo[currentRound] = roundData

      await update(gameRef, game)
    }
  } catch (error) {
    console.log(error)
  }
}

export default saveTeamData
