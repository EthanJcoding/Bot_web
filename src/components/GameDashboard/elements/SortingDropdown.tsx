import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Checked = DropdownMenuCheckboxItemProps['checked']

export default function SortingDropDown({
  onOptionChange,
}: {
  onOptionChange: (selectedOption: string) => void
}) {
  const sortingOptions = ['acs 기준 정렬', '랜덤 정렬']
  const [checkedItems, setCheckedItems] = useState<Checked[]>(
    sortingOptions.map((_, idx) => (idx === 0 ? true : false)), // Set the first option as default
  )

  const handleCheckedChange = (idx: number) => {
    const newCheckedItems = checkedItems.map((_, i) =>
      i === idx ? true : false,
    )
    setCheckedItems(newCheckedItems)
    onOptionChange(sortingOptions[idx])
  }

  return (
    <div className="flex flex-col space-y-1.5 p-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">정렬하기</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>정렬하기</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {sortingOptions.map((option, idx) => (
            <DropdownMenuCheckboxItem
              key={idx}
              checked={checkedItems[idx]}
              onCheckedChange={() => handleCheckedChange(idx)}
            >
              {option}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
