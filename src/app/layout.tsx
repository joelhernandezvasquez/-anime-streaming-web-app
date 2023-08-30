import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import { Providers } from '@/store/Providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home Anime web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Providers>
       {children}
       </Providers>
       </body>
    </html>
  )
}
