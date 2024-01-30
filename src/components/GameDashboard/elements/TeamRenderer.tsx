import { findOptimalTeams, getTierImage } from '@/utils'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { memberCardsState } from '@/recoil/memberCardsState'

const TeamRenderer = () => {
  const membersCard = useRecoilValue(memberCardsState)
  const optimalTeams = findOptimalTeams(membersCard)

  const options = {
    teamA: optimalTeams.teamA,
    teamB: optimalTeams.teamB,
    avgAcsTeamA: optimalTeams.avgAcsTeamA,
    avgAcsTeamB: optimalTeams.avgAcsTeamB,
  }

  return (
    <>
      <div className="space-y-8 w-full">
        <div className="text-sm text-muted-foreground">
          Team acs: {options.avgAcsTeamA}
        </div>
        {options.teamA.map((member, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
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
            <Image
              src={getTierImage(member.tier)}
              alt="tier image"
              className="w-10 h-10"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center w-full justify-center">vs</div>
      <div className="space-y-8 w-full">
        <div className="text-sm text-muted-foreground">
          Team acs: {options.avgAcsTeamB}
        </div>
        {options.teamB.map((member, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
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
            <Image
              src={getTierImage(member.tier)}
              alt="tier image"
              className="w-10 h-10"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default TeamRenderer
