import * as React from 'react'
import { CaretSortIcon } from '@radix-ui/react-icons'
import cn from '@/utils/cn/utils'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import Link from 'next/link'
import dayjs from 'dayjs'
import usePreprocess from '@/hooks/usePreprocess/usePreprocess'
import { Interfaces } from '@/utils'

interface GameSwitcherProps {
  guildId: string
  games: Interfaces.GamesOfGuild
}

const GameSwitcher = ({ games, guildId }: GameSwitcherProps) => {
  const { futureGames } = usePreprocess(games)

  if (futureGames.length !== 0) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-label="Select a team"
            className={cn('w-[200px] justify-between')}
          >
            내전 리스트
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          {futureGames.map((game, idx) => (
            <div
              className="p-4 text-sm font-semibold transition-colors hover:bg-accent rounded"
              key={idx}
            >
              <Link
                className="flex justify-between w-full"
                href={`${guildId}/games/${game.gameId}`}
              >
                <span>{`${game.createdBy}의 ${dayjs(game.date).format(
                  'MM월 DD일 내전',
                )}`}</span>
              </Link>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    )
  } else {
    return <div className="p-2 rounded-lg">현재 예정된 내전이 없어요 </div>
  }
}

export default GameSwitcher
