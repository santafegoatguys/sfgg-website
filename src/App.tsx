import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyGoats from './components/WhyGoats'
import MicroFeedlot from './components/MicroFeedlot'
import Team from './components/Team'
import Dogs from './components/Dogs'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CityServicePage from './pages/CityServicePage'
import FaqPage from './pages/FaqPage'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyGoats />
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:citySlug" element={<CityServicePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
