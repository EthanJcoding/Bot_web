import GameDashboard from '@/components/GameDashboard/GameDashboard'

const Page = ({ params }: { params: { gameId: string; guildId: string } }) => {
  const { guildId, gameId } = params

  return <GameDashboard guildId={guildId} gameId={gameId} />
}

export default Page
