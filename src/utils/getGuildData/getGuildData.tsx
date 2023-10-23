import database from '@/app/firebase'
import { get, ref } from 'firebase/database'

export default async function getGuildData(guildId: string) {
  const guildRef = ref(database, `guilds/${guildId}`)
  const snapshot = await get(guildRef)

  if (snapshot.exists()) {
    return { props: snapshot.val() }
  }
  return { props: { data: [] } }
}
