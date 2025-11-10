import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tracks from './components/Tracks'
import CelebFaculty from './components/CelebFaculty'
import Experience from './components/Experience'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <Tracks />
      <CelebFaculty />
      <Experience />
      <CTA />
      <footer className="border-t-4 border-black py-10 text-center text-xs">
        <p className="font-semibold">© {new Date().getFullYear()} AlgoUniverrsity — School of CS & AI (ASCA)</p>
      </footer>
    </div>
  )
}

export default App