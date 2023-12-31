import getGuildData from '@/firebase/getGuildData/getGuildData'
import ContentsForDashboard from './ui/ContentsForDashboard'
import HeaderForDashboard from './ui/HeaderForDashboard'
import { Interfaces } from '@/utils'

interface CardProps {
  guildId: string
}

const GuildDashboard = async ({ guildId }: CardProps) => {
  const guildData = await getGuildData(guildId)
  const { name, games } = guildData.props as Interfaces.GuildData

  return (
    <section className="my-16 overflow-hidden rounded-[0.5rem] border bg-background shadow">
      <div className="flex-col flex">
        <HeaderForDashboard games={games} guildId={guildId} />
        <ContentsForDashboard name={name} games={games} guildId={guildId} />
      </div>
    </section>
  )
}

export default GuildDashboard
