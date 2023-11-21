import { get, ref } from 'firebase/database'
import { database } from '@/firebase/config'

const saveTeamData = async (guildId: string, gameId: string) => {
  try {
    const gameRef = ref(database, `guilds/${guildId}/games/${gameId}`)
    const snapshot = await get(gameRef)

    if (snapshot.exists()) {
      console.log(snapshot.val())
    }
  } catch (error) {
    console.log(error)
  }
}

export default saveTeamData
