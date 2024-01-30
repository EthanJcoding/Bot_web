import { get, ref, update } from 'firebase/database'
import { database } from '@/firebase/config'
import { Interfaces } from '@/utils'

const deleteMember = async (
  guildId: string,
  gameId: string,
  gameUsername: string,
) => {
  try {
    const gameRef = ref(database, `guilds/${guildId}/games/${gameId}`)
    const snapshot = await get(gameRef)

    if (snapshot.exists()) {
      const game = snapshot.val()
      const targetIdx = game.members.findIndex(
        (member: Interfaces.Member) => member.gameUsername === gameUsername,
      )

      if (targetIdx !== -1) {
        game.members.splice(targetIdx, 1)

        await update(gameRef, game)
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export default deleteMember
