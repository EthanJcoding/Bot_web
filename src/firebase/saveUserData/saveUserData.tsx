// firestore version
import { database } from '@/firebase/config'
// import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { get, ref, update } from 'firebase/database'

import { Interfaces } from '@/utils'

// const saveUserDataFirestore = async (
//   guildId: string,
//   gameUsername: string,
//   tier: string,
//   acs: number,
// ) => {
//   try {
//     const userRef = doc(firestore, `guilds/${guildId}/users/${gameUsername}`)
//     const snapshot = await getDoc(userRef)

//     if (snapshot.exists()) {
//       await updateDoc(userRef, { acs, tier })
//     } else {
//       await setDoc(userRef, { acs, tier, gameUsername })
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

const saveUserData = async (
  guildId: string,
  gameId: string,
  gameUsername: string,
  tier: string,
  acs: number,
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
        game.members[targetIdx].tier = tier
        game.members[targetIdx].acs = acs
      }

      await update(gameRef, game)
    }
  } catch (error) {
    console.log(error)
  }
}

export { saveUserData }
