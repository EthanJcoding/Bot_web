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

const AcsInputDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-foreground/60 text-sm hover:bg-accent transition-colors p-2 rounded-xl hover:text-foreground/80">
          실력 지표 입력하기
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
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
            <Input id="tier" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="acs" className="text-right">
              ACS
            </Label>
            <Input id="acs" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AcsInputDialog
