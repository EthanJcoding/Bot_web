import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Interfaces } from '@/utils'
import dayjs from 'dayjs'

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
        <div className="space-y-8">
          {members.map((member, idx) => {
            return (
              <div key={idx} className="flex justify-between">
                <div className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={member.avatar} alt="Avatar" />
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {member.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.gameUsername}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1 items-center">
                  <div>{member.acs}</div>
                  <span className="text-sm text-muted-foreground">acs</span>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default ListOfMembersCard
