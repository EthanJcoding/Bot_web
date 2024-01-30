'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import TierListPopover from './TierList/TierListPopover'
import TierToggle from './TierList/TierToggle'
import saveUserData from '@/firebase/saveUserData/saveUserData'
import { useParams } from 'next/navigation'
import { Settings } from 'lucide-react'
import { memberCardsState } from '@/recoil'
import { useRecoilState } from 'recoil'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'

interface AcsInputDialogProps {
  gameUsername: string
  edit?: boolean
}

const AcsInputDialog = ({ gameUsername, edit }: AcsInputDialogProps) => {
  const params = useParams()
  const { toast } = useToast()
  const [selectedTier, setSelectedTier] = useState('')
  const [selectedTierSegment, setSelectedTierSegment] = useState('')
  const [open, setOpen] = useState<boolean>(false)
  const [acs, setAcs] = useState(0)
  const [memberCards, setMemberCards] = useRecoilState(memberCardsState)
  const [editedGameUsername, setEditedGameUsername] = useState(gameUsername)

  const handleClickList = (tier: string) => {
    setSelectedTier(tier)
    setOpen(false)
  }

  const handleInputAcs = (acs: number) => {
    setAcs(acs)
  }

  const handleInputGameUsername = (newGameUsername: string) => {
    setEditedGameUsername(newGameUsername)
  }

  const handleSubmit = async () => {
    const guildId = params.guildId as string
    const gameId = params.gameId as string
    const tier = selectedTier + ' ' + selectedTierSegment

    const existingMemberIndex = memberCards.findIndex(
      (member) => member.gameUsername === gameUsername,
    )

    const alreadyExist = memberCards
      .filter((member) => member.gameUsername !== gameUsername)
      .some((member) => member.gameUsername === editedGameUsername)

    if (existingMemberIndex !== -1 && !alreadyExist) {
      const updatedMemberCards = [...memberCards]
      updatedMemberCards[existingMemberIndex] = {
        ...updatedMemberCards[existingMemberIndex],
        acs,
        tier,
        gameUsername: editedGameUsername,
      }

      setMemberCards(updatedMemberCards)
      await saveUserData(guildId, gameId, gameUsername, tier, acs)
    } else {
      toast({
        title: `${editedGameUsername} 은(는) 이미 존재합니다`,
      })
      setEditedGameUsername(gameUsername)
    }
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          {edit ? (
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/60 text-sm p-2 items-center justify-center flex flex-col rounded-xl"
            >
              <Settings />
            </Button>
          ) : (
            <Button variant="ghost" className="text-foreground/60">
              실력 지표 입력하기
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle>실력 지표 입력하기</DialogTitle>
            <DialogDescription>
              해당 유저의 티어와 acs를 입력해주세요
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="gameUsername" className="text-right">
                유저명
              </Label>
              <Input
                id="gameUsername"
                value={editedGameUsername}
                onChange={(e) => handleInputGameUsername(e.target.value)}
                className="col-span-3 outline-none"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tier" className="text-right">
                Tier
              </Label>
              <div className="col-span-2">
                <TierListPopover
                  open={open}
                  onOpenChange={(open) => setOpen(open)}
                  setSelectedTier={(tier) => handleClickList(tier)}
                  selectedTier={selectedTier}
                />
              </div>
              <div className="w-full flex justify-between space-x-2">
                {selectedTier !== '언랭' && selectedTier !== '레디언트' ? (
                  <TierToggle
                    setSelectedTierSegment={(segment) =>
                      setSelectedTierSegment(segment)
                    }
                  />
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="acs" className="text-right">
                ACS
              </Label>
              <Input
                id="acs"
                type="number"
                value={acs}
                onChange={(e) => handleInputAcs(Number(e.target.value))}
                className="col-span-3 outline-none"
              />
            </div>
          </div>
          <DialogClose
            onClick={() => handleSubmit()}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Save changes
          </DialogClose>
        </DialogContent>
      </Dialog>
      <Toaster />
    </>
  )
}

export default AcsInputDialog
