import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const PlayerStatInRow = () => {
  return (
    <Card className="lg:col-span-3 col-span-4">
      <>
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>우리 마을의 영웅</CardTitle>
          </div>
          <CardDescription>
            <div>컨텐츠 준비중...</div>
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </>
    </Card>
  )
}

export default PlayerStatInRow
