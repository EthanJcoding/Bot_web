'use client'

import Link from 'next/link'
import ModeToggle from './ui/toggle'
import { cn } from '@/utils'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              준일의 내전봇
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/docs"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              Document
            </Link>
            <Link
              href="https://discord.com/api/oauth2/authorize?client_id=1164492662435483711&permissions=8&scope=bot"
              target="blank"
              rel="noopener noreferrer"
              className={cn(
                'transition-colors hover:text-foreground/80 text-foreground/60',
              )}
            >
              Bot
            </Link>
            <Link
              href="/guilds/1163455140351717469/games/-NktFxho_aFaFvXxAyF3"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname?.startsWith(
                  '/guilds/1163455140351717469/games/-NktFxho_aFaFvXxAyF3',
                )
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              Playground
            </Link>
            <Link
              href="https://github.com/EthanJcoding/Bot_web"
              className={cn(
                'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block',
              )}
            >
              Github
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
