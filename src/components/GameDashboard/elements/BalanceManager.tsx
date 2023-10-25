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
import { useState, useEffect } from 'react' // Import useEffect
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

const BalanceManager = ({ members }: BalanceManagerProps) => {
  const [teamA, setTeamA] = useState<PlayersProps[]>([])
  const [teamB, setTeamB] = useState<PlayersProps[]>([])
  const [avgAcsTeamA, setAvgAcsTeamA] = useState<number>(0)
  const [avgAcsTeamB, setAvgAcsTeamB] = useState<number>(0)
  const [description, setDescription] = useState<string>(
    'acs를 기반으로 자동으로 팀을 짜봤어요 🤔',
  )
  useEffect(() => {
    // Initial sorting based on ACS
    const initialTeams = findOptimalTeams(members)
    setTeamA(initialTeams.teamA)
    setTeamB(initialTeams.teamB)
    setAvgAcsTeamA(initialTeams.avgAcsTeamA)
    setAvgAcsTeamB(initialTeams.avgAcsTeamB)
  }, [members])

  const handleSortingOptionChange = (selectedOption: string) => {
    if (selectedOption === '랜덤 정렬') {
      const shuffledMembers = shuffleArray(members)
      setTeamA(shuffledMembers.teamA)
      setTeamB(shuffledMembers.teamB)
      setAvgAcsTeamA(shuffledMembers.avgAcsTeamA)
      setAvgAcsTeamB(shuffledMembers.avgAcsTeamB)

      setDescription('랜덤으로 팀을 짜봤어요 😁')
    } else {
      const optimalTeams = findOptimalTeams(members)
      setTeamA(optimalTeams.teamA)
      setTeamB(optimalTeams.teamB)
      setAvgAcsTeamA(optimalTeams.avgAcsTeamA)
      setAvgAcsTeamB(optimalTeams.avgAcsTeamB)

      setDescription('acs를 기반으로 자동으로 팀을 짜봤어요 🤔')
    }
  }

  return (
    <Card className="col-span-3 row-span-2 ">
      <div className="flex justify-between">
        <CardHeader>
          <CardTitle>팀빌딩 매니저</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <SortingDropDown onOptionChange={handleSortingOptionChange} />
      </div>

      <CardContent className="flex justify-between">
        <div className="flex justify-between w-full">
          <div className="space-y-8">
            <div>acs 평균: {avgAcsTeamA}</div>
            {teamA.map((member, idx) => {
              return (
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
              )
            })}
          </div>
          <div className="flex items-center">vs</div>

          <div className="space-y-8">
            <div>acs 평균: {avgAcsTeamB}</div>

            {teamB.map((member, idx) => {
              return (
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
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default BalanceManager
