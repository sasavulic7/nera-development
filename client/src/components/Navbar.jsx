const navLinks = [
  { label: 'Usluge', href: '#usluge' },
  { label: 'Paketi', href: '#paketi' },
  { label: 'Kako radimo', href: '#proces' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 pt-5 lg:px-8">
        <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-[#080A0C]/75 px-5 backdrop-blur-xl">
          
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#19D3C5] text-sm font-black text-[#080A0C] transition-transform duration-300 group-hover:rotate-6">
              N
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">
              Dev<span className="text-[#19D3C5]">elopment</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/55 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#kontakt"
            className="hidden items-center gap-2 rounded-xl bg-[#19D3C5] px-4 py-2.5 text-sm font-semibold text-[#080A0C] transition-all duration-300 hover:bg-[#23E3D5] hover:shadow-[0_0_30px_rgba(25,211,197,0.2)] sm:flex"
          >
            Zatražite ponudu
            <span className="text-base">↗</span>
          </a>

          {/* Mobile menu button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
            aria-label="Otvori meni"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar