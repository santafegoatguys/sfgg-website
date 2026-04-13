import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo/website-logo-nav.png"
                alt="Santa Fe Goat Guys Logo"
                className="h-10 w-auto"
              />
              <span className="font-bold text-white text-lg">Santa Fe Goat Guys</span>
            </div>
            <p className="text-sm leading-relaxed">
              Eco-friendly vegetation management through sustainable goat grazing.
              Managed by M/M Ranching.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-green-400 text-sm transition-colors">
                  Residential
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 text-sm transition-colors">
                  Commercial
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 text-sm transition-colors">
                  Forestry
                </a>
              </li>
              <li>
                <Link to="/wildfire-readiness" className="hover:text-amber-400 text-sm font-semibold transition-colors">
                  🔥 Wildfire Readiness
                </Link>
              </li>
              <li>
                <a href="#herd-in-a-box" className="hover:text-green-400 text-sm transition-colors">
                  Herd-in-a-Box
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#team" className="hover:text-green-400 text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-green-400 text-sm transition-colors">
                  Our Goats
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-green-400 text-sm transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400 text-sm transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-green-400 text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-green-400 text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="https://fireready.ai" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-sm transition-colors">
                  FireReady
                </a>
              </li>
              <li>
                <a href="https://grazematch.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-sm transition-colors">
                  GrazeMatch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:5052191019" className="hover:text-green-400 transition-colors">
                  505-219-1019
                </a>
              </li>
              <li>
                <a href="mailto:info@sfgoatguys.com" className="hover:text-green-400 transition-colors">
                  info@sfgoatguys.com
                </a>
              </li>
              <li>Northern New Mexico</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {year} Santa Fe Goat Guys. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/terms" className="hover:text-green-400 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-green-400 transition-colors">Privacy</Link>
            <span>Managed by M/M Ranching</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
