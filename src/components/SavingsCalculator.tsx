import { useMemo, useState } from 'react'

/**
 * Savings calculator widget — generates a shareable estimate card.
 * Drives the SFGG viral artifact loop: visitors run the math, share the
 * card on social, friends see it and click through to santafegoatguys.com.
 */
export default function SavingsCalculator() {
  const [acres, setAcres] = useState<number>(5)
  const [location, setLocation] = useState<string>('Santa Fe, NM')
  const [copied, setCopied] = useState(false)

  const { manualCost, goatCost, savings, savingsPct, shareUrl, ogUrl } = useMemo(() => {
    const a = Math.max(0.1, Math.min(10000, Number.isFinite(acres) ? acres : 5))
    const manual = a * 1500
    const goat = a * 400
    const save = manual - goat
    const pct = Math.round((save / manual) * 100)
    const origin =
      typeof window !== 'undefined' && !window.location.host.includes('localhost')
        ? window.location.origin
        : 'https://santafegoatguys.com'
    const qs = `acres=${a}&location=${encodeURIComponent(location || 'Santa Fe, NM')}`
    return {
      manualCost: manual,
      goatCost: goat,
      savings: save,
      savingsPct: pct,
      shareUrl: `${origin}/share?${qs}`,
      ogUrl: `${origin}/api/og/card?${qs}`,
    }
  }, [acres, location])

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

  const shareText = `I could save ${fmt(savings)} on ${acres} acres with goat grazing instead of manual clearing. Free quote in 24 hrs:`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy link:', shareUrl)
    }
  }

  const tw = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
  const li = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`

  return (
    <section className="bg-[#3D5A2A] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-bold tracking-widest text-[#E8F0D6] mb-2">
            GOAT GRAZING SAVINGS CALCULATOR
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            How much could you save?
          </h2>
          <p className="text-[#E8F0D6] text-lg">
            See your estimate, then share it with neighbors who need fire defense too.
          </p>
        </div>

        <div className="bg-white text-[#2C3E0F] rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Inputs */}
            <div className="p-8 md:border-r border-gray-200">
              <label className="block text-sm font-semibold uppercase tracking-wider text-[#6B7B4F] mb-2">
                How many acres?
              </label>
              <input
                type="number"
                min={0.1}
                max={10000}
                step={0.5}
                value={acres}
                onChange={(e) => setAcres(parseFloat(e.target.value) || 0)}
                className="w-full text-4xl font-extrabold px-4 py-3 border-2 border-[#E5DDC4] rounded-lg focus:border-[#3D5A2A] focus:outline-none mb-6"
              />

              <label className="block text-sm font-semibold uppercase tracking-wider text-[#6B7B4F] mb-2">
                Property location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Santa Fe, NM"
                maxLength={50}
                className="w-full text-lg px-4 py-3 border-2 border-[#E5DDC4] rounded-lg focus:border-[#3D5A2A] focus:outline-none"
              />
            </div>

            {/* Results */}
            <div className="p-8 bg-[#F5F0E1]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#6B7B4F] mb-1">
                You save
              </p>
              <p className="text-5xl font-extrabold text-[#3D5A2A] leading-none mb-1">
                {fmt(savings)}
              </p>
              <p className="text-sm font-bold text-[#3D5A2A] mb-5">
                {savingsPct}% less than manual clearing
              </p>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-3 py-2 bg-white rounded border-l-4 border-[#C0392B]">
                  <span className="text-sm text-[#6B7B4F]">Manual clearing</span>
                  <span className="font-bold text-[#2C3E0F]">{fmt(manualCost)}</span>
                </div>
                <div className="flex justify-between items-center px-3 py-2 bg-white rounded border-l-4 border-[#3D5A2A]">
                  <span className="text-sm text-[#6B7B4F]">Goat grazing</span>
                  <span className="font-bold text-[#2C3E0F]">{fmt(goatCost)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card preview */}
          <div className="bg-[#F5F0E1] px-8 pb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7B4F] mb-2">
              Shareable card preview
            </p>
            <img
              key={ogUrl}
              src={ogUrl}
              alt={`${acres} acre goat grazing estimate for ${location}`}
              className="w-full rounded-lg border border-[#E5DDC4]"
              loading="lazy"
            />
          </div>

          {/* Share buttons */}
          <div className="px-8 py-6 border-t border-gray-200 bg-white">
            <p className="text-sm font-semibold text-[#2C3E0F] mb-3">
              Share with neighbors who need fire defense:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <a
                href={tw}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black text-white px-3 py-2 rounded-md text-sm font-semibold hover:opacity-90"
              >
                𝕏 Post
              </a>
              <a
                href={fb}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1877F2] text-white px-3 py-2 rounded-md text-sm font-semibold hover:opacity-90"
              >
                Facebook
              </a>
              <a
                href={li}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#0A66C2] text-white px-3 py-2 rounded-md text-sm font-semibold hover:opacity-90"
              >
                LinkedIn
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 bg-gray-100 text-[#2C3E0F] px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200"
              >
                {copied ? 'Copied!' : 'Copy link'}
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-[#E8F0D6] text-sm mt-6">
          Estimate based on $1,500/acre manual clearing vs $400/acre goat grazing — typical NM rates.
          <br />
          <a href="/#contact" className="underline font-semibold hover:text-white">
            Get a real quote tailored to your property &rarr;
          </a>
        </p>
      </div>
    </section>
  )
}
