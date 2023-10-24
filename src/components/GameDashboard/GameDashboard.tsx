import getGameData from '@/utils/getGameData/getGameData'

interface GameDashboardProps {
  guildId: string
  gameId: string
}

const GameDashboard = async ({ guildId, gameId }: GameDashboardProps) => {
  const gameData = await getGameData(guildId, gameId)

  console.log(gameData.props)

  return (
    <div>
      <div>hi</div>
    </div>
  )
}

export default GameDashboard
