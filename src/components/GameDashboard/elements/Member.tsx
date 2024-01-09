'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import AcsInputDialog from './AcsInputDialog'
import { Interfaces } from '@/utils'
import { getTierImage } from '@/utils'
import Image from 'next/image'

interface MemberProps {
  members: Interfaces.Member[]
}

const Member = ({ members }: MemberProps) => {
  return (
    <div>
      {members.map((member, idx) => {
        if (member.acs !== '' && member.tier !== '') {
          return (
            <div key={idx} className="flex justify-between">
              <div className="flex items-center w-full">
                <Image
                  src={getTierImage(member.tier)}
                  alt="tier image"
                  className="w-10 h-10"
                />

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

              <AcsInputDialog gameUsername={member.gameUsername} edit={true} />
            </div>
          )
        } else
          return (
            <div key={idx} className="flex justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10">
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
              <AcsInputDialog gameUsername={member.gameUsername} />
            </div>
          )
      })}
    </div>
  )
}

export default Member
