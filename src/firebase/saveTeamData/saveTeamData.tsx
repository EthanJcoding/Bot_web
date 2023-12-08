import { get, ref, update } from 'firebase/database'
import { database } from '@/firebase/config'
import { Interfaces } from '@/utils'

const saveTeamData = async (
  guildId: string,
  gameId: string,
  currentRound: string,
  roundData: Interfaces.RoundInterface,
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
