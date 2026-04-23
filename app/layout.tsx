import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Barber',
  name: "Don't Panic Barber Shop",
  description: 'Professionelle Haarschnitte und Bartpflege in Mannheim',
  url: 'https://dontpanicbarber.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mollstraße 6',
    addressLocality: 'Mannheim',
    postalCode: '68165',
    addressCountry: 'DE',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:30',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  sameAs: ['https://www.instagram.com/dontpanicbarber'],
  priceRange: '€€',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://dontpanicbarber.de'),
  title: {
    default: "Don't Panic Barber Shop Mannheim – Dein Barbershop in der Innenstadt",
    template: "%s | Don't Panic Barber Shop Mannheim",
  },
  description:
    "Don't Panic Barber Shop in Mannheim – professionelle Haarschnitte, Bartpflege und klassische Rasuren. Mollstraße 6, 68165 Mannheim. Di–Fr 9:30–19:00, Sa 9:00–17:00.",
  keywords: [
    'Barbershop Mannheim',
    'Barber Mannheim',
    'Haarschnitt Mannheim',
    "Don't Panic Barber",
    'Bartpflege Mannheim',
    'Friseur Mannheim Innenstadt',
    'Barbershop Mollstraße',
    'Haarschnitt 68165',
  ],
  openGraph: {
    title: "Don't Panic Barber Shop Mannheim",
    description:
      'Professionelle Haarschnitte & Bartpflege in Mannheim. Mollstraße 6 – einfach vorbeikommen.',
    url: 'https://dontpanicbarber.de',
    siteName: "Don't Panic Barber Shop",
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Don't Panic Barber Shop Mannheim",
    description:
      'Professionelle Haarschnitte & Bartpflege in Mannheim. Mollstraße 6 – einfach vorbeikommen.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://dontpanicbarber.de' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f5f5f5] font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
