'use client'

import { RecoilRoot } from 'recoil'
import PlayerRoster from './PlayerRoster'
import { Interfaces } from '@/utils'

interface RosterRootProps {
  gameId: string
  guildId: string
  roundInfo: Interfaces.RoundInfo
  members: Interfaces.Member[]
}

const RosterRoot = ({
  gameId,
  guildId,
  roundInfo,
  members,
}: RosterRootProps) => {
  return (
    <RecoilRoot>
      <PlayerRoster
        gameId={gameId}
        guildId={guildId}
        roundInfo={roundInfo}
        members={members}
      />
    </RecoilRoot>
  )
}

export default RosterRoot
