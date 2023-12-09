'use client'

import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { dragDropMemberState } from '@/recoil/dragDropMemberState'
import MapListPopover from './MapListPopover'
import { Button } from '@/components/ui/button'

const maps = [
  {
    value: 'Split',
    label: '스플릿',
  },
  {
    value: 'Bind',
    label: '바인드',
  },
  {
    value: 'Haven',
    label: '헤이븐',
  },
  {
    value: 'Ascent',
    label: '어센트',
  },
  {
    value: 'Breeze',
    label: '브리즈',
  },
  {
    value: 'Lotus',
    label: '로터스',
  },
  {
    value: 'Sunset',
    label: '선셋',
  },
]
function getRandomElement(arr: typeof maps) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

const MapList = () => {
  const [rounds, setRounds] = useRecoilState(dragDropMemberState)
  const [open, setOpen] = useState<boolean>(false)
  const currentRound =
    Object.keys(rounds).find((key) => rounds[key].hasSelected) ??
    Object.keys(rounds)[0]

  const round = rounds[currentRound]

  const handleClickRandom = () => {
    const updatedMap = { ...round, map: getRandomElement(maps).label }
    const updatedRounds = {
      ...rounds,
      [currentRound]: updatedMap,
    }
    setRounds(updatedRounds)
  }

  const handleClickList = (currentValue: string) => {
    const updatedMap = { ...round, map: currentValue }
    const updatedRounds = {
      ...rounds,
      [currentRound]: updatedMap,
    }
    setRounds(updatedRounds)
    setOpen(false)
  }

  // 발로란트 api 연결되면, 해당 맵에서 가장 승률이 좋은 플레이어를 언급하는것도 좋을듯

  return (
    <div className="flex flex-col justify-between space-y-2">
      <MapListPopover
        open={open}
        onOpenChange={(open) => setOpen(open)}
        onSelect={handleClickList}
        round={round}
      />
      <Button className="w-full" onClick={() => handleClickRandom()}>
        Random
      </Button>
    </div>
  )
}

export default MapList
