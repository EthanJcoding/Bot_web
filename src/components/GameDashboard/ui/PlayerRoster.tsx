'use client'

import { useEffect } from 'react'
import { RecoilRoot, useRecoilState } from 'recoil'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapList } from '../elements/MapList'
import Bo5DropDown from '../elements/Bo5DropDown'
import DragDropColumns from '../elements/DragDropColumns'
import { shuffleArray, findOptimalTeams } from '@/utils'
import { dragDropMemberState } from '@/recoil'
import saveTeamData from '@/firebase/saveTeamData/saveTeamData'

interface PlayerRosterProps {
  members: {
    gameUsername: string
    joinedAt: string
    user: string
    avatar: string
    acs: number
  }[]
  guildId: string
  gameId: string
}

interface Member {
  avatar: string
  gameUsername: string
  joinedAt: string
  user: string
  acs: number
}

const PlayerRoster = ({ members, gameId, guildId }: PlayerRosterProps) => {
  const [rounds, setRounds] = useRecoilState(dragDropMemberState)
  const currentRound =
    Object.keys(rounds).find((key) => rounds[key].hasSelected) ||
    Object.keys(rounds)[0]

  useEffect(() => {
    setRounds((prevRounds) => {
      const updatedRoundsObject = { ...prevRounds }
      console.log(updatedRoundsObject)
      for (const round in updatedRoundsObject) {
        if (updatedRoundsObject.hasOwnProperty(round)) {
          updatedRoundsObject[round] = {
            ...updatedRoundsObject[round],
            allMembers: members,
          }
        }
      }

      return updatedRoundsObject
    })
  }, [])

  const updateRoundState = ({
    allMembers,
    teamA,
    teamB,
    avgAcsTeamA,
    avgAcsTeamB,
  }: {
    allMembers: Member[]
    teamA: Member[]
    teamB: Member[]
    avgAcsTeamA: number
    avgAcsTeamB: number
  }) => {
    const round = rounds[currentRound]
    const updatedRounds = {
      ...rounds,
      [currentRound]: {
        ...round,
        allMembers,
        teamA,
        teamB,
        avgAcsTeamA,
        avgAcsTeamB,
      },
    }
    setRounds(updatedRounds)
  }

  const handleOptimalTeams = () => {
    if (members.length < 10) {
      alert('아직 팀원이 부족해요 😅')
    } else {
      const { teamA, teamB, avgAcsTeamA, avgAcsTeamB } =
        findOptimalTeams(members)
      updateRoundState({
        allMembers: [],
        teamA,
        teamB,
        avgAcsTeamA,
        avgAcsTeamB,
      })
    }
  }

  const handleRandomOrder = () => {
    if (members.length < 10) {
      alert('아직 팀원이 부족해요 😅')
    } else {
      const { teamA, teamB, avgAcsTeamA, avgAcsTeamB } = shuffleArray(members)
      updateRoundState({
        allMembers: [],
        teamA,
        teamB,
        avgAcsTeamA,
        avgAcsTeamB,
      })
    }
  }

  const handleReset = () => {
    updateRoundState({
      teamA: [],
      teamB: [],
      avgAcsTeamA: 0,
      avgAcsTeamB: 0,
      allMembers: members,
    })
  }

  const handleClickSave = async () => {
    await saveTeamData(guildId, gameId)
  }

  return (
    <div>
      <div className="flex items-center justify-between w-full mb-4">
        <Bo5DropDown />
        <Button onClick={handleClickSave}>저장하기</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DragDropColumns />
        <div className="grid gap-4 grid-rows-2">
          <Card>
            <CardHeader>
              <CardTitle>Map</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <MapList />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Balance Manager</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2 justify-center">
              <div className="flex justify-between space-x-2">
                <Button className="w-full" onClick={handleOptimalTeams}>
                  ACS 정렬
                </Button>
                <Button className="w-full" onClick={handleRandomOrder}>
                  랜덤 정렬
                </Button>
              </div>
              <div className="flex justify-between space-x-2">
                <Button
                  className="w-full"
                  onClick={() => alert('아직 준비중이에요 🧑‍💻')}
                >
                  포지션
                </Button>
                <Button className="w-full" onClick={handleReset}>
                  리셋
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

const PlayerRoasterInRoot = ({
  members,
  gameId,
  guildId,
}: PlayerRosterProps) => {
  return (
    <RecoilRoot>
      <PlayerRoster members={members} gameId={gameId} guildId={guildId} />
    </RecoilRoot>
  )
}

export default PlayerRoasterInRoot
