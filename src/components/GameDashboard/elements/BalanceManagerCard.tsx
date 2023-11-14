'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import findOptimalTeams from '@/utils/findOptimalTeams/findOptimalTeams'
import SortingDropDown from './SortingDropdown'
import { useState, useEffect, memo } from 'react'
import shuffleArray from '@/utils/shuffleTeam/shuffleTeam'

interface BalanceManagerProps {
  members: {
    gameUsername: string
    joinedAt: string
    user: string
    avatar: string
    acs: number
  }[]
}

interface PlayersProps {
  gameUsername: string
  joinedAt: string
  user: string
  avatar: string
  acs: number
}

const BalanceManagerCard = ({ members }: BalanceManagerProps) => {
  const [options, setOptions] = useState<{
    teamA: PlayersProps[]
    teamB: PlayersProps[]
    avgAcsTeamA: number
    avgAcsTeamB: number
    description: string
  }>({
    teamA: [],
    teamB: [],
    avgAcsTeamA: 0,
    avgAcsTeamB: 0,
    description: 'acs를 기반으로 자동으로 팀을 짜봤어요 🤔',
  })
  const updateTeams = (selectedOption: string) => {
    const updatedOptions = { ...options }

    if (selectedOption === '랜덤 정렬') {
      const shuffledMembers = shuffleArray(members)
      updatedOptions.teamA = shuffledMembers.teamA
      updatedOptions.teamB = shuffledMembers.teamB
      updatedOptions.avgAcsTeamA = shuffledMembers.avgAcsTeamA
      updatedOptions.avgAcsTeamB = shuffledMembers.avgAcsTeamB
      updatedOptions.description = '랜덤으로 팀을 짜봤어요 😁'
    } else {
      const optimalTeams = findOptimalTeams(members)
      updatedOptions.teamA = optimalTeams.teamA
      updatedOptions.teamB = optimalTeams.teamB
      updatedOptions.avgAcsTeamA = optimalTeams.avgAcsTeamA
      updatedOptions.avgAcsTeamB = optimalTeams.avgAcsTeamB
      updatedOptions.description = 'acs를 기반으로 자동으로 팀을 짜봤어요 🤔'
    }

    setOptions(updatedOptions)
  }
  useEffect(() => {
    updateTeams('acs 기준 정렬')
  }, [])

  const handleSortingOptionChange = (selectedOption: string) => {
    updateTeams(selectedOption)
  }

  const { teamA, teamB, avgAcsTeamA, avgAcsTeamB, description } = options

  return (
    <Card className="col-span-3 row-span-2">
      <div className="flex justify-between">
        <CardHeader>
          <CardTitle>팀빌딩 매니저</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <SortingDropDown onOptionChange={handleSortingOptionChange} />
      </div>

      <CardContent className="flex justify-between">
        <div className="flex justify-between w-full">
          <div className="space-y-8 w-full">
            <div>acs 평균: {avgAcsTeamA}</div>
            {teamA.map((member, idx) => (
              <div key={idx} className="flex justify-between space-x-4">
                <div className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={member.avatar} alt="Avatar" />
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {member.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.gameUsername}
                    </p>
                  </div>
                </div>
                <div>{member.acs}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center w-full justify-center">vs</div>

          <div className="space-y-8 w-full">
            <div>acs 평균: {avgAcsTeamB}</div>
            {teamB.map((member, idx) => (
              <div key={idx} className="flex justify-between space-x-4">
                <div className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={member.avatar} alt="Avatar" />
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {member.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.gameUsername}
                    </p>
                  </div>
                </div>
                <div>{member.acs}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default memo(BalanceManagerCard)
