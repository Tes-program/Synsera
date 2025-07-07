import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { CursorProvider } from '@/components/providers/CursorProvider'
import { LoadingProvider } from '@/components/providers/LoadingProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Synsera - Tech & Design Agency',
  description: 'Award-winning tech and design agency creating exceptional digital experiences',
  keywords: ['tech agency', 'design agency', 'web development', 'digital design', 'creative agency'],
  authors: [{ name: 'Synsera Team' }],
  creator: 'Synsera',
  publisher: 'Synsera',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://synsera.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Synsera - Tech & Design Agency',
    description: 'Tech and design agency creating exceptional digital experiences',
    url: 'https://synsera.dev',
    siteName: 'Synsera',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Synsera Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synsera - Tech & Design Agency',
    description: 'Award-winning tech and design agency creating exceptional digital experiences',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <LoadingProvider>
          <SmoothScrollProvider>
            <CursorProvider>
              {children}
            </CursorProvider>
          </SmoothScrollProvider>
        </LoadingProvider>
      </body>
    </html>
  )
}