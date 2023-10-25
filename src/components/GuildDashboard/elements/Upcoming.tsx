import { Avatar, AvatarImage } from '@/components/ui/avatar'

interface UpcomingProps {
  members: {
    gameUsername: string
    joinedAt: string
    user: string
    avatar: string
  }[]
}

const Upcoming = ({ members }: UpcomingProps) => {
  return (
    <div className="flex flex-wrap">
      {members.map((member, idx) => {
        return (
          <div key={idx} className="flex items-center w-1/2 mb-8">
            <Avatar className="h-9 w-9">
              <AvatarImage src={member.avatar} alt="Avatar" />
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{member.user}</p>
              <p className="text-sm text-muted-foreground">
                {member.gameUsername}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Upcoming
