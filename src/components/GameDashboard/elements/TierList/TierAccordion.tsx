// 'use client'

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion'
// import { tierList } from './tierConst'
// import Image from 'next/image'

// interface TierAccordionProps {
//   selectedTier: string
//   setSelectedTier: (tier: string) => void
// }

// const TierAccordion = ({
//   selectedTier,
//   setSelectedTier,
// }: TierAccordionProps) => {
//   const handleTierClick = (tier: string) => {
//     setSelectedTier(tier)
//   }

//   return (
//     <Accordion type="single" collapsible className="">
//       {tierList.map((tier, idx) => (
//         <AccordionItem value={`item-${idx}`} key={idx}>
//           <AccordionTrigger>{tier.tier}</AccordionTrigger>
//           <div className="w-full flex ">
//             {tier.segments.map((segment, idx) => (
//               <AccordionContent key={idx}>
//                 <button
//                   className={`${
//                     selectedTier === segment.tier
//                       ? 'bg-accent'
//                       : 'hover:bg-accent'
//                   } transition-colors p-2 rounded-xl hover:text-foreground/80 active:scale-95 ease-in-out duration-200`}
//                   onClick={() => handleTierClick(segment.tier)}
//                 >
//                   <Image
//                     src={segment.image}
//                     alt="tier image"
//                     className="w-16"
//                   />
//                 </button>
//               </AccordionContent>
//             ))}
//           </div>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   )
// }

// export default TierAccordion
