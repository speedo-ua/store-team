import TheHeader  from '@/components/Blocks/TheHeader'
// import './globals.css'
import './css/main.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TheFooter from '@/components/Blocks/TheFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Team progect',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader/>
          <main className={inter.className}><div className="main-layout">{children}</div></main>
        <TheFooter/>
      </body>
    </html>
  )
}
