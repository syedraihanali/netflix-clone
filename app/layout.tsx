import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Netflix Clone',
  description: 'An under-development Netflix-Clone app for watching movies and series',
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
