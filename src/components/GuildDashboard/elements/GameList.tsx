import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import dayjs from 'dayjs'
import Link from 'next/link'
import { GameProps } from '@/hooks/usePreprocess/usePreprocess'

interface GameListProps {
  gameList: GameProps[]
  guildId: string
}

const GameList = ({ gameList, guildId }: GameListProps) => {
  return gameList.map((game, idx) => (
    <Card key={idx} className="hover:bg-accent transition-colors">
      <Link href={`/guilds/${guildId}/games/${game.gameId}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {game.createdBy}님의 내전
          </CardTitle>
          {game.members.length}
        </CardHeader>
        <CardContent>
          <div className="text-sm font-bold">
            {dayjs(game.date).format('MM월 DD일 내전')}
          </div>
        </CardContent>
      </Link>
    </Card>
  ))
}

export default GameList
