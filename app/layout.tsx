import { TheHeader } from '@/components/TheHeader'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TheFooter } from '@/components/TheFooter'

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
          <main className={inter.className}>{children}</main>
        <TheFooter/>
      </body>
    </html>
  )
}
