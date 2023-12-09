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

      const updatedRoundData = { ...roundData }

      updatedRoundData.isSaved = true
      updatedRoundData.hasSelected = false

      console.log(updatedRoundData)

      game.roundInfo[currentRound] = updatedRoundData

      await update(gameRef, game)
    }
  } catch (error) {
    console.log(error)
  }
}

export default saveTeamData
