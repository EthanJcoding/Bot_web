'use client'

import { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import cn from '@/utils/cn/utils'
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
  if (!arr || arr.length === 0) {
    return null
  }

  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}
export function MapList() {
  const [open, setOpen] = useState<boolean>(false)
  const [label, setLabel] = useState<string>('')

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {label ? label : 'Select map...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search map..." />
            <CommandEmpty>No map found.</CommandEmpty>
            <CommandGroup>
              {maps.map((map) => (
                <CommandItem
                  key={map.label}
                  value={map.label}
                  onSelect={(currentValue) => {
                    setLabel(currentValue === label ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      label === map.label ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {map.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <Button onClick={() => setLabel(getRandomElement(maps)?.label ?? '')}>
        Random
      </Button>
    </>
  )
}
