// type imports
import type { Metadata } from 'next'

// named imports
import { Inter } from 'next/font/google'

// style imports
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fundamentals-Next.js',
  description: 'Fundamentals in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
