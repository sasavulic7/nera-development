import { useState } from 'react'

const projectTypes = [
  'One-page sajt',
  'Više stranica',
  'Web prodavnica',
  'Web aplikacija',
  'Nisam siguran',
]

const budgets = [
  'Do 200 €',
  '200 – 500 €',
  '500 – 1.000 €',
  '1.000 €+',
  'Nisam siguran',
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('http://localhost:5041/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
    }

    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      projectType: '',
      budget: '',
      message: '',
    })
  } catch (error) {
    console.error('Error submitting form:', error)
    }
  }

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-white/[0.06]"
    >
      {/* =====================================================
          CTA
      ====================================================== */}

      <div className="relative overflow-hidden py-28 sm:py-36">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19D3C5]/10 blur-[170px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#19D3C5]">
            Hajde da radimo zajedno
          </span>

          <h2 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
            Imate ideju?
            <br />
            <span className="text-white/35">
              Pretvorimo je u sajt.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/40 sm:text-lg">
            Recite nam ukratko šta vam je potrebno. Javićemo vam se,
            prodiskutovati projekat i zajedno pronaći najbolje rešenje.
          </p>

        </div>
      </div>

      {/* =====================================================
          CONTACT FORM
      ====================================================== */}

      <div className="border-t border-white/[0.06] py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            {/* Left information */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#19D3C5]">
                Kontakt
              </span>

              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Hajde da razgovaramo.
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/40 sm:text-base">
                Ne morate imati precizno definisan projekat. Dovoljno je da
                nam kažete šta želite da postignete, a mi ćemo vam pomoći da
                definišemo sledeći korak.
              </p>

              {/* Contact info */}
              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-[#19D3C5]">
                    @
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/25">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      hello@neradevelopment.rs
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-[#19D3C5]">
                    ↗
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/25">
                      Odgovaramo
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      U najkraćem mogućem roku
                    </p>
                  </div>
                </div>

              </div>

              {/* Small note */}
              <div className="mt-12 rounded-2xl border border-[#19D3C5]/10 bg-[#19D3C5]/[0.025] p-5">
                <div className="flex gap-3">
                  <span className="mt-0.5 text-[#19D3C5]">
                    ✦
                  </span>

                  <p className="text-xs leading-5 text-white/35">
                    Besplatna konsultacija je uključena za svaki novi projekat.
                    Nema obaveze da nakon razgovora započnete saradnju.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-[#19D3C5]/20 bg-[#0C1415] p-8 text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#19D3C5]/10 text-2xl text-[#19D3C5]">
                    ✓
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold text-white">
                    Hvala na upitu!
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                    Vaša poruka je uspešno pripremljena. Kada povežemo
                    backend, ovde će se slati direktno na naš email.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-medium text-[#19D3C5] hover:text-[#23E3D5]"
                  >
                    Pošalji još jedan upit →
                  </button>

                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-white/[0.08] bg-[#0B0F11] p-6 sm:p-8 lg:p-10"
                >

                  {/* Name + Email */}
                  <div className="grid gap-6 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="name"
                        className="text-xs font-medium text-white/50"
                      >
                        Ime i prezime
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Vaše ime"
                        required
                        className="mt-3 w-full border-b border-white/10 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#19D3C5]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-xs font-medium text-white/50"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="vas@email.com"
                        required
                        className="mt-3 w-full border-b border-white/10 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#19D3C5]"
                      />
                    </div>

                  </div>

                  {/* Project type */}
                  <div className="mt-8">
                    <label
                      htmlFor="projectType"
                      className="text-xs font-medium text-white/50"
                    >
                      Kakav sajt vam je potreban?
                    </label>

                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="mt-3 w-full appearance-none border-b border-white/10 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors focus:border-[#19D3C5]"
                      >
                        <option
                          value=""
                          disabled
                          className="bg-[#0B0F11]"
                        >
                          Izaberite opciju
                        </option>

                        {projectTypes.map((type) => (
                          <option
                            key={type}
                            value={type}
                            className="bg-[#0B0F11]"
                          >
                            {type}
                          </option>
                        ))}
                      </select>

                      <span className="pointer-events-none absolute right-1 top-6 text-xs text-white/30">
                        ↓
                      </span>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="mt-8">
                    <label
                      htmlFor="budget"
                      className="text-xs font-medium text-white/50"
                    >
                      Okvirni budžet
                    </label>

                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="mt-3 w-full appearance-none border-b border-white/10 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors focus:border-[#19D3C5]"
                      >
                        <option
                          value=""
                          disabled
                          className="bg-[#0B0F11]"
                        >
                          Izaberite opciju
                        </option>

                        {budgets.map((budget) => (
                          <option
                            key={budget}
                            value={budget}
                            className="bg-[#0B0F11]"
                          >
                            {budget}
                          </option>
                        ))}
                      </select>

                      <span className="pointer-events-none absolute right-1 top-6 text-xs text-white/30">
                        ↓
                      </span>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-8">
                    <label
                      htmlFor="message"
                      className="text-xs font-medium text-white/50"
                    >
                      Recite nam nešto više o projektu
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Šta želite da napravimo?"
                      rows={5}
                      required
                      className="mt-3 w-full resize-none border-b border-white/10 bg-transparent px-0 py-3 text-sm leading-6 text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#19D3C5]"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group mt-10 flex w-full items-center justify-center gap-3 rounded-xl bg-[#19D3C5] px-6 py-4 text-sm font-semibold text-[#080A0C] transition-all duration-300 hover:bg-[#23E3D5] hover:shadow-[0_0_40px_rgba(25,211,197,0.18)]"
                  >
                    Pošaljite upit

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  <p className="mt-4 text-center text-[10px] leading-5 text-white/20">
                    Slanjem forme pristajete da vaše podatke koristimo
                    isključivo za komunikaciju u vezi sa vašim upitom.
                  </p>

                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact