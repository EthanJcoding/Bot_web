import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const MemberSkeleton = () => {
  function generateSkeletons() {
    const skeletons = []

    for (let i = 0; i < 11; i++) {
      skeletons.push(
        <div key={i} className="flex justify-between items-center">
          <div className="flex items-center h-[74px]">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="ml-4 p-4 space-y-2">
              <Skeleton className="w-[50px] h-4" />
              <Skeleton className="w-[160px] h-4" />
            </div>
          </div>
          <Skeleton className="w-[126px] h-4 p-2" />
        </div>,
      )
    }

    return skeletons
  }

  return <>{generateSkeletons()}</>
}

export default MemberSkeleton
