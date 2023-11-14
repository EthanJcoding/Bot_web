'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useState } from 'react'
import { Grip } from 'lucide-react'
import { MapList } from './MapList'
import { Button } from '@/components/ui/button'
import findOptimalTeams from '@/utils/findOptimalTeams/findOptimalTeams'
import shuffleArray from '@/utils/shuffleTeam/shuffleTeam'

interface PlayerRosterProps {
  members: {
    gameUsername: string
    joinedAt: string
    user: string
    avatar: string
    acs: number
  }[]
}

interface Member {
  avatar: string
  gameUsername: string
  joinedAt: string
  user: string
  acs: number
}

const calculateAverageAcs = (team: Member[]) => {
  if (team.length === 0) return 0

  const totalAcs = team.reduce((sum, member) => sum + member.acs, 0)
  return totalAcs / team.length
}

const PlayerRoster = ({ members }: PlayerRosterProps) => {
  const [allMembers, setAllMembers] = useState(members)
  const [teamA, setTeamA] = useState<Member[]>([])
  const [teamB, setTeamB] = useState<Member[]>([])
  const [avgAcsTeamA, setAvgAcsTeamA] = useState(0)
  const [avgAcsTeamB, setAvgAcsTeamB] = useState(0)

  const handleOnDrag = (e: React.DragEvent, member: Member) => {
    const memberJSON = JSON.stringify(member)
    if (memberJSON) {
      e.dataTransfer.setData('member', memberJSON)
    }
  }

  const handleOnDropM = (e: React.DragEvent) => {
    e.preventDefault()

    const member = JSON.parse(e.dataTransfer.getData('member'))

    if (teamA.some((m) => m.gameUsername === member.gameUsername)) {
      setTeamA(teamA.filter((m) => m.gameUsername !== member.gameUsername))
      setAvgAcsTeamA(
        calculateAverageAcs(
          teamA.filter((m) => m.gameUsername !== member.gameUsername),
        ),
      )
    }

    if (teamB.some((m) => m.gameUsername === member.gameUsername)) {
      setTeamB(teamB.filter((m) => m.gameUsername !== member.gameUsername))
      setAvgAcsTeamB(
        calculateAverageAcs(
          teamB.filter((m) => m.gameUsername !== member.gameUsername),
        ),
      )
    }

    if (!allMembers.some((m) => m.gameUsername === member.gameUsername)) {
      setAllMembers([...allMembers, member])
    }
  }

  const handleOnDropA = (e: React.DragEvent) => {
    e.preventDefault()
    const member = JSON.parse(e.dataTransfer.getData('member'))

    if (
      teamA.length === 0 ||
      (teamA.length < 5 &&
        teamA.some((m) => m.gameUsername !== member.gameUsername))
    ) {
      if (teamB.some((m) => m.gameUsername === member.gameUsername)) {
        setTeamB(teamB.filter((m) => m.gameUsername !== member.gameUsername))
        setAvgAcsTeamB(
          calculateAverageAcs(
            teamB.filter((m) => m.gameUsername !== member.gameUsername),
          ),
        )
      }
      setTeamA([...teamA, member])
      setAllMembers(
        allMembers.filter((m) => m.gameUsername !== member.gameUsername),
      )

      const avgAcs = calculateAverageAcs([...teamA, member])
      setAvgAcsTeamA(avgAcs)
    }
  }

  const handleOnDropB = (e: React.DragEvent) => {
    e.preventDefault()
    const member = JSON.parse(e.dataTransfer.getData('member'))

    if (
      teamB.length === 0 ||
      (teamB.length < 5 &&
        teamB.some((m) => m.gameUsername !== member.gameUsername))
    ) {
      if (teamA.some((m) => m.gameUsername === member.gameUsername)) {
        setTeamA(teamA.filter((m) => m.gameUsername !== member.gameUsername))
        setAvgAcsTeamA(
          calculateAverageAcs(
            teamA.filter((m) => m.gameUsername !== member.gameUsername),
          ),
        )
      }
      setTeamB([...teamB, member])
      setAllMembers(
        allMembers.filter((m) => m.gameUsername !== member.gameUsername),
      )

      const avgAcs = calculateAverageAcs([...teamB, member])
      setAvgAcsTeamB(avgAcs)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const onClickAcsOrder = () => {
    if (members.length < 10) {
      alert('아직 팀원이 부족해요 😅')
    } else {
      const { teamA, teamB, avgAcsTeamA, avgAcsTeamB } =
        findOptimalTeams(members)
      setTeamA(teamA)
      setTeamB(teamB)
      setAvgAcsTeamA(avgAcsTeamA)
      setAvgAcsTeamB(avgAcsTeamB)
      setAllMembers([])
    }
  }

  const onClickRandomOrder = () => {
    if (members.length < 10) {
      alert('아직 팀원이 부족해요 😅')
    } else {
      const { teamA, teamB, avgAcsTeamA, avgAcsTeamB } = shuffleArray(members)

      setTeamA(teamA)
      setTeamB(teamB)
      setAvgAcsTeamA(avgAcsTeamA)
      setAvgAcsTeamB(avgAcsTeamB)
      setAllMembers([])
    }
  }

  const onClickReset = () => {
    setTeamA([])
    setTeamB([])
    setAvgAcsTeamA(0)
    setAvgAcsTeamB(0)
    setAllMembers(members)
  }

  // 발로란트 api 연결되면 acs가 아닌 제일 선호하는 요원 초상화를 보여주기

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 ">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-3xl font-bold tracking-tight w-full">Round 1</h2>
        <Button>저장하기</Button>
        <div />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card onDrop={(e) => handleOnDropM(e)} onDragOver={handleDragOver}>
          <CardHeader>
            <CardTitle>Members</CardTitle>
            <CardDescription>드래그하여 팀 배정을 하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {allMembers.map((member, idx) => (
              <div
                key={idx}
                className="flex justify-between"
                draggable
                onDragStart={(e) => handleOnDrag(e, member)}
              >
                <div className="flex">
                  <Grip className="h-4 w-4 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {member.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.gameUsername}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{member.acs}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card onDrop={(e) => handleOnDropA(e)} onDragOver={handleDragOver}>
          <CardHeader>
            <CardTitle>Team A</CardTitle>
            <CardDescription>
              평균 acs {Math.round(avgAcsTeamA)}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {teamA.map((memberA, idx) => (
              <div
                key={idx}
                className="flex justify-between"
                draggable
                onDragStart={(e) => handleOnDrag(e, memberA)}
              >
                <div className="flex">
                  <Grip className="h-4 w-4 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {memberA.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {memberA.gameUsername}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{memberA.acs}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card onDrop={(e) => handleOnDropB(e)} onDragOver={handleDragOver}>
          <CardHeader>
            <CardTitle>Team B</CardTitle>
            <CardDescription>
              평균 acs {Math.round(avgAcsTeamB)}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {teamB.map((memberB, idx) => (
              <div
                key={idx}
                className="flex justify-between"
                draggable
                onDragStart={(e) => handleOnDrag(e, memberB)}
              >
                <div className="flex">
                  <Grip className="h-4 w-4 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {memberB.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {memberB.gameUsername}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{memberB.acs}</p>
              </div>
            ))}
          </CardContent>
        </Card>
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
                <Button className="w-full" onClick={onClickAcsOrder}>
                  ACS 정렬
                </Button>
                <Button className="w-full" onClick={onClickRandomOrder}>
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
                <Button className="w-full" onClick={onClickReset}>
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

export default PlayerRoster
