import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import BalanceManagerCard from '../elements/BalanceManagerCard'
import ListOfMembersCard from '../elements/ListOfMembersCard'
import PlayerRoasterInRoot from './PlayerRoster'
import getGameData from '@/firebase/getGameData/getGameData'

interface GameContentsForDashBoardProps {
  guildId: string
  gameId: string
}

const GameContentsForDashboard = async ({
  guildId,
  gameId,
}: GameContentsForDashBoardProps) => {
  const gameData = await getGameData(guildId, gameId)

  const { createdBy, date, members } = gameData.props

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="sm:text-3xl font-bold tracking-tight">
          {createdBy} 님이 만드신 내전이에요 👋
        </h2>
        <div />
      </div>
      <Tabs defaultValue="main" className="space-y-4 items-center">
        <TabsList>
          <TabsTrigger value="main">내전</TabsTrigger>
          <TabsTrigger value="setting">내전 세팅</TabsTrigger>
        </TabsList>

        <TabsContent value="main" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <ListOfMembersCard members={members} date={date} />
            <div className="grid col-span-4 grid-rows-3 gap-4">
              <BalanceManagerCard members={members} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="setting" className="space-y-4 ">
          <PlayerRoasterInRoot game={gameData.props} guildId={guildId} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default GameContentsForDashboard
