import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <p className="font-display text-4xl mb-3">DON&apos;T PANIC</p>
            <p className="section-label">Barber Shop · Mannheim</p>
          </div>

          <div>
            <p className="section-label mb-6">Navigation</p>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/galerie', label: 'Galerie' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#f5f5f5]/50 hover:text-[#f5f5f5] transition-colors uppercase tracking-widest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-6">Info</p>
            <address className="not-italic font-body text-sm text-[#f5f5f5]/60 leading-relaxed space-y-1">
              <p>Mollstraße 6, 68165 Mannheim</p>
              <p>Di–Fr: 9:30–19:00 Uhr</p>
              <p>Sa: 9:00–17:00 Uhr</p>
              <a
                href="https://www.instagram.com/dontpanicbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 hover:text-[#f5f5f5] transition-colors"
              >
                @dontpanicbarber
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-[#f5f5f5]/30 uppercase tracking-widest">
            © 2025 Don&apos;t Panic Barber Shop
          </p>
          <p className="font-body text-xs text-[#f5f5f5]/30 uppercase tracking-widest">
            Mannheim
          </p>
        </div>
      </div>
    </footer>
  )
}
