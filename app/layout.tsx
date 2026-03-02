import type { Metadata } from 'next'
import { Noto_Sans_JP, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
  preload: false,
})

const inter = Inter({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: 'Atelier Air — 建築設計事務所',
  description: '空気のように、静かに、確かに。建築設計事務所 Atelier Air。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans font-light">{children}</body>
    </html>
  )
}
