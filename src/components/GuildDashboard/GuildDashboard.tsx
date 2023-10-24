import getGuildData from '@/utils/getGuildData/getGuildData'
import ContentsForDashboard from './ui/ContentsForDashboard'
import HeaderForDashboard from './ui/HeaderForDashboard'

interface CardProps {
  guildId: string
}

const GuildDashboard = async ({ guildId }: CardProps) => {
  const guildData = await getGuildData(guildId)
  const { name, games } = guildData.props

  return (
    <section>
      {name && games ? (
        <div className="my-16 overflow-hidden rounded-[0.5rem] border bg-background shadow">
          <div className="flex-col flex">
            <HeaderForDashboard />
            <ContentsForDashboard name={name} games={games} guildId={guildId} />
          </div>
        </div>
      ) : (
        <div>no such guild</div>
      )}
    </section>
  )
}

export default GuildDashboard
