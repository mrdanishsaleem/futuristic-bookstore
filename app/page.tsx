import { Metadata } from 'next'
import Hero from '@/components/Hero'
import NewArrivals from '@/components/NewArrivals'
import FeaturedGenres from '@/components/FeaturedGenres'
import Bestsellers from '@/components/Bestsellers'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
  title: 'Cyberpunk Bookstore | The Future of Reading',
  description: 'Experience the bookstore of 2050. Browse thousands of books with cutting-edge technology, neon aesthetics, and seamless shopping.',
  openGraph: {
    title: 'Cyberpunk Bookstore | The Future of Reading',
    description: 'Experience the bookstore of 2050. Browse thousands of books with cutting-edge technology.',
    type: 'website',
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BookStore',
    name: 'Cyberpunk Bookstore',
    description: 'The bookstore of 2050. Experience the future of reading.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://cyberbooks.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <NewArrivals />
      <FeaturedGenres />
      <Bestsellers />
      <Newsletter />
    </>
  )
}

