import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Cyberpunk Bookstore',
  description: 'Learn about Cyberpunk Bookstore - the future of reading. Our mission, values, and commitment to bringing you the best books.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

