import GameDashboard from '@/components/GameDashboard/GameDashboard'
import TanstackProvider from '@/utils/providers/TanstackProvider'

const Page = ({ params }: { params: { gameId: string; guildId: string } }) => {
  const { guildId, gameId } = params

  return (
    <TanstackProvider>
      <div className="flex-1">
        <div className="container relative">
          <GameDashboard guildId={guildId} gameId={gameId} />
        </div>
      </div>
    </TanstackProvider>
  )
}

export default Page
