'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import AcsInputDialog from './AcsInputDialog'
import { getTierImage } from '@/utils'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { memberCardsState } from '@/recoil'

const Member = () => {
  const membersCard = useRecoilValue(memberCardsState)

  return (
    <>
      {membersCard.map((member, idx) => {
        if (member.acs !== '' && member.tier !== '') {
          return (
            <div key={idx} className="flex justify-between items-center">
              <div className="flex items-center w-full">
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
              <div className="flex items-center space-x-4 p-2 w-full justify-end">
                <Image
                  src={getTierImage(member.tier)}
                  alt="tier image"
                  className="w-10 h-10"
                />
                <div className="text-sm text-muted-foreground ">
                  {member.acs}
                </div>
                <AcsInputDialog
                  gameUsername={member.gameUsername}
                  edit={true}
                />
              </div>
            </div>
          )
        } else
          return (
            <div key={idx} className="flex justify-between items-center">
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
              <div className="flex items-center space-x-4 p-2 w-full justify-end">
                <AcsInputDialog gameUsername={member.gameUsername} />
              </div>
            </div>
          )
      })}
    </>
  )
}

export default Member
