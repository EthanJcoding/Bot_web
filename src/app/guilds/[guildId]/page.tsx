import GuildDashboard from '@/components/GuildDashboard/GuildDashboard'
import TanstackProvider from '@/utils/providers/TanstackProvider'

const guildPage = async ({ params }: { params: { guildId: string } }) => {
  const { guildId } = params

  return (
    <TanstackProvider>
      <GuildDashboard guildId={guildId} />
    </TanstackProvider>
  )
}

export default guildPage
