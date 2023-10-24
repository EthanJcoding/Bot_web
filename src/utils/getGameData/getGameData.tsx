import { get, goOffline, ref } from 'firebase/database'
import { database } from '@/app/firebase'

const getGameData = async (guildId: string, gameId: string) => {
  try {
    const gameRef = ref(database, `guilds/${guildId}/games/${gameId}`)
    const snapshot = await get(gameRef)

    if (snapshot.exists()) {
      return { props: snapshot.val() }
    }
    goOffline(database)
    return { props: { data: [] } }
  } catch (error) {
    console.error('Error fetching data:', error)
    goOffline(database)
    return { props: { data: [], error: 'Failed to fetch data' } }
  }
}

export default getGameData
