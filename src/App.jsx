import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-surface text-text-primary transition-colors duration-300 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
