import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

const repoOwner = process.env.GITHUB_REPOSITORY?.split('/')[0] ?? ''
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const logoPath = `${basePath}/Logo.png`
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (repoOwner ? `https://${repoOwner}.github.io` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Cendrix Group — Enterprise Healthcare & Legal Workforce Solutions',
  description: 'Dedicated Healthcare Operations Specialists and Legal Process Outsourcing professionals. HIPAA compliant, GDPR aligned. Serving medical practices and law firms across the US & UK.',
  keywords: 'healthcare workforce, legal process outsourcing, LPO, HIPAA compliant, medical billing, legal support, enterprise staffing',
  icons: {
    icon: logoPath,
    apple: logoPath,
  },
  openGraph: {
    title: 'Cendrix Group — Enterprise Workforce Solutions',
    description: 'Scale your practice with trained healthcare and legal professionals. HIPAA compliant. GDPR aligned.',
    type: 'website',
    images: [logoPath],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
