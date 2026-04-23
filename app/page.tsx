import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Marquee from '@/components/ui/Marquee'
import About from '@/components/home/About'
import ServicesPreview from '@/components/home/ServicesPreview'
import GalleryTeaser from '@/components/home/GalleryTeaser'
import CTA from '@/components/home/CTA'

export const metadata: Metadata = {
  alternates: { canonical: 'https://dontpanicbarber.de' },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <ServicesPreview />
      <GalleryTeaser />
      <CTA />
    </>
  )
}
