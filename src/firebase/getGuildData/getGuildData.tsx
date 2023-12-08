import { get, ref } from 'firebase/database'
import { database } from '@/firebase/config'
import { Interfaces } from '@/utils'

export default async function getGuildData(guildId: string) {
  try {
    const guildRef = ref(database, `guilds/${guildId}`)
    const snapshot = await get(guildRef)

    if (snapshot.exists()) {
      const guildData: Interfaces.GuildData = snapshot.val()
      return { props: guildData }
    }

    return { props: { data: [] } }
  } catch (error) {
    console.error('Error fetching data:', error)

    return { props: { data: [] } }
  }
}
