import GameDashboard from '@/components/GameDashboard/GameDashboard'
import { RecoilRoot } from 'recoil'

const Page = ({ params }: { params: { gameId: string; guildId: string } }) => {
  const { guildId, gameId } = params

  return (
    <RecoilRoot>
      <GameDashboard guildId={guildId} gameId={gameId} />
    </RecoilRoot>
  )
}

export default Page
