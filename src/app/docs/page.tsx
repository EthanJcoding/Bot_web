import { ChevronRightIcon } from '@radix-ui/react-icons'
import { cn } from '@/utils'

const docs = () => {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="relative overflow-hidden h-full py-6 pl-8 pr-6 lg:py-8">
        I am nav
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">
          <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
              Docs
            </div>
            <ChevronRightIcon className="h-4 w-4" />
            <div className="font-medium text-foreground">href</div>
          </div>
          <div className="space-y-2">
            <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
              I am title
            </h1>
            <p className="text-lg text-muted-foreground">summary</p>
            <div className="pb-12 pt-8">contents</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default docs
