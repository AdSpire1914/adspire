import Footer from './components/Footer'
import Header from './components/Header'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'

const App = () => {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
