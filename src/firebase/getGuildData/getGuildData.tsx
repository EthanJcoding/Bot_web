import { get, ref } from 'firebase/database'
import { database } from '@/firebase/config'

interface Game {
  createdBy: string
  date: string
  gameId: string
  isActive: boolean
  members: Array<{
    gameUsername: string
    joinedAt: string
    user: string
    avatar: string
  }> // You may want to define a more specific type for members
}

interface GamesObject {
  [gameId: string]: Game
}

export interface guildData {
  games: GamesObject
  id: string
  isActive: boolean
  joinedAt: string
  name: string
}

export default async function getGuildData(guildId: string) {
  try {
    const guildRef = ref(database, `guilds/${guildId}`)
    const snapshot = await get(guildRef)

    if (snapshot.exists()) {
      const guildData: guildData = snapshot.val()
      return { props: guildData }
    }

    return { props: { data: [] } }
  } catch (error) {
    console.error('Error fetching data:', error)

    return { props: { data: [] } }
  }
}
