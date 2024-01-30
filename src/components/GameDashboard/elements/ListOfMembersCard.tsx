import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import dayjs from 'dayjs'
import Member from './Member'
import MemberSkeleton from './MemberSkeleton'

interface ListOfMembersProps {
  date: string
  isLoading: boolean
}

const ListOfMembersCard: React.FC<ListOfMembersProps> = ({
  date,
  isLoading,
}) => {
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
      <CardContent>{isLoading ? <MemberSkeleton /> : <Member />}</CardContent>
    </Card>
  )
}

export default ListOfMembersCard
