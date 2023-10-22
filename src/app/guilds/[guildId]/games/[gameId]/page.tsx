function Page({ params }: { params: { gameId: string } }) {
  console.log(params.gameId)
  return (
    <div>
      <div>this is games page</div>
    </div>
  )
}

export default Page
