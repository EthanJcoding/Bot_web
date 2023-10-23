import Dashboard from '@/components/Dashboard/Dashboard'
import TanstackProvider from '@/utils/providers/TanstackProvider'

const guildPage = ({ params }: { params: { guildId: string } }) => {
  return (
    <TanstackProvider>
      <Dashboard guildId={params.guildId} />
    </TanstackProvider>
  )
}

export default guildPage
