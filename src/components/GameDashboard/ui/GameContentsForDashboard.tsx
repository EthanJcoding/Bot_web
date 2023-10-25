import ListOfMembers from '../elements/ListOfMembers'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import dayjs from 'dayjs'
import BalanceManager from '../elements/BalanceManager'

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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>참여 집계된 인원</CardTitle>
            <CardDescription>
              {dayjs(date).format(
                'MM월DD일 HH:mm에 예정된 내전에 참여하는 인원이에요 🤗',
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ListOfMembers members={members} />
          </CardContent>
        </Card>
        <div className="grid col-span-4 grid-rows-3 gap-4">
          <BalanceManager members={members} />
        </div>
      </div>
    </div>
  )
}

export default GameContentsForDashboard
