import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import ThemeProvider from '@/utils/providers/ThemeProvider'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const noto = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '준일의 내전봇',
  description: '준일의 내전봇',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${noto.className}`}>
        <ThemeProvider defaultTheme="system" attribute="class">
          <main className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">
              <div className="container relative">{children}</div>
            </div>
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
