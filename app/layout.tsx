import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Machine Learning Hindi - Visual Guide',
  description: 'Machine Learning ko seekhiye Hindi mein - Beginners ke liye visual guide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
