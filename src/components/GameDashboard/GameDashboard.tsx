import GameContentsForDashboard from './ui/GameContentsForDashboard'
import HeaderForDashboard from './ui/HeaderForDashboard'

interface GameDashboardProps {
  guildId: string
  gameId: string
}

const GameDashboard = ({ guildId, gameId }: GameDashboardProps) => {
  return (
    <section>
      <div className="my-16 overflow-hidden rounded-[0.5rem] border bg-background shadow">
        <div className="flex-col flex">
          <HeaderForDashboard guildId={guildId} />
          <GameContentsForDashboard guildId={guildId} gameId={gameId} />
        </div>
      </div>
    </section>
  )
}

export default GameDashboard
