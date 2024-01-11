import { Skeleton } from '@/components/ui/skeleton'

const ManagerSkeleton = () => {
  function generateSkeletons() {
    const skeletons = []

    for (let i = 0; i < 5; i++) {
      skeletons.push(
        <div key={i} className="flex justify-between items-center">
          <div className="flex items-center">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="ml-4 space-y-1">
              <Skeleton className="w-[50px] h-4" />
              <Skeleton className="w-[100px] h-4" />
            </div>
          </div>
          <Skeleton className="w-10 h-10" />
        </div>,
      )
    }

    return skeletons
  }
  return (
    <>
      <div className="space-y-8 w-full">
        <div className="text-sm text-muted-foreground">
          <Skeleton className="w-[140px] h-4" />
        </div>
        <>{generateSkeletons()}</>
      </div>
      <div className="flex items-center w-full justify-center">vs</div>
      <div className="space-y-8 w-full">
        <div className="text-sm text-muted-foreground">
          <Skeleton className="w-[140px] h-4" />
        </div>
        <>{generateSkeletons()}</>
      </div>
    </>
  )
}

export default ManagerSkeleton
