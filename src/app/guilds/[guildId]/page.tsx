import Dashboard from '@/components/Dashboard/Dashboard'
import TanstackProvider from '@/utils/providers/TanstackProvider'

const guildPage = async ({ params }: { params: { guildId: string } }) => {
  return (
    <TanstackProvider>
      <div className="flex-1">
        <div className="container relative">
          <Dashboard guildId={params.guildId} />
        </div>
      </div>
    </TanstackProvider>
  )
}

export default guildPage
