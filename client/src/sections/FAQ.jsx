import Reveal from '../components/Reveal'
import { useState } from 'react'

const faqs = [
  {
    question: 'Koliko košta izrada web sajta?',
    answer:
      'Cena zavisi od obima i funkcionalnosti projekta. Naši osnovni paketi počinju od 149 €, dok za kompleksnije projekte pravimo ponudu prema konkretnim potrebama.',
  },
  {
    question: 'Koliko traje izrada sajta?',
    answer:
      'Jednostavan one-page sajt može biti završen za nekoliko dana, dok veći projekti zahtevaju više vremena. Pre početka projekta dogovaramo okvirni rok i držimo vas informisanim tokom celog procesa.',
  },
  {
    question: 'Da li sajt radi na telefonu i tabletu?',
    answer:
      'Da. Svaki sajt koji razvijamo je responsive i prilagođen različitim veličinama ekrana — od mobilnih telefona do velikih desktop monitora.',
  },
  {
    question: 'Da li mogu da koristim svoj domen?',
    answer:
      'Naravno. Ako već imate domen, možemo povezati novi sajt sa njim. Ako nemate domen, možemo pomoći oko registracije i podešavanja.',
  },
  {
    question: 'Da li je hosting uključen u cenu?',
    answer:
      'Hosting zavisi od izabranog paketa i potreba projekta. Možemo organizovati kompletno postavljanje sajta na hosting ili raditi sa hostingom koji već koristite.',
  },
  {
    question: 'Šta ako mi kasnije trebaju izmene?',
    answer:
      'Nema problema. Nakon lansiranja možemo nastaviti da održavamo i unapređujemo vaš sajt. Za manje izmene možemo dogovoriti jednokratnu cenu ili paket održavanja.',
  },
  {
    question: 'Da li radite SEO optimizaciju?',
    answer:
      'Da. Osnovna tehnička SEO optimizacija je uključena u naše Business i Premium pakete. Za ozbiljnije SEO kampanje možemo napraviti posebno prilagođenu ponudu.',
  },
  {
    question: 'Kako mogu da započnem projekat?',
    answer:
      'Jednostavno. Pošaljite nam upit putem kontakt forme i opišite šta vam je potrebno. Javićemo vam se kako bismo razgovarali o projektu i pripremili ponudu.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Reveal>
    <section
      id="faq"
      className="relative overflow-hidden border-t border-white/[0.06] py-28 sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-15%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#19D3C5]/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Layout */}
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

          {/* Left */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#19D3C5]">
              FAQ
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl">
              Imate
              <br />
              <span className="text-white/40">pitanje?</span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-6 text-white/40 sm:text-base">
              Odgovorili smo na neka od najčešćih pitanja. Ako ne pronađete
              ono što tražite, slobodno nam se javite.
            </p>

            <a
              href="#kontakt"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#19D3C5]"
            >
              Postavite nam pitanje

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Right — accordion */}
          <div className="border-t border-white/[0.08]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={faq.question}
                  className="border-b border-white/[0.08]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-5">
                      <span
                        className={`pt-0.5 font-mono text-xs transition-colors duration-300 ${
                          isOpen
                            ? 'text-[#19D3C5]'
                            : 'text-white/20'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span
                        className={`text-base font-medium transition-colors duration-300 sm:text-lg ${
                          isOpen
                            ? 'text-white'
                            : 'text-white/60 group-hover:text-white'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Plus / minus */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 border-[#19D3C5]/30 bg-[#19D3C5]/10 text-[#19D3C5]'
                          : 'border-white/10 text-white/30 group-hover:border-white/20 group-hover:text-white/60'
                      }`}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <path
                          d="M6.5 2V11M2 6.5H11"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-7 pl-10 text-sm leading-7 text-white/40 sm:pl-[3.25rem] sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  )
}

export default FAQ