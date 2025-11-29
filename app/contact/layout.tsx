import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Cyberpunk Bookstore',
  description: 'Get in touch with Cyberpunk Bookstore. Have a question? We\'d love to hear from you.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

