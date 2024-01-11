'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import PlayerRoster from '../ui/PlayerRoster'
import ListOfMembersCard from './ListOfMembersCard'
import BalanceManagerCard from './BalanceManagerCard'
import { Interfaces } from '@/utils'
import { memberCardsState } from '@/recoil/memberCardsState'
import { useEffect, useState } from 'react'

interface GameTabsProps {
  members: Interfaces.Member[]
  date: string
  roundInfo: Interfaces.RoundInfo
}

const GameTabs = ({ members, date, roundInfo }: GameTabsProps) => {
  const setMemberCards = useSetRecoilState(memberCardsState)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function setMember() {
      await setMemberCards(members)
      setIsLoading(false)
    }
    setMember()
  }, [members, setMemberCards])

  return (
    <Tabs defaultValue="main" className="space-y-4 items-center">
      <TabsList>
        <TabsTrigger value="main">내전</TabsTrigger>
        <TabsTrigger value="setting">내전 세팅</TabsTrigger>
        <TabsTrigger value="result">내전 결과</TabsTrigger>
      </TabsList>

      <TabsContent value="main" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <ListOfMembersCard date={date} isLoading={isLoading} />
          <BalanceManagerCard isLoading={isLoading} />
        </div>
      </TabsContent>

      <TabsContent value="setting" className="space-y-4 ">
        <PlayerRoster roundInfo={roundInfo} members={members} />
      </TabsContent>
    </Tabs>
  )
}

const GameTabsRoot = ({ members, date, roundInfo }: GameTabsProps) => {
  return (
    <RecoilRoot>
      <GameTabs members={members} date={date} roundInfo={roundInfo} />
    </RecoilRoot>
  )
}

export default GameTabsRoot
