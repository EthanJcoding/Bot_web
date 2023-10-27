import { get, goOffline, ref } from 'firebase/database'
import { database } from '@/app/firebase'

export default async function getGuildData(guildId: string) {
  try {
    const guildRef = ref(database, `guilds/${guildId}`)
    const snapshot = await get(guildRef)

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
