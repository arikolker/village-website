import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Village Consulting, LLC',
  description: 'Acquisition IT Integration & Enterprise Transformation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-white to-neutral-50 text-neutral-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}

