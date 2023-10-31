import usePreprocess from '@/hooks/usePreprocess/usePreprocess'
import dayjs from 'dayjs'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '../../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs'
import Upcoming from '../elements/Upcoming'
import AcsOrder from '../elements/AcsOrder'
import Link from 'next/link'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

interface ContentsForDashboardProps {
  name: string
  guildId: string
  games: {
    [key: string]: {
      createdBy: string
      date: string
      isActive: boolean
      gameId: string
      members: Array<{
        gameUsername: string
        joinedAt: string
        user: string
        avatar: string
      }>
    }
  }
}

const ContentsForDashboard = ({
  name,
  games,
  guildId,
}: ContentsForDashboardProps) => {
  const {
    nearestGame,
    pastGamesCount,
    futureGamesCount,
    totalParticipants,
    gameId,
  } = usePreprocess(games)

  if (name && games) {
    return (
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-3xl font-bold tracking-tight w-full">
            {name} 채널의 대쉬보드입니다 👋
          </h2>
          <div />
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="statistcs">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="hover:bg-accent transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        예정된 내전
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {futureGamesCount}
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">
                        {futureGamesCount
                          ? '내전 대기중'
                          : '현재 예정된 내전이 없어요'}
                      </h4>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="hover:bg-accent transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        진행한 내전
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{pastGamesCount}</div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    hi
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">hi</div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="hover:bg-accent transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        내전에 참여한 인원
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {totalParticipants}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        +19% from last month
                      </p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    hi
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">hi</div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="hover:bg-accent transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        내전 달력
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+573</div>
                      <p className="text-xs text-muted-foreground">
                        +201 since last hour
                      </p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    hi
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">hi</div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                {nearestGame ? (
                  <>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle>다가오는 내전</CardTitle>
                        <Link href={`${guildId}/games/${gameId}`}>
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
                      <Upcoming members={nearestGame.members} />
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
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>내전 최강자</CardTitle>
                  <CardDescription>
                    13번의 내전을 진행하며 하이앳님이 가장 높은 acs 지표를
                    보여주셨어요!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AcsOrder />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="statistcs" className="space-y-4">
            <div>hi this is statistcs</div>
          </TabsContent>
        </Tabs>
      </div>
    )
  } else null
}

export default ContentsForDashboard
