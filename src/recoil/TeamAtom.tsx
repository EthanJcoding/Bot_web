import { atom } from 'recoil'

export const TeamAtom = atom({
  key: 'TeamAtom',
  default: [
    {
      round1: {
        teamA: [],
        teamB: [],
        avgAcsTeamA: 0,
        avgAcsTeamB: 0,
        map: '',
      },
    },
    {
      round2: {
        teamA: [],
        teamB: [],
        avgAcsTeamA: 0,
        avgAcsTeamB: 0,
        map: '',
      },
    },
    {
      round3: {
        teamA: [],
        teamB: [],
        avgAcsTeamA: 0,
        avgAcsTeamB: 0,
        map: '',
      },
    },
    {
      round4: {
        teamA: [],
        teamB: [],
        avgAcsTeamA: 0,
        avgAcsTeamB: 0,
        map: '',
      },
    },
    {
      round5: {
        teamA: [],
        teamB: [],
        avgAcsTeamA: 0,
        avgAcsTeamB: 0,
        map: '',
      },
    },
  ],
})
