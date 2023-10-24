import getGuildData from '@/utils/getGuildData/getGuildData'
import ContentsForDashboard from './ui/ContentsForDashboard'
import HeaderForDashboard from './ui/HeaderForDashboard'

interface CardProps {
  guildId: string
}

const Dashboard = async ({ guildId }: CardProps) => {
  const guildData = await getGuildData(guildId)

  const { name, games } = guildData.props

  return (
    <section>
      <div className="mt-16 overflow-hidden rounded-[0.5rem] border bg-background shadow">
        <div className="flex-col flex">
          <HeaderForDashboard />
          <ContentsForDashboard name={name} games={games} />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
