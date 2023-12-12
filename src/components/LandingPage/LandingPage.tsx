'use client'

import Lottie from 'react-lottie-player'
import lottieJson from '../../../public/landingAnimation.json'
import { Button } from '../ui/button'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <section>
      <div className="my-16 overflow-hidden rounded-[0.5rem] ">
        <div className="flex">
          <div className="w-1/4 flex lg:flex-col flex-row justify-end space-y-4">
            <Button>Document</Button>
            <Button>
              <Link
                href="https://discord.com/api/oauth2/authorize?client_id=1164492662435483711&permissions=8&scope=bot"
                target="blank"
                rel="noopener noreferrer"
              >
                Add bot to Channel
              </Link>
            </Button>
          </div>
          <Lottie
            className="flex relative"
            loop
            animationData={lottieJson}
            play
          />
        </div>
      </div>
    </section>
  )
}

export default LandingPage
