import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ManagerSkeleton from './ManagerSkeleton'
import TeamRenderer from './TeamRenderer'

interface BalanceManagerCardProps {
  isLoading: boolean
}

const BalanceManagerCard = ({ isLoading }: BalanceManagerCardProps) => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>팀빌딩 매니저</CardTitle>
        <CardDescription>
          acs를 기반으로 자동으로 팀을 짜봤어요 🤔
        </CardDescription>
      </CardHeader>
      {isLoading ? (
        <CardContent className="flex justify-between w-full">
          <ManagerSkeleton />
        </CardContent>
      ) : (
        <CardContent className="flex justify-between w-full">
          <TeamRenderer />
        </CardContent>
      )}
    </Card>
  )
}

export default BalanceManagerCard
