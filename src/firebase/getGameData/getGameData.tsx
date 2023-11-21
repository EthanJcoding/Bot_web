import { get, ref } from 'firebase/database'
import { database } from '@/firebase/config'

const getGameData = async (guildId: string, gameId: string) => {
  try {
    const gameRef = ref(database, `guilds/${guildId}/games/${gameId}`)
    const snapshot = await get(gameRef)

    if (snapshot.exists()) {
      return { props: snapshot.val() }
    }

    return { props: { data: [] } }
  } catch (error) {
    console.error('Error fetching data:', error)

    return { props: { data: [], error: 'Failed to fetch data' } }
  }
}

export default getGameData
