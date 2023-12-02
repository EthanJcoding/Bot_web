import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { useRecoilState } from 'recoil'
import { dragDropMemberState } from '@/recoil'

const Bo5DropDown = () => {
  const [rounds, setRounds] = useRecoilState(dragDropMemberState)

  const handleRoundChange = (selectedRound: string) => {
    const updatedRounds: typeof rounds = {}

    for (const key in rounds) {
      if (rounds.hasOwnProperty(key)) {
        updatedRounds[key] = {
          ...rounds[key],
          hasSelected: key === selectedRound,
        }
      }
    }

    setRounds(updatedRounds)
  }

  const currentRound =
    Object.keys(rounds).find((key) => rounds[key].hasSelected) ??
    Object.keys(rounds)[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={'w-[132px] justify-between'}>
          {currentRound}
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel>설정할 라운드를 골라주세요</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={currentRound}
          onValueChange={(value: string) => handleRoundChange(value)}
        >
          {Object.keys(rounds).map((key, index) => (
            <DropdownMenuRadioItem key={index} value={key}>
              {key}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Bo5DropDown
