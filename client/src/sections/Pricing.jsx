import Reveal from '../components/Reveal'
const plans = [
  {
    name: 'START',
    label: 'Za male biznise',
    price: '149',
    description:
      'Jednostavan i profesionalan početak za firme kojima je potrebna jasna online prezentacija.',
    features: [
      'One-page web sajt',
      'Responsive dizajn',
      'Predstavljanje usluga',
      'Kontakt podaci',
      'Google Maps',
      'Osnovna SEO optimizacija',
    ],
    button: 'Izaberite START',
  },
  {
    name: 'BUSINESS',
    label: 'Najpopularniji izbor',
    price: '299',
    description:
      'Kompletna web prezentacija za firme koje žele ozbiljno i profesionalno online prisustvo.',
    features: [
      'Do 5 stranica',
      'Custom responsive dizajn',
      'Kontakt forma → email',
      'Galerija / reference',
      'Google Maps',
      'Osnovni SEO',
      'Google Analytics',
      'Društvene mreže',
    ],
    button: 'Izaberite BUSINESS',
    popular: true,
  },
  {
    name: 'PREMIUM',
    label: 'Za ozbiljnije projekte',
    price: '499',
    suffix: '+',
    description:
      'Naprednije rešenje za firme kojima je potrebno više funkcionalnosti i potpuno prilagođen pristup.',
    features: [
      '5+ stranica',
      'Potpuno custom dizajn',
      'Napredne funkcionalnosti',
      'Kontakt forme i integracije',
      'SEO setup',
      'Analytics & Search Console',
      'Optimizacija performansi',
      'Prioritetna podrška',
    ],
    button: 'Zatražite ponudu',
  },
]

function Pricing() {
  return (
    <Reveal>
    <section
      id="paketi"
      className="relative overflow-hidden border-t border-white/[0.06] py-28 sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19D3C5]/5 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#19D3C5]">
            Paketi i cene
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Jednostavno,
            <br />
            <span className="text-white/40">bez skrivenih troškova.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
            Izaberite paket koji odgovara vašim potrebama. Ako imate
            specifičan zahtev, napravićemo ponudu prilagođenu vašem projektu.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-20 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`group relative flex flex-col rounded-3xl border p-7 transition-all duration-500 sm:p-8 ${
                plan.popular
                  ? 'border-[#19D3C5]/40 bg-[#0D1516] shadow-[0_0_60px_rgba(25,211,197,0.07)] lg:-translate-y-3'
                  : 'border-white/[0.08] bg-[#0B0E10] hover:border-white/15 hover:bg-[#0D1113]'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <span className="whitespace-nowrap rounded-full border border-[#19D3C5]/30 bg-[#19D3C5] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#080A0C]">
                    Najpopularniji
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold tracking-[0.15em] ${
                      plan.popular
                        ? 'text-[#19D3C5]'
                        : 'text-white/40'
                    }`}
                  >
                    {plan.name}
                  </span>

                  <span className="text-[10px] text-white/25">
                    {plan.label}
                  </span>
                </div>

                {/* Price */}
                <div className="mt-8 flex items-end gap-1">
                  <span className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
                    {plan.price}
                  </span>

                  <span className="mb-2 text-xl font-medium text-white/50">
                    €{plan.suffix}
                  </span>
                </div>

                <p className="mt-5 min-h-[72px] text-sm leading-6 text-white/40">
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-white/[0.08]" />

              {/* Features */}
              <div className="flex-1">
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-white/25">
                  Paket uključuje
                </p>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/60"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.popular
                            ? 'bg-[#19D3C5]/10 text-[#19D3C5]'
                            : 'bg-white/[0.05] text-white/50'
                        }`}
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2.5 6L5 8.5L9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#kontakt"
                className={`mt-10 flex w-full items-center justify-center gap-3 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#19D3C5] text-[#080A0C] hover:bg-[#23E3D5] hover:shadow-[0_0_35px_rgba(25,211,197,0.18)]'
                    : 'border border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.06]'
                }`}
              >
                {plan.button}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="text-xs text-white/25">
            Svi paketi uključuju prilagođavanje mobilnim uređajima.
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

          <span className="text-xs text-white/25">
            Potrebna vam je drugačija funkcionalnost?
          </span>

          <a
            href="#kontakt"
            className="text-xs font-medium text-[#19D3C5] transition-colors hover:text-[#23E3D5]"
          >
            Razgovarajmo →
          </a>
        </div>
      </div>
    </section>
    </Reveal>
  )
}

export default Pricing