import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'MD Interstate Moving — New Jersey & Interstate Movers',
  description: 'Direct movers. No Broker Fee. Same-day NJ moves and interstate delivery windows.',
  metadataBase: new URL('https://mdinterstatemoving.com'),
  openGraph: {
    title: 'MD Interstate Moving',
    description: 'Direct movers. No Broker Fee. Same-day NJ moves and interstate delivery windows.',
    url: 'https://mdinterstatemoving.com',
    siteName: 'MD Interstate Moving',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
