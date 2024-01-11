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
import { Interfaces, getTierImage } from '@/utils'
import { memberCardsState } from '@/recoil'
import { useRecoilValue } from 'recoil'
import Image from 'next/image'
import ManagerSkeleton from './ManagerSkeleton'

interface BalanceManagerCardProps {
  isLoading: boolean
}

const BalanceManagerCard = ({ isLoading }: BalanceManagerCardProps) => {
  const membersCard = useRecoilValue(memberCardsState)
  const optimalTeams = findOptimalTeams(membersCard)
  const options = {
    teamA: optimalTeams.teamA,
    teamB: optimalTeams.teamB,
    avgAcsTeamA: optimalTeams.avgAcsTeamA,
    avgAcsTeamB: optimalTeams.avgAcsTeamB,
  }

  const renderTeam = (team: Interfaces.Member[]) => (
    <div className="space-y-8 w-full">
      <div className="text-sm text-muted-foreground">
        Team acs:{' '}
        {team === options.teamA ? options.avgAcsTeamA : options.avgAcsTeamB}
      </div>
      {team.map((member, idx) => (
        <div key={idx} className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar className="h-10 w-10">
              <AvatarImage src={member.avatar} alt="Avatar" />
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{member.user}</p>
              <p className="text-sm text-muted-foreground">
                {member.gameUsername}
              </p>
            </div>
          </div>
          <Image
            src={getTierImage(member.tier)}
            alt="tier image"
            className="w-10 h-10"
          />
        </div>
      ))}
    </div>
  )

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>팀빌딩 매니저</CardTitle>
        <CardDescription>
          acs를 기반으로 자동으로 팀을 짜봤어요 🤔
        </CardDescription>
      </CardHeader>
      {isLoading ? (
        <CardContent className="flex justify-between w-full">
          <ManagerSkeleton />
        </CardContent>
      ) : (
        <CardContent className="flex justify-between w-full">
          {renderTeam(options.teamA)}
          <div className="flex items-center w-full justify-center">vs</div>
          {renderTeam(options.teamB)}
        </CardContent>
      )}
    </Card>
  )
}

export default BalanceManagerCard
