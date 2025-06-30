import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Usine A - IA & SaaS Factory | Construisons l\'IA qui change le monde',
  description: 'Rejoignez la communauté Usine A, le club des builders IA visionnaires qui créent des projets concrets pour changer le monde. SophIA, SaaS RH, et plus encore.',
  keywords: 'IA, Intelligence Artificielle, SaaS, Innovation, Together.AI, Builders, Communauté Tech',
  authors: [{ name: 'Usine A Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Usine A - IA & SaaS Factory',
    description: 'Construisons l\'IA qui change le monde',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Usine A - IA & SaaS Factory',
    description: 'Construisons l\'IA qui change le monde',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-dark-bg text-white antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg">
          {children}
        </div>
      </body>
    </html>
  )
} 