import GuildDashboard from '@/components/GuildDashboard/GuildDashboard'

const guildPage = async ({ params }: { params: { guildId: string } }) => {
  const { guildId } = params

  return <GuildDashboard guildId={guildId} />
}

export default guildPage
