import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(201,160,122,0.2)', background: '#0a0a0a' }}>
      {/* Thin amber top line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A07A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <p className="font-display text-4xl mb-2 hover:text-[#C9A07A] transition-colors cursor-default">
              DON&apos;T PANIC
            </p>
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
                    className="font-body text-sm text-[#f0ece4]/45 hover:text-[#C9A07A] transition-colors uppercase tracking-widest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-6">Info</p>
            <address className="not-italic font-body text-sm text-[#f0ece4]/50 leading-relaxed space-y-1">
              <p>Mollstraße 6, 68165 Mannheim</p>
              <p>Di–Fr: 9:30–19:00 Uhr</p>
              <p>Sa: 9:00–17:00 Uhr</p>
              <a
                href="https://www.instagram.com/dontpanicbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 hover:text-[#C9A07A] transition-colors"
              >
                @dontpanicbarber
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(201,160,122,0.1)' }}
        >
          <p className="font-body text-xs text-[#f0ece4]/25 uppercase tracking-widest">
            © 2025 Don&apos;t Panic Barber Shop
          </p>
          <p className="font-body text-xs text-[#C9A07A]/40 uppercase tracking-widest">
            Mannheim
          </p>
        </div>
      </div>
    </footer>
  )
}
