'use client'

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
import { cn } from '@/utils'
import { tierList } from './tierConst'

interface TierListPopoverProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  setSelectedTier: (currentValue: string) => void
  selectedTier: string
}

const TierListPopover = ({
  open,
  onOpenChange,
  setSelectedTier,
  selectedTier,
}: TierListPopoverProps) => {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex justify-between w-full"
        >
          {selectedTier ? selectedTier : 'Select tier...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search tier..." />
          <CommandEmpty>No tier found.</CommandEmpty>
          <CommandGroup>
            {tierList.map((tier, idx) => (
              <CommandItem
                key={idx}
                defaultValue={tier.tier}
                onSelect={(currentValue) => setSelectedTier(currentValue)}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    tier.tier === selectedTier ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {tier.tier}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default TierListPopover
