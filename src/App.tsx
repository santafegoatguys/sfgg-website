import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import MicroFeedlot from './components/MicroFeedlot'
import Team from './components/Team'
import Dogs from './components/Dogs'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <MicroFeedlot />
      <Team />
      <Dogs />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
