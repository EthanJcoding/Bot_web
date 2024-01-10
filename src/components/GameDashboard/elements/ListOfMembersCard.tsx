import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Interfaces } from '@/utils'
import dayjs from 'dayjs'
import Member from './Member'

interface ListOfMembersProps {
  members: Interfaces.Member[]
  date: string
}

const ListOfMembersCard = ({ members, date }: ListOfMembersProps) => {
  return (
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
        <Member members={members} />
      </CardContent>
    </Card>
  )
}

export default ListOfMembersCard
