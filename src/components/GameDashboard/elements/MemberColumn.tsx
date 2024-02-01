import { Interfaces, getTierImage } from '@/utils'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Grip } from 'lucide-react'
import Image from 'next/image'
interface MemberColumnProps {
  team: Interfaces.Member[]
  onDrop: (
    e: React.DragEvent,
    targetTeam: 'members' | 'teamA' | 'teamB',
  ) => void
  onDragOver: (e: React.DragEvent) => void
  onDrag: (e: React.DragEvent, member: Interfaces.Member) => void
  title: string
  avgAcs?: number
}

const MemberColumn = ({
  team,
  onDrop,
  onDragOver,
  onDrag,
  title,
  avgAcs,
}: MemberColumnProps) => {
  return (
    <Card onDrop={(e) => onDrop(e, 'members')} onDragOver={onDragOver}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {!avgAcs
            ? '드래그하여 팀 배정을 하세요'
            : `평균 acs ${Math.round(avgAcs)}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center"
            draggable
            onDragStart={(e) => onDrag(e, member)}
          >
            <div className="flex">
              <Grip className="h-4 w-4 text-muted-foreground mr-2" />
              <div>
                <p className="text-sm font-medium leading-none">
                  {member.user}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.gameUsername}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src={getTierImage(member.tier)}
                alt="tier image"
                className="w-10 h-10"
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default MemberColumn
