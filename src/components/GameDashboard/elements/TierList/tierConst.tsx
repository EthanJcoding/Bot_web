import iron1 from '../../../../../public/rank/Iron_1_Rank.png'
import iron2 from '../../../../../public/rank/Iron_2_Rank.png'
import iron3 from '../../../../../public/rank/Iron_3_Rank.png'
import bronze1 from '../../../../../public/rank/Bronze_1_Rank.png'
import bronze2 from '../../../../../public/rank/Bronze_2_Rank.png'
import bronze3 from '../../../../../public/rank/Bronze_3_Rank.png'
import silver1 from '../../../../../public/rank/Silver_1_Rank.png'
import silver2 from '../../../../../public/rank/Silver_2_Rank.png'
import silver3 from '../../../../../public/rank/Silver_3_Rank.png'
import gold1 from '../../../../../public/rank/Gold_1_Rank.png'
import gold2 from '../../../../../public/rank/Gold_2_Rank.png'
import gold3 from '../../../../../public/rank/Gold_3_Rank.png'
import platinum1 from '../../../../../public/rank/Platinum_1_Rank.png'
import platinum2 from '../../../../../public/rank/Platinum_2_Rank.png'
import platinum3 from '../../../../../public/rank/Platinum_3_Rank.png'
import diamond1 from '../../../../../public/rank/Diamond_1_Rank.png'
import diamond2 from '../../../../../public/rank/Diamond_2_Rank.png'
import diamond3 from '../../../../../public/rank/Diamond_3_Rank.png'
import ascendant1 from '../../../../../public/rank/Ascendant_1_Rank.png'
import ascendant2 from '../../../../../public/rank/Ascendant_2_Rank.png'
import ascendant3 from '../../../../../public/rank/Ascendant_3_Rank.png'
import immortal1 from '../../../../../public/rank/Immortal_1_Rank.png'
import immortal2 from '../../../../../public/rank/Immortal_2_Rank.png'
import immortal3 from '../../../../../public/rank/Immortal_3_Rank.png'
import radiant from '../../../../../public/rank/Radiant_Rank.png'
import unranked from '../../../../../public/rank/Unranked.png'

const tierList = [
  {
    tier: '언랭',
    segments: [{ tier: '언랭 ', image: unranked }],
  },
  {
    tier: '아이언',
    segments: [
      { tier: '아이언 1', image: iron1 },
      { tier: '아이언 2', image: iron2 },
      { tier: '아이언 3', image: iron3 },
    ],
  },
  {
    tier: '브론즈',
    segments: [
      { tier: '브론즈 1', image: bronze1 },
      { tier: '브론즈 2', image: bronze2 },
      { tier: '브론즈 3', image: bronze3 },
    ],
  },
  {
    tier: '실버',
    segments: [
      { tier: '실버 1', image: silver1 },
      { tier: '실버 2', image: silver2 },
      { tier: '실버 3', image: silver3 },
    ],
  },
  {
    tier: '골드',
    segments: [
      { tier: '골드 1', image: gold1 },
      { tier: '골드 2', image: gold2 },
      { tier: '골드 3', image: gold3 },
    ],
  },
  {
    tier: '플래티넘',
    segments: [
      { tier: '플래티넘 1', image: platinum1 },
      { tier: '플래티넘 2', image: platinum2 },
      { tier: '플래티넘 3', image: platinum3 },
    ],
  },
  {
    tier: '다이아몬드',
    segments: [
      { tier: '다이아몬드 1', image: diamond1 },
      { tier: '다이아몬드 2', image: diamond2 },
      { tier: '다이아몬드 3', image: diamond3 },
    ],
  },
  {
    tier: '초월자',
    segments: [
      { tier: '초월자 1', image: ascendant1 },
      { tier: '초월자 2', image: ascendant2 },
      { tier: '초월자 3', image: ascendant3 },
    ],
  },
  {
    tier: '불멸',
    segments: [
      { tier: '불멸 1', image: immortal1 },
      { tier: '불멸 2', image: immortal2 },
      { tier: '불멸 3', image: immortal3 },
    ],
  },
  {
    tier: '레디언트',
    segments: [{ tier: '레디언트 ', image: radiant }],
  },
]

export { unranked, tierList }
