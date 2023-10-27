const mockArr = [
  { gameUsername: '하이앳', user: '하이앳', acs: '378' },
  { gameUsername: 'HIPNOTIC', user: '명곡', acs: '228' },
  { gameUsername: '형이 얘기하잖아', user: '정준일', acs: '98' },
  { gameUsername: '씨씨씼씨씨', user: '빨갱이', acs: '299' },
  { gameUsername: 'This is mockdata', user: '하이앳', acs: '5' },
]

export default function AcsOrder() {
  const sortedArr = mockArr.sort((a, b) => {
    const acsA = parseInt(a.acs)
    const acsB = parseInt(b.acs)

    if (acsA < acsB) {
      return 1
    } else if (acsA > acsB) {
      return -1
    } else {
      return 0
    }
  })
  return (
    <div className="space-y-8">
      {sortedArr.map((el, idx) => {
        return (
          <div className="flex items-center" key={idx}>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{el.user}</p>
              <p className="text-sm text-muted-foreground">{el.gameUsername}</p>
            </div>
            <div className="ml-auto font-medium">{el.acs}</div>
          </div>
        )
      })}
    </div>
  )
}
