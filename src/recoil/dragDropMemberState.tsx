import { Interfaces } from '@/utils'
import { atom } from 'recoil'

const generateRound = (hasSelected = false) => ({
  allMembers: [],
  teamA: [],
  teamB: [],
  avgAcsTeamA: 0,
  avgAcsTeamB: 0,
  map: '',
  hasSelected: hasSelected,
  isSaved: false,
})

type DropDownMemberStateType = {
  [key: string]: {
    allMembers: Interfaces.Member[]
    teamA: Interfaces.Member[]
    teamB: Interfaces.Member[]
    avgAcsTeamA: number
    avgAcsTeamB: number
    map: string
    hasSelected: boolean
    isSaved: boolean
  }
}

export const dragDropMemberState = atom<DropDownMemberStateType>({
  key: 'dragDropMemberState',
  default: {
    Round1: generateRound(true),
    Round2: generateRound(),
    Round3: generateRound(),
    Round4: generateRound(),
    Round5: generateRound(),
  },
})
