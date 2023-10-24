import GuildDashboard from '@/components/GuildDashboard/GuildDashboard'
import TanstackProvider from '@/utils/providers/TanstackProvider'

const guildPage = async ({ params }: { params: { guildId: string } }) => {
  return (
    <TanstackProvider>
      <div className="flex-1">
        <div className="container relative">
          <GuildDashboard guildId={params.guildId} />
        </div>
      </div>
    </TanstackProvider>
  )
}

export default guildPage
