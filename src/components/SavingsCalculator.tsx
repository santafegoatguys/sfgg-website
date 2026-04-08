import { useMemo, useState } from 'react'

// ─── Rate card constants ────────────────────────────────────────────────────

type Tier = 'full' | 'standard' | 'small'
type Density = 'light' | 'moderate' | 'dense'

const HERD_SIZE: Record<Tier, number> = { full: 35, standard: 20, small: 15 }
const TIER_LABEL: Record<Tier, string> = {
  full: 'Full Herd (35 goats)',
  standard: 'Standard Herd (20 goats)',
  small: 'Small Herd (15 goats)',
}
const ADA_CONSTANT: Record<Density, number> = { light: 13.5, moderate: 18, dense: 25 }
const DENSITY_LABEL: Record<Density, string> = {
  light: 'Light — sparse grass / thin brush',
  moderate: 'Moderate — mixed shrubs / juniper',
  dense: 'Dense — thick brush / cholla / oak',
}
const MANUAL_PER_ACRE = 1800
const MIN_DAYS = 5

// Tiered daily rates: array of { days, rate } consumed in order
const TIER_RATES: Record<Tier, { days: number; rate: number }[]> = {
  full: [
    { days: 10, rate: 275 },
    { days: 10, rate: 225 },
    { days: 10, rate: 200 },
  ],
  standard: [
    { days: 10, rate: 225 },
    { days: 10, rate: 185 },
  ],
  small: [
    { days: 10, rate: 175 },
    { days: 10, rate: 150 },
  ],
}

function calcGoatCost(tier: Tier, days: number): number {
  let remaining = days
  let cost = 0
  for (const { days: band, rate } of TIER_RATES[tier]) {
    const used = Math.min(remaining, band)
    cost += used * rate
    remaining -= used
    if (remaining <= 0) break
  }
  return cost
}

function autoTier(acres: number): Tier {
  if (acres < 3) return 'small'
  if (acres <= 7) return 'standard'
  return 'full'
}

function calcDays(acres: number, density: Density, tier: Tier): number {
  const raw = (acres * ADA_CONSTANT[density]) / HERD_SIZE[tier]
  return Math.max(MIN_DAYS, Math.ceil(raw))
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function SavingsCalculator() {
  const [acres, setAcres] = useState<number>(5)
  const [location, setLocation] = useState<string>('Santa Fe, NM')
  const [density, setDensity] = useState<Density>('moderate')
  const [tierOverride, setTierOverride] = useState<Tier | 'auto'>('auto')
  const [copied, setCopied] = useState(false)

  const {
    tier, days, goatCost, manualCost, savings, savingsPct, shareUrl, ogUrl,
  } = useMemo(() => {
    const a = Math.max(0.1, Math.min(10000, Number.isFinite(acres) ? acres : 5))
    const tier: Tier = tierOverride === 'auto' ? autoTier(a) : tierOverride
    const days = calcDays(a, density, tier)
    const goat = calcGoatCost(tier, days)
    const manual = a * MANUAL_PER_ACRE
    const save = manual - goat
    const pct = Math.round((save / manual) * 100)
    const origin =
      typeof window !== 'undefined' && !window.location.host.includes('localhost')
        ? window.location.origin
        : 'https://santafegoatguys.com'
    const qs = `acres=${a}&location=${encodeURIComponent(location || 'Santa Fe, NM')}`
    return {
      tier,
      days,
      goatCost: goat,
      manualCost: manual,
      savings: save,
      savingsPct: pct,
      shareUrl: `${origin}/share?${qs}`,
      ogUrl: `${origin}/api/og/card?${qs}`,
    }
  }, [acres, location, density, tierOverride])

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

  const shareText = `I could save ${fmt(savings)} on vegetation clearing for ${acres} acres using goat grazing instead of manual crews. Get a quote:`

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
            Based on SFGG's 2026 rate card. See your estimate, then share it with neighbors.
          </p>
        </div>

        <div className="bg-white text-[#2C3E0F] rounded-2xl shadow-2xl overflow-hidden">

          {/* ── Inputs ── */}
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:border-r border-gray-200 space-y-6">

              {/* Acres */}
              <div>
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
                  className="w-full text-4xl font-extrabold px-4 py-3 border-2 border-[#E5DDC4] rounded-lg focus:border-[#3D5A2A] focus:outline-none"
                />
              </div>

              {/* Vegetation density */}
              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider text-[#6B7B4F] mb-2">
                  Vegetation density
                </label>
                <div className="space-y-2">
                  {(['light', 'moderate', 'dense'] as Density[]).map((d) => (
                    <label key={d} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="density"
                        value={d}
                        checked={density === d}
                        onChange={() => setDensity(d)}
                        className="accent-[#3D5A2A] w-4 h-4"
                      />
                      <span className="text-sm text-[#2C3E0F]">{DENSITY_LABEL[d]}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
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
            </div>

            {/* ── Results ── */}
            <div className="p-8 bg-[#F5F0E1] flex flex-col gap-4">

              {/* Herd tier */}
              <div className="bg-white rounded-lg px-4 py-3 border border-[#E5DDC4]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6B7B4F] mb-1">
                  Recommended herd {tierOverride === 'auto' ? '(auto)' : '(manual)'}
                </p>
                <select
                  value={tierOverride}
                  onChange={(e) => setTierOverride(e.target.value as Tier | 'auto')}
                  className="w-full text-sm font-semibold text-[#2C3E0F] bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value="auto">Auto — {TIER_LABEL[autoTier(acres)]}</option>
                  {(['full', 'standard', 'small'] as Tier[]).map((t) => (
                    <option key={t} value={t}>{TIER_LABEL[t]}</option>
                  ))}
                </select>
              </div>

              {/* Duration */}
              <div className="bg-white rounded-lg px-4 py-3 border border-[#E5DDC4]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6B7B4F] mb-0.5">
                  Estimated duration
                </p>
                <p className="text-2xl font-extrabold text-[#3D5A2A]">
                  {days} days
                </p>
                <p className="text-xs text-[#6B7B4F]">
                  {acres} acres × {ADA_CONSTANT[density]} ADA ÷ {HERD_SIZE[tier]} goats
                  {days === MIN_DAYS ? ' (5-day minimum)' : ''}
                </p>
              </div>

              {/* Savings headline */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#6B7B4F] mb-1">You save</p>
                <p className="text-5xl font-extrabold text-[#3D5A2A] leading-none">
                  {savings > 0 ? fmt(savings) : '—'}
                </p>
                {savings > 0 && (
                  <p className="text-sm font-bold text-[#3D5A2A] mt-1">
                    {savingsPct}% less than manual clearing
                  </p>
                )}
              </div>

              {/* Cost comparison */}
              <div className="space-y-2 mt-auto">
                <div className="flex justify-between items-center px-3 py-2 bg-white rounded border-l-4 border-[#C0392B]">
                  <span className="text-sm text-[#6B7B4F]">Manual clearing</span>
                  <span className="font-bold text-[#2C3E0F]">{fmt(manualCost)}</span>
                </div>
                <div className="flex justify-between items-center px-3 py-2 bg-white rounded border-l-4 border-[#3D5A2A]">
                  <div>
                    <span className="text-sm text-[#6B7B4F]">Goat grazing</span>
                    <span className="text-xs text-[#6B7B4F] ml-1">({days} days)</span>
                  </div>
                  <span className="font-bold text-[#2C3E0F]">{fmt(goatCost)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── OG card preview ── */}
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

          {/* ── Share ── */}
          <div className="px-8 py-6 border-t border-gray-200 bg-white">
            <p className="text-sm font-semibold text-[#2C3E0F] mb-3">
              Share with neighbors who need fire defense:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <a href={tw} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black text-white px-3 py-2 rounded-md text-sm font-semibold hover:opacity-90">
                𝕏 Post
              </a>
              <a href={fb} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1877F2] text-white px-3 py-2 rounded-md text-sm font-semibold hover:opacity-90">
                Facebook
              </a>
              <a href={li} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#0A66C2] text-white px-3 py-2 rounded-md text-sm font-semibold hover:opacity-90">
                LinkedIn
              </a>
              <button type="button" onClick={handleCopy}
                className="flex items-center justify-center gap-2 bg-gray-100 text-[#2C3E0F] px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-200">
                {copied ? 'Copied!' : 'Copy link'}
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-[#E8F0D6] text-sm mt-6">
          Estimate uses SFGG's 2026 tiered daily rates and Animal Days per Acre formula.
          Manual clearing benchmark: ${MANUAL_PER_ACRE.toLocaleString()}/acre. Minimum engagement: {MIN_DAYS} days.
          <br />
          <a href="/#contact" className="underline font-semibold hover:text-white">
            Get a real quote tailored to your property &rarr;
          </a>
        </p>
      </div>
    </section>
  )
}
