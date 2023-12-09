import { get, ref } from 'firebase/database'
import { database } from '@/firebase/config'
import { Interfaces } from '@/utils'

const getGameData = async (guildId: string, gameId: string) => {
  try {
    const gameRef = ref(database, `guilds/${guildId}/games/${gameId}`)
    const snapshot = await get(gameRef)

    if (snapshot.exists()) {
      const gameData: Interfaces.Game = snapshot.val()

      return { props: gameData }
    }

    return { props: { data: [] } }
  } catch (error) {
    console.error('Error fetching data:', error)

    return { props: { data: [] } }
  }
}

export default getGameData
