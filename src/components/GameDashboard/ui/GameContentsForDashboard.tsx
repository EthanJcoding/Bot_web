import { Interfaces } from '@/utils'
import getGameData from '@/firebase/getGameData/getGameData'
import GameTabsRoot from '../elements/GameTabs'

interface GameContentsForDashBoardProps {
  guildId: string
  gameId: string
}

const GameContentsForDashboard = async ({
  guildId,
  gameId,
}: GameContentsForDashBoardProps) => {
  const gameData = await getGameData(guildId, gameId)
  const { createdBy, members, date, roundInfo } =
    gameData.props as Interfaces.Game

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="sm:text-3xl font-bold tracking-tight">
          {createdBy} 님이 만드신 내전이에요 👋
        </h2>
        <div />
      </div>
      <GameTabsRoot members={members} date={date} roundInfo={roundInfo} />
    </div>
  )
}

export default GameContentsForDashboard
