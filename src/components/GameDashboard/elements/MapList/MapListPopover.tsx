import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Interfaces, cn } from '@/utils'
import { maps } from './mapConst'

interface MapListPopoverProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelect: (currentValue: string) => void
  round: Interfaces.RoundInterface
}

const MapListPopover = ({
  open,
  onOpenChange,
  onSelect,
  round,
}: MapListPopoverProps) => {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex justify-between"
        >
          {round.map ? round.map : 'Select map...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search map..." />
          <CommandEmpty>No map found.</CommandEmpty>
          <CommandGroup>
            {maps.map((map) => (
              <CommandItem
                key={map.label}
                value={map.label}
                onSelect={(currentValue) => onSelect(currentValue)}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    round.map === map.label ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {map.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default MapListPopover
