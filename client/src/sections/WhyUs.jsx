import Reveal from "../components/Reveal"

const benefits = [
  {
    number: '01',
    title: 'Prvi utisak je važan',
    description:
      'Vaš sajt je često prvo mesto na kojem potencijalni klijent upoznaje vaš biznis. Moderan i profesionalan izgled gradi poverenje pre prvog kontakta.',
  },
  {
    number: '02',
    title: 'Budite dostupni 24/7',
    description:
      'Vaša firma ne zatvara vrata kada se završi radno vreme. Klijenti mogu da pronađu vaše usluge, informacije i kontakt u bilo kom trenutku.',
  },
  {
    number: '03',
    title: 'Više poverenja',
    description:
      'Kvalitetna web prezentacija pokazuje da ozbiljno shvatate svoj posao i daje potencijalnim klijentima dodatni razlog da izaberu upravo vas.',
  },
  {
    number: '04',
    title: 'Lakši put do klijenta',
    description:
      'Jasne informacije, dobro organizovan sadržaj i jednostavan kontakt uklanjaju nepotrebne korake između posetioca i vašeg poslovanja.',
  },
]

function WhyUs() {
  return (
    <section
      id="zasto"
      className="relative overflow-hidden border-t border-white/[0.06] py-28 sm:py-36"
    >
      {/* Background decoration */}
      <Reveal>
      <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#19D3C5]/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#19D3C5]">
              Zašto sajt?
            </span>

            <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl">
              Nije samo
              <br />
              <span className="text-white/40">još jedan sajt.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-base leading-7 text-white/45 sm:text-lg">
              Dobar web sajt radi za vaš biznis i kada vi ne radite. Predstavlja
              vas, gradi poverenje i vodi potencijalnog klijenta od prvog
              pogleda do prvog kontakta.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-20 grid border-t border-white/[0.08] sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.number}
              className={`group relative py-10 ${
                index % 2 === 0
                  ? 'sm:border-r sm:border-white/[0.08] sm:pr-10'
                  : 'sm:pl-10'
              } ${
                index < 2
                  ? 'border-b border-white/[0.08]'
                  : ''
              }`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#19D3C5]/[0.035] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-xs text-[#19D3C5]/60">
                  {benefit.number}
                </span>

                <span className="text-white/10 transition-colors duration-300 group-hover:text-[#19D3C5]/30">
                  ↗
                </span>
              </div>

              <h3 className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {benefit.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/40">
                {benefit.description}
              </p>

              {/* Bottom line */}
              <div className="mt-8 h-px w-0 bg-[#19D3C5] transition-all duration-500 group-hover:w-12" />
            </article>
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  )
}

export default WhyUs