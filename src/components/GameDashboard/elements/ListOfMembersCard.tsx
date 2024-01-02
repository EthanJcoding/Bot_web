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
import Link from 'next/link'
import AcsInputDialog from './AcsInputDialog'

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
        <div>
          {members.map((member, idx) => {
            return (
              <div key={idx} className="flex justify-between">
                <div className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={member.avatar} alt="Avatar" />
                  </Avatar>
                  <Link
                    href={`https://dak.gg/valorant/profile/${member.gameUsername.replace(
                      '#',
                      '-',
                    )}`}
                    target="blank"
                    rel="noopener noreferrer"
                    className="ml-4 hover:bg-accent transition-colors p-4 rounded-xl space-y-2"
                  >
                    <p className="text-sm font-medium leading-none">
                      {member.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.gameUsername}
                    </p>
                  </Link>
                </div>
                <AcsInputDialog />
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default ListOfMembersCard
