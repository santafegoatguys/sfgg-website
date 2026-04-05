import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, X, ExternalLink } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Goats?', href: '#why-goats' },
  { label: 'Herd-in-a-Box', href: '#herd-in-a-box' },
  { label: 'Team', href: '#team' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  // On non-home pages, prefix hash links with / to navigate home first
  const resolveHref = (href: string) => (isHome ? href : `/${href}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span
              className={`font-bold text-lg transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Santa Fe Goat Guys
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-600 hover:text-green-700'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://fireready.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                scrolled
                  ? 'text-orange-600 hover:text-orange-700'
                  : 'text-orange-300 hover:text-orange-200'
              }`}
            >
              FireReady <ExternalLink size={12} />
            </a>
            <a
              href="https://grazematch.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                scrolled
                  ? 'text-green-600 hover:text-green-700'
                  : 'text-green-300 hover:text-green-200'
              }`}
            >
              GrazeMatch <ExternalLink size={12} />
            </a>
            <a
              href={resolveHref('#contact')}
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Schedule Grazing
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? 'text-gray-600' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-600 hover:text-green-700 font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://fireready.ai"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium py-2"
            >
              FireReady <ExternalLink size={13} />
            </a>
            <a
              href="https://grazematch.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-1 text-green-600 hover:text-green-700 font-medium py-2"
            >
              GrazeMatch <ExternalLink size={13} />
            </a>
            <a
              href={resolveHref('#contact')}
              onClick={() => setMobileOpen(false)}
              className="block bg-green-700 text-white text-center px-5 py-3 rounded-lg font-semibold mt-2"
            >
              Schedule Grazing
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
