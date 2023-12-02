import { atom } from 'recoil'

const generateRound = (hasSelected = false) => ({
  allMembers: [],
  teamA: [],
  teamB: [],
  avgAcsTeamA: 0,
  avgAcsTeamB: 0,
  map: '',
  hasSelected: hasSelected,
})

type DropDownMemberStateType = {
  [key: string]: {
    allMembers: {
      gameUsername: string
      joinedAt: string
      user: string
      avatar: string
      acs: number
    }[]
    teamA: {
      gameUsername: string
      joinedAt: string
      user: string
      avatar: string
      acs: number
    }[]
    teamB: {
      gameUsername: string
      joinedAt: string
      user: string
      avatar: string
      acs: number
    }[]
    avgAcsTeamA: number
    avgAcsTeamB: number
    map: string
    hasSelected: boolean
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
