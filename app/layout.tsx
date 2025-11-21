import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Last Chance: Creative AI Etsy Conversion Vault - $27',
  description: 'Before you join the 3-day challenge, grab Bailey\'s best-converting Etsy templates, thumbnails, and frameworks for just $27. This offer won\'t show again.',
  keywords: 'Etsy templates, Etsy conversion, listing optimization, Etsy thumbnails, digital products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
