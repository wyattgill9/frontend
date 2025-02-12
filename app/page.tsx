import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Features from '../src/components/Features'
import Platforms from '../src/components/Platforms'
import Dashboard from '../src/components/Dashboard'
import Testimonials from '../src/components/Testimonials'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Platforms />
        <Dashboard />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}
