import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est quam,
        tempus non justo eu, sollicitudin pulvinar nisi. Sed lectus eros,
        aliquam id lobortis a, eleifend quis lorem. Phasellus at vehicula ex,
        vitae rhoncus ipsum. Suspendisse sem diam, porttitor ut lorem nec,
        luctus tincidunt lectus. Praesent eu mi orci. Mauris faucibus dapibus
        sem vitae suscipit. Curabitur eget mauris non justo blandit consectetur
        nec et elit. Donec id turpis pellentesque, congue dolor eu, congue est.
        Suspendisse volutpat et nisi sed auctor. Nulla pellentesque, tortor id
        posuere volutpat, nibh magna commodo tellus, quis ultricies sapien sem
        ac orci. Fusce condimentum quam mi, in pulvinar est iaculis non.
        Maecenas ultrices scelerisque velit vel venenatis.
      </div>

      <div>이 페이지는 랜딩페이지가 될 예정입니다.</div>
      <div>This page will be a beautiful landing page.</div>
      <Link href="/guilds/1163455140351717469">
        Go ahead to explore this web by clicking this
      </Link>
    </main>
  )
}
