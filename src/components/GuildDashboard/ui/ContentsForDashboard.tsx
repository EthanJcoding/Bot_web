import usePreprocess from '@/hooks/usePreprocess/usePreprocess'
import dayjs from 'dayjs'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '../../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs'
import Upcoming from '../elements/Upcoming'
import Link from 'next/link'
import ScheduledGames from '../elements/SchduledGames'
import GameList from '../elements/GameList'

interface ContentsForDashboardProps {
  name: string
  guildId: string
  games: {
    [key: string]: {
      createdBy: string
      date: string
      isActive: boolean
      gameId: string
      members: Array<{
        gameUsername: string
        joinedAt: string
        user: string
        avatar: string
      }>
    }
  }
}

const ContentsForDashboard = ({
  name,
  games,
  guildId,
}: ContentsForDashboardProps) => {
  const { nearestGame, futureGames, gameId, gameList } = usePreprocess(games)

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-3xl font-bold tracking-tight w-full">
          {name} 채널의 대쉬보드입니다 👋
        </h2>
        <div />
      </div>
      <Tabs defaultValue="main" className="space-y-4">
        <TabsList>
          <TabsTrigger value="main">채널</TabsTrigger>
          <TabsTrigger value="games">내전 리스트</TabsTrigger>
        </TabsList>

        <TabsContent value="main" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <ScheduledGames futureGamesNumber={futureGames.length} />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              {nearestGame ? (
                <>
                  <CardHeader>
                    <div className="flex justify-between">
                      <CardTitle>다가오는 내전</CardTitle>
                      <Link href={`${guildId}/games/${gameId}`}>
                        바로가기 📎
                      </Link>
                    </div>
                    <CardDescription>
                      {dayjs(nearestGame.date).format(
                        'MM월DD일 HH:mm에 예정된 내전에 참여하는 인원이에요 🤗',
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Upcoming members={nearestGame.members} />
                  </CardContent>
                </>
              ) : (
                <>
                  <CardHeader>
                    <div className="flex justify-between">
                      <CardTitle>다가오는 내전이 없습니다 🙅‍♂️</CardTitle>
                    </div>
                  </CardHeader>
                </>
              )}
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="games" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <GameList gameList={gameList} guildId={guildId} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ContentsForDashboard
