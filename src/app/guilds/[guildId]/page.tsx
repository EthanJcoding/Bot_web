import GuildDashboard from '@/components/GuildDashboard/GuildDashboard'
import TanstackProvider from '@/utils/providers/TanstackProvider'

const guildPage = async ({ params }: { params: { guildId: string } }) => {
  return (
    <TanstackProvider>
      <GuildDashboard guildId={params.guildId} />
    </TanstackProvider>
  )
}

export default guildPage
