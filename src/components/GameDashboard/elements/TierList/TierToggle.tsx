'use client'

import { Toggle } from '@/components/ui/toggle'
import { useState } from 'react'

interface TierToggleProps {
  setSelectedTierSegment: (segment: string) => void
}

const TierToggle = ({ setSelectedTierSegment }: TierToggleProps) => {
  const [isToggled1, setIsToggled1] = useState(false)
  const [isToggled2, setIsToggled2] = useState(false)
  const [isToggled3, setIsToggled3] = useState(false)

  const handleToggle = (toggleNumber: number) => {
    setIsToggled1(false)
    setIsToggled2(false)
    setIsToggled3(false)

    switch (toggleNumber) {
      case 1:
        setIsToggled1(true)
        setSelectedTierSegment('1')
        break
      case 2:
        setIsToggled2(true)
        setSelectedTierSegment('2')
        break
      case 3:
        setIsToggled3(true)
        setSelectedTierSegment('3')
        break
      default:
        break
    }
  }

  return (
    <>
      <Toggle
        className={`px-1 w-full ${isToggled1 ? 'outline' : ''}`}
        onClick={() => handleToggle(1)}
        pressed={isToggled1}
      >
        I
      </Toggle>
      <Toggle
        className={`px-1 w-full ${isToggled2 ? 'outline' : ''}`}
        onClick={() => handleToggle(2)}
        pressed={isToggled2}
      >
        II
      </Toggle>
      <Toggle
        className={`px-1 w-full ${isToggled3 ? 'outline' : ''}`}
        onClick={() => handleToggle(3)}
        pressed={isToggled3}
      >
        III
      </Toggle>
    </>
  )
}

export default TierToggle
