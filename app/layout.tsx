import { Analytics } from '@vercel/analytics/next'
import { Bebas_Neue, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { navidad } from '@/data/navidad'
import { MusicaFondo } from '@/components/MusicaFondo'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' })

export const metadata: Metadata = {
  title: `${navidad.title} — Serie original familiar`,
  description: 'Una historia familiar de tradiciones, risas y recuerdos.',
  icons: {
    icon: '/family/tree.svg',
    apple: '/family/tree.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#081a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${bebas.variable}`}>
        {children}
        <MusicaFondo />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
