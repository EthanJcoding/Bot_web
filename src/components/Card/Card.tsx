interface CardProps {
  guildId: string
  gameId: string
}

const Card = ({ guildId, gameId }: CardProps) => {
  return (
    <div>
      <div>
        hi it is me and your guildId is {guildId} and gameId is {gameId}
      </div>
    </div>
  )
}

export default Card
