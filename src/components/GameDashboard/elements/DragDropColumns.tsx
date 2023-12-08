import React, { useCallback } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Grip } from 'lucide-react'
import { useRecoilState } from 'recoil'
import { dragDropMemberState } from '@/recoil'
import { Interfaces } from '@/utils'

interface DragDropColumnsProps {
  roundInfo: {
    [key: string]: {
      allMembers: Interfaces.Member[]
      teamA: Interfaces.Member[]
      teamB: Interfaces.Member[]
      avgAcsTeamA: number
      avgAcsTeamB: number
      hasSelected: boolean
      map: string
      isSaved: boolean
    }
  }
}

const DragDropColumns = ({ roundInfo }: DragDropColumnsProps) => {
  const [rounds, setRounds] = useRecoilState(dragDropMemberState)
  const currentRound =
    Object.keys(rounds).find((key) => rounds[key].hasSelected) ??
    Object.keys(rounds)[0]

  const handleOnDrop = useCallback(
    (e: React.DragEvent, targetTeam: 'members' | 'teamA' | 'teamB') => {
      e.preventDefault()
      const calculateUpdatedAvgAcs = (team: Interfaces.Member[]) => {
        const totalAcs = team.reduce((total, member) => total + member.acs, 0)
        return team.length > 0 ? totalAcs / team.length : 0
      }

      const member = JSON.parse(e.dataTransfer.getData('member'))
      const round = rounds[currentRound]

      const updateRound = (
        updatedMembers: Interfaces.Member[],
        updatedTeamA: Interfaces.Member[],
        updatedTeamB: Interfaces.Member[],
      ) => {
        const updatedAvgAcsTeamA = calculateUpdatedAvgAcs(updatedTeamA)
        const updatedAvgAcsTeamB = calculateUpdatedAvgAcs(updatedTeamB)

        const updatedRounds = {
          ...rounds,
          [currentRound]: {
            ...round,
            allMembers: updatedMembers,
            teamA: updatedTeamA,
            teamB: updatedTeamB,
            avgAcsTeamA: updatedAvgAcsTeamA,
            avgAcsTeamB: updatedAvgAcsTeamB,
          },
        }

        setRounds(updatedRounds)
      }

      switch (targetTeam) {
        case 'teamA':
          if (
            !round.teamA.some((m) => m.gameUsername === member.gameUsername) &&
            round.teamA.length < 5
          ) {
            const updatedMembers = round.allMembers.filter(
              (m) => m.gameUsername !== member.gameUsername,
            )
            const updatedTeamA = [...round.teamA, member]
            const updatedTeamB = round.teamB.filter(
              (m) => m.gameUsername !== member.gameUsername,
            )
            updateRound(updatedMembers, updatedTeamA, updatedTeamB)
          }
          break

        case 'teamB':
          if (
            !round.teamB.some((m) => m.gameUsername === member.gameUsername) &&
            round.teamB.length < 5
          ) {
            const updatedMembers = round.allMembers.filter(
              (m) => m.gameUsername !== member.gameUsername,
            )
            const updatedTeamA = round.teamA.filter(
              (m) => m.gameUsername !== member.gameUsername,
            )
            const updatedTeamB = [...round.teamB, member]
            updateRound(updatedMembers, updatedTeamA, updatedTeamB)
          }
          break

        case 'members':
          if (
            !round.allMembers.some(
              (m) => m.gameUsername === member.gameUsername,
            )
          ) {
            const updatedMembers = [...round.allMembers, member]
            const updatedTeamA = round.teamA.filter(
              (m) => m.gameUsername !== member.gameUsername,
            )
            const updatedTeamB = round.teamB.filter(
              (m) => m.gameUsername !== member.gameUsername,
            )
            updateRound(updatedMembers, updatedTeamA, updatedTeamB)
          }
          break
      }
    },
    [rounds, currentRound, setRounds],
  )

  const handleOnDrag = (e: React.DragEvent, member: Interfaces.Member) => {
    const memberJSON = JSON.stringify(member)
    if (memberJSON) {
      e.dataTransfer.setData('member', memberJSON)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  if (roundInfo[currentRound].isSaved) {
    const { teamA, teamB, avgAcsTeamA, avgAcsTeamB } = roundInfo[currentRound]
    let { allMembers } = roundInfo[currentRound]
    if (!allMembers) {
      allMembers = []
    }
    return (
      <>
        <Card
          onDrop={(e) => handleOnDrop(e, 'members')}
          onDragOver={handleDragOver}
        >
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
        <Card
          onDrop={(e) => handleOnDrop(e, 'teamA')}
          onDragOver={handleDragOver}
        >
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
        <Card
          onDrop={(e) => handleOnDrop(e, 'teamB')}
          onDragOver={handleDragOver}
        >
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
      </>
    )
  } else
    return (
      <>
        <Card
          onDrop={(e) => handleOnDrop(e, 'members')}
          onDragOver={handleDragOver}
        >
          <CardHeader>
            <CardTitle>Members</CardTitle>
            <CardDescription>드래그하여 팀 배정을 하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {rounds[currentRound].allMembers.map((member, idx) => (
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
        <Card
          onDrop={(e) => handleOnDrop(e, 'teamA')}
          onDragOver={handleDragOver}
        >
          <CardHeader>
            <CardTitle>Team A</CardTitle>
            <CardDescription>
              평균 acs {Math.round(rounds[currentRound].avgAcsTeamA)}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {rounds[currentRound].teamA.map((memberA, idx) => (
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
        <Card
          onDrop={(e) => handleOnDrop(e, 'teamB')}
          onDragOver={handleDragOver}
        >
          <CardHeader>
            <CardTitle>Team B</CardTitle>
            <CardDescription>
              평균 acs {Math.round(rounds[currentRound].avgAcsTeamB)}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {rounds[currentRound].teamB.map((memberB, idx) => (
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
      </>
    )
}

export default DragDropColumns
