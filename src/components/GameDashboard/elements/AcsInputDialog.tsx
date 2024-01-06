'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { useState } from 'react'
import TierListPopover from './TierList/TierListPopover'
import TierToggle from './TierList/TierToggle'

const AcsInputDialog = () => {
  const [selectedTier, setSelectedTier] = useState('')
  const [selectedTierSegment, setSelectedTierSegment] = useState('')
  const [open, setOpen] = useState<boolean>(false)
  const [acs, setAcs] = useState('')

  const handleClickList = (tier: string) => {
    setSelectedTier(tier)
    setOpen(false)
  }

  const handleInputAcs = (acs: string) => {
    setAcs(acs)
  }

  const handleSubmit = () => {
    console.log(selectedTier, selectedTierSegment, acs)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-foreground/60 text-sm hover:bg-accent transition-colors p-2 rounded-xl hover:text-foreground/80">
          실력 지표 입력하기
        </button>
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
              <TierToggle
                setSelectedTierSegment={(segment) =>
                  setSelectedTierSegment(segment)
                }
              />
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
              onChange={(e) => handleInputAcs(e.target.value)}
              className="col-span-3 outline-none"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => handleSubmit()}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AcsInputDialog
