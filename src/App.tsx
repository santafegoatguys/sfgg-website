import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyGoats from './components/WhyGoats'
import MicroFeedlot from './components/MicroFeedlot'
import Team from './components/Team'
import Dogs from './components/Dogs'
import Process from './components/Process'
import SavingsCalculator from './components/SavingsCalculator'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CityServicePage from './pages/CityServicePage'
import FaqPage from './pages/FaqPage'
import PseoPage from './pages/PseoPage'
import BlogPage from './pages/BlogPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import WildfireReadinessPage from './pages/WildfireReadinessPage'

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
      <SavingsCalculator />
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
        <Route path="/pseo/:slug" element={<PseoPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/wildfire-readiness" element={<WildfireReadinessPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
