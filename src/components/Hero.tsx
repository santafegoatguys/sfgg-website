import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero/hero-bg.png)',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Logo */}
        <img
          src="/images/logo/sfgg-logo.png"
          alt="Santa Fe Goat Guys Logo"
          className="h-32 md:h-40 w-auto mx-auto mb-8 drop-shadow-2xl"
        />

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Santa Fe Goat Guys
        </h1>
        <p className="text-lg text-gray-200 mb-2 font-medium tracking-wide uppercase">
          Managed by M/M Ranching
        </p>
        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          Eco-friendly vegetation management through sustainable goat grazing.
          Serving Santa Fe and surrounding areas with natural weed control solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
          >
            Schedule Grazing
          </a>
          <a
            href="#services"
            className="bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors border border-white/30"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  )
}
