import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

/**
 * Root layout component for the Next.js App Router
 * This component wraps all pages and provides global layout structure
 */
export const metadata: Metadata = {
  title: 'Finful - Mainpage',
  description: 'Chinh phục căn nhà đầu tiên trong 1-3 năm với Finful',
  keywords: ['tài chính', 'mua nhà', 'kế hoạch tài chính', 'finful'],
  authors: [{ name: 'Finful Team' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico?v=2',
  },
}

/**
 * Root layout component
 * @param children - The page content to be rendered
 * @returns JSX element with HTML document structure
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        {children}
      </body>
    </html>
  )
}
