import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { UsersIcon } from 'lucide-react'

interface ScheduledGamesProps {
  futureGamesNumber: number
}

const ScheduledGames = ({ futureGamesNumber }: ScheduledGamesProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">예정된 내전</CardTitle>
        <UsersIcon />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{futureGamesNumber}</div>
      </CardContent>
    </Card>
  )
}

export default ScheduledGames
