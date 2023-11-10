import cn from '@/utils/cn/utils'
import { CaretSortIcon } from '@radix-ui/react-icons'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const HeaderNav = ({ guildId }: { guildId: string }) => {
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
        <div className="p-4 text-sm font-semibold transition-colors hover:bg-accent rounded">
          <Link
            className="flex justify-between w-full"
            href={`/guilds/${guildId}`}
          >
            <span>대쉬보드</span>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default HeaderNav
