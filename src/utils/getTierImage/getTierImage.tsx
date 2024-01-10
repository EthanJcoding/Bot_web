import {
  tierList,
  unranked,
} from '@/components/GameDashboard/elements/TierList/tierConst'

const getTierImage = (targetTier: string) => {
  // tierList 배열을 순회하면서 해당 tier 값을 찾고 이미지 주소를 반환
  for (const tierGroup of tierList) {
    for (const segment of tierGroup.segments) {
      // 찾은 경우 해당 이미지 주소 반환
      if (segment.tier === targetTier) {
        return segment.image
      }
    }
  }
  return unranked
}

export default getTierImage
