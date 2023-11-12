import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import BalanceManagerCard from '../elements/BalanceManagerCard'
import ListOfMembersCard from '../elements/ListOfMembersCard'
import PlayerRoster from '../elements/PlayerRoster'

interface GameContentsForDashBoardProps {
  createdBy: string
  date: string
  isActive?: boolean
  key?: string
  members: Member[]
}

interface Member {
  avatar: string
  gameUsername: string
  joinedAt: string
  user: string
  acs: number
}

const GameContentsForDashboard = ({
  createdBy,
  date,
  members,
}: GameContentsForDashBoardProps) => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          {createdBy} 님이 만드신 내전이에요 👋
        </h2>
        <div />
      </div>
      <Tabs defaultValue="main" className="space-y-4">
        <TabsList>
          <TabsTrigger value="main">내전</TabsTrigger>
          <TabsTrigger value="setting">내전 세팅</TabsTrigger>
        </TabsList>

        <TabsContent value="main" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <ListOfMembersCard members={members} date={date} />
            <div className="grid col-span-4 grid-rows-3 gap-4">
              <BalanceManagerCard members={members} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="setting" className="space-y-4 ">
          <PlayerRoster members={members} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default GameContentsForDashboard
