import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Cyberpunk Bookstore',
  description: 'Terms and conditions, shipping policy, returns policy, and privacy policy for Cyberpunk Bookstore.',
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

