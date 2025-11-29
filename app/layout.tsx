import type { Metadata } from 'next'
import { Orbitron, Space_Grotesk, Unica_One } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
})

const unicaOne = Unica_One({
  subsets: ['latin'],
  variable: '--font-unica',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Cyberpunk Bookstore | The Future of Reading',
  description: 'Experience the bookstore of 2050. Browse thousands of books with cutting-edge technology, neon aesthetics, and seamless shopping.',
  keywords: 'bookstore, books, online bookstore, cyberpunk, futuristic, reading, literature',
  authors: [{ name: 'Cyberpunk Bookstore' }],
  openGraph: {
    title: 'Cyberpunk Bookstore | The Future of Reading',
    description: 'Experience the bookstore of 2050. Browse thousands of books with cutting-edge technology.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cyberpunk Bookstore',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyberpunk Bookstore | The Future of Reading',
    description: 'Experience the bookstore of 2050.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable} ${unicaOne.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ParticleBackground />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

