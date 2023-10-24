interface CardProps {
  guildId: string
}

const Dashboard = ({ guildId }: CardProps) => {
  return (
    <div>
      <div>hi it is me and your guildId is {guildId}</div>
    </div>
  )
}

export default Dashboard
