import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import WhyUs from './sections/WhyUs'
import Services from './sections/Services'
import Pricing from './sections/Pricing'
import Process from './sections/Process'
import Porfolio from './sections/Portfolio'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#080A0C] text-[#F5F7F7]">
      <Navbar />

      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Pricing />
        <Process />
        <Porfolio />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App