import { useRecoilState } from 'recoil'
import { dragDropMemberState } from '@/recoil'
import { Interfaces } from '@/utils'
import MemberColumn from './MemberColumn'

const DragDropColumns = () => {
  const [rounds, setRounds] = useRecoilState(dragDropMemberState)
  const currentRound =
    Object.keys(rounds).find((key) => rounds[key].hasSelected) ??
    Object.keys(rounds)[0]

  const handleOnDrag = (e: React.DragEvent, member: Interfaces.Member) => {
    const memberJSON = JSON.stringify(member)
    if (memberJSON) {
      e.dataTransfer.setData('member', memberJSON)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleOnDrop = (
    e: React.DragEvent,
    targetTeam: 'members' | 'teamA' | 'teamB',
  ) => {
    e.preventDefault()

    const calculateUpdatedAvgAcs = (team: Interfaces.Member[]) => {
      const totalAcs = team.reduce((total, member) => total + member.acs, 0)
      return team.length > 0 ? totalAcs / team.length : 0
    }

    const member = JSON.parse(e.dataTransfer.getData('member'))
    const round = rounds[currentRound]

    const updateRound = (
      updatedMembers: Interfaces.Member[],
      updatedTeamA: Interfaces.Member[],
      updatedTeamB: Interfaces.Member[],
    ) => {
      const updatedAvgAcsTeamA = calculateUpdatedAvgAcs(updatedTeamA)
      const updatedAvgAcsTeamB = calculateUpdatedAvgAcs(updatedTeamB)

      const updatedRounds = {
        ...rounds,
        [currentRound]: {
          ...round,
          allMembers: updatedMembers,
          teamA: updatedTeamA,
          teamB: updatedTeamB,
          avgAcsTeamA: updatedAvgAcsTeamA,
          avgAcsTeamB: updatedAvgAcsTeamB,
        },
      }

      setRounds(updatedRounds)
    }

    switch (targetTeam) {
      case 'teamA':
        if (
          !round.teamA.some((m) => m.gameUsername === member.gameUsername) &&
          round.teamA.length < 5
        ) {
          const updatedMembers = round.allMembers.filter(
            (m) => m.gameUsername !== member.gameUsername,
          )
          const updatedTeamA = [...round.teamA, member]
          const updatedTeamB = round.teamB.filter(
            (m) => m.gameUsername !== member.gameUsername,
          )
          updateRound(updatedMembers, updatedTeamA, updatedTeamB)
        }
        break

      case 'teamB':
        if (
          !round.teamB.some((m) => m.gameUsername === member.gameUsername) &&
          round.teamB.length < 5
        ) {
          const updatedMembers = round.allMembers.filter(
            (m) => m.gameUsername !== member.gameUsername,
          )
          const updatedTeamA = round.teamA.filter(
            (m) => m.gameUsername !== member.gameUsername,
          )
          const updatedTeamB = [...round.teamB, member]
          updateRound(updatedMembers, updatedTeamA, updatedTeamB)
        }
        break

      case 'members':
        if (
          !round.allMembers.some((m) => m.gameUsername === member.gameUsername)
        ) {
          const updatedMembers = [...round.allMembers, member]
          const updatedTeamA = round.teamA.filter(
            (m) => m.gameUsername !== member.gameUsername,
          )
          const updatedTeamB = round.teamB.filter(
            (m) => m.gameUsername !== member.gameUsername,
          )
          updateRound(updatedMembers, updatedTeamA, updatedTeamB)
        }
        break
    }
  }

  return (
    <>
      <MemberColumn
        team={rounds[currentRound].allMembers}
        onDrop={(e) => handleOnDrop(e, 'members')}
        onDragOver={handleDragOver}
        onDrag={handleOnDrag}
        title="Members"
      />
      <MemberColumn
        team={rounds[currentRound].teamA}
        onDrop={(e) => handleOnDrop(e, 'teamA')}
        onDragOver={handleDragOver}
        onDrag={handleOnDrag}
        title="Team A"
        avgAcs={rounds[currentRound].avgAcsTeamA}
      />
      <MemberColumn
        team={rounds[currentRound]?.teamB}
        onDrop={(e) => handleOnDrop(e, 'teamB')}
        onDragOver={handleDragOver}
        onDrag={handleOnDrag}
        title="Team B"
        avgAcs={rounds[currentRound].avgAcsTeamB}
      />
    </>
  )
}

export default DragDropColumns
