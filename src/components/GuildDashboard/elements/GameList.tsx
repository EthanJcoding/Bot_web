import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import dayjs from 'dayjs'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Interfaces } from '@/utils'
interface GameListProps {
  gameList: Interfaces.Game[]
  guildId: string
}

const GameList = ({ gameList, guildId }: GameListProps) => {
  return gameList.map((game, idx) => (
    <HoverCard key={idx}>
      <HoverCardTrigger href={`/guilds/${guildId}/games/${game.gameId}`}>
        <Card className="hover:bg-accent transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {game.createdBy}님의 내전
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent className="flex w-full justify-between">
            <div className="text-sm font-bold">
              {dayjs(game.date).format('MM월 DD일')}
            </div>
            <div>{game.members.length}</div>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="space-y-2">
        {game.members.map((member, idx) => (
          <div className="flex items-center space-x-2" key={idx}>
            <Avatar className="h-6 w-6">
              <AvatarImage src={member.avatar} />
            </Avatar>
            <div>
              <h4 className="text-xs font-semibold"> {member.user}</h4>
              <div className="text-xs text-muted-foreground">
                {member.gameUsername}
              </div>
            </div>
          </div>
        ))}
      </HoverCardContent>
    </HoverCard>
  ))
}

export default GameList
