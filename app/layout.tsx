import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Documentazione Workflow Automation | Make & n8n',
  description: 'Documentazione completa dei workflow di automazione marketing con Make e n8n per Maffioletti Srl',
  keywords: 'automation, workflow, make, n8n, marketing, ATEX, B2B, generazione contenuti',
  authors: [{ name: 'BA Mohamet' }],
  openGraph: {
    title: 'Documentazione Workflow Automation',
    description: 'Automazione Marketing B2B con Make e n8n',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  )
}