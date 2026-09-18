const footerLinks = [
  { label: 'Usluge', href: '#usluge' },
  { label: 'Paketi', href: '#paketi' },
  { label: 'Proces', href: '#proces' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
]

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#060708]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Top */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <a
            href="#"
            className="group flex w-fit items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#19D3C5] text-sm font-black text-[#080A0C] transition-transform duration-300 group-hover:rotate-6">
              N
            </div>

            <span className="text-sm font-semibold tracking-tight text-white">
              Dev<span className="text-[#19D3C5]">elopment</span>
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-white/35 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[10px] text-white/20 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © {new Date().getFullYear()} Nera Development. Sva prava zadržana.
          </span>

          <span>
            Dizajn & razvoj sa pažnjom.
          </span>

        </div>
      </div>
    </footer>
  )
}

export default Footer