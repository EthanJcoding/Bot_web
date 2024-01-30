'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Interfaces } from '@/utils'
import dayjs from 'dayjs'
import Link from 'next/link'

interface UpcomingGameCardProps {
  nearestGame: Interfaces.Game | null
  guildId: string
}

const UpcomingGameCard = ({ nearestGame, guildId }: UpcomingGameCardProps) => {
  return (
    <Card className="col-span-4">
      {nearestGame ? (
        <>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>다가오는 내전</CardTitle>
              <Link href={`${guildId}/games/${nearestGame.gameId}`}>
                바로가기 📎
              </Link>
            </div>
            <CardDescription>
              {dayjs(nearestGame.date).format(
                'MM월DD일 HH:mm에 예정된 내전에 참여하는 인원이에요 🤗',
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col ">
              {nearestGame.members.map((member, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex justify-between items-center w-full"
                  >
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
                  </div>
                )
              })}
            </div>
          </CardContent>
        </>
      ) : (
        <>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>다가오는 내전이 없습니다 🙅‍♂️</CardTitle>
            </div>
          </CardHeader>
        </>
      )}
    </Card>
  )
}

export default UpcomingGameCard
