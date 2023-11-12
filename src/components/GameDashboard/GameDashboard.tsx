import getGameData from '@/utils/getGameData/getGameData'
import GameContentsForDashboard from './ui/GameContentsForDashboard'
import HeaderForDashboard from './ui/HeaderForDashboard'
interface GameDashboardProps {
  guildId: string
  gameId: string
}

const GameDashboard = async ({ guildId, gameId }: GameDashboardProps) => {
  const gameData = await getGameData(guildId, gameId)

  const { createdBy, date, members } = gameData.props

  return (
    <section>
      <div className="my-16 overflow-hidden rounded-[0.5rem] border bg-background shadow">
        <div className="flex-col flex">
          <HeaderForDashboard guildId={guildId} />
          <GameContentsForDashboard
            createdBy={createdBy}
            date={date}
            members={members}
          />
        </div>
      </div>
    </section>
  )
}

export default GameDashboard
