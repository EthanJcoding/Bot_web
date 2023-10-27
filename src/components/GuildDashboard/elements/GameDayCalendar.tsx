'use client'

import { CalendarIcon } from '@radix-ui/react-icons'
import cn from '@/utils/cn/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const GameDayCalendar = (
  gamesSchedule: {
    date: string
    href: string
  }[],
) => {
  console.log(gamesSchedule)
  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn('w-[260px] justify-start text-left font-normal')}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            내전 페이지로 이동하기
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar gamesSchedule={gamesSchedule} />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default GameDayCalendar
