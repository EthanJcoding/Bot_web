import { Interfaces } from '@/utils'
import { atom } from 'recoil'

export const memberCardsState = atom<Interfaces.Member[]>({
  key: 'memberCardsState',
  default: [],
})
