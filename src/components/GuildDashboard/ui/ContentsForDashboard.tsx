import usePreprocess from '@/hooks/usePreprocess/usePreprocess'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs'

import ScheduledGames from '../elements/SchduledGames'
import GameList from '../elements/GameList'

import UpcomingGameCard from '../elements/UpcomingGameCard'
import { Interfaces } from '@/utils'

interface ContentsForDashboardProps {
  name: string
  guildId: string
  games: Interfaces.GamesOfGuild
}

const ContentsForDashboard = ({
  name,
  games,
  guildId,
}: ContentsForDashboardProps) => {
  const { nearestGame, futureGames, gameList } = usePreprocess(games)

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 min-h-[752px]">
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
            <UpcomingGameCard nearestGame={nearestGame} guildId={guildId} />
          </div>
        </TabsContent>

        <TabsContent value="games" className="space-y-4 ">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <GameList gameList={gameList} guildId={guildId} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ContentsForDashboard
