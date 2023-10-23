import Card from '@/components/Card/Card'

const Page = ({ params }: { params: { gameId: string; guildId: string } }) => {
  const { guildId, gameId } = params

  return (
    <div>
      <Card guildId={guildId} gameId={gameId} />
    </div>
  )
}

export default Page
