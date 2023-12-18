'use client'

import Lottie from 'react-lottie-player'
import lottieJson from '../../../public/landingAnimation.json'
import Link from 'next/link'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

const LandingPage = () => {
  return (
    <section>
      <div className="my-16 overflow-hidden rounded-[0.5rem] ">
        <div className="flex items-center justify-center lg:h-[750px] flex-col lg:flex-row">
          <Lottie loop animationData={lottieJson} play />
          <div className="lg:absolute lg:flex-row flex  text-primary space-x-14 ">
            <div className="flex items-center p-4 hover:bg-secondary rounded-lg">
              <Link href="docs">Document</Link>
              <ArrowTopRightIcon className="ml-2" />
            </div>
            <div className="flex items-center p-4 hover:bg-secondary rounded-lg">
              <Link
                href="https://discord.com/api/oauth2/authorize?client_id=1164492662435483711&permissions=8&scope=bot"
                target="blank"
                rel="noopener noreferrer"
              >
                Add bot to Channel
              </Link>
              <ArrowTopRightIcon className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
