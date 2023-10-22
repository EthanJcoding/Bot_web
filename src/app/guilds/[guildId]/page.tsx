function Page({ params }: { params: { guildId: string } }) {
  console.log(params.guildId)
  return (
    <div>
      <div>this is guilds page</div>
    </div>
  )
}

export default Page
