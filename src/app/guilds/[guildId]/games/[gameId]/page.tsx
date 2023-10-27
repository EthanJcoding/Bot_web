import GameDashboard from '@/components/GameDashboard/GameDashboard'
import TanstackProvider from '@/utils/providers/TanstackProvider'

const Page = ({ params }: { params: { gameId: string; guildId: string } }) => {
  const { guildId, gameId } = params

  return (
    <TanstackProvider>
      <GameDashboard guildId={guildId} gameId={gameId} />
    </TanstackProvider>
  )
}

export default Page
