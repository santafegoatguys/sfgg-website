import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const blogModules = import.meta.glob('/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

interface BlogMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  raw: string
}

function parseSlug(key: string): string {
  return key.replace('/content/blog/', '').replace('.md', '')
}

function parseBlog(key: string, raw: string): BlogMeta {
  const slug = parseSlug(key)
  // Date from filename prefix YYYY-MM-DD
  const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})/)
  const date = dateMatch ? dateMatch[1] : ''

  // Title from first # heading
  const titleMatch = raw.match(/^#\s+(.+)/m)
  const title = titleMatch ? titleMatch[1].trim() : slug

  // Excerpt: first non-heading paragraph
  const lines = raw.split('\n')
  let excerpt = ''
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#')) {
      excerpt = trimmed.slice(0, 160)
      break
    }
  }

  return { slug, title, date, excerpt, raw }
}

export function getAllBlogPosts(): BlogMeta[] {
  return Object.entries(blogModules)
    .map(([key, raw]) => parseBlog(key, raw))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>()
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  // Blog index at /blog
  if (!slug) {
    const posts = getAllBlogPosts()
    return (
      <HelmetProvider>
        <Helmet>
          <title>Blog | Santa Fe Goat Guys</title>
          <meta name="description" content="Expert advice on wildfire fuel reduction, targeted goat grazing, defensible space, and vegetation management in Northern New Mexico." />
          <link rel="canonical" href="https://santafegoatguys.com/blog" />
        </Helmet>
        <div className="min-h-screen bg-white">
          <Navbar />
          <section className="bg-green-900 text-white py-14 px-6">
            <div className="max-w-3xl mx-auto">
              <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-2">Santa Fe Goat Guys</p>
              <h1 className="text-3xl md:text-4xl font-bold">Wildfire & Grazing Insights</h1>
              <p className="text-green-100 mt-2 text-lg">Expert advice on defensible space, goat grazing, and fire season preparation in Northern New Mexico.</p>
            </div>
          </section>
          <section className="max-w-3xl mx-auto px-6 py-12">
            {posts.length === 0 ? (
              <p className="text-gray-500">No posts yet.</p>
            ) : (
              <div className="divide-y divide-gray-100">
                {posts.map((post) => (
                  <article key={post.slug} className="py-8">
                    {post.date && (
                      <p className="text-xs text-gray-400 font-mono mb-1">{post.date}</p>
                    )}
                    <h2 className="text-xl font-bold text-green-900 mb-2 leading-snug">
                      <Link to={`/blog/${post.slug}`} className="hover:text-green-700 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{post.excerpt}…</p>
                    )}
                    <Link to={`/blog/${post.slug}`} className="text-green-700 hover:text-green-900 text-sm font-semibold">
                      Read more →
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </section>
          <Footer />
        </div>
      </HelmetProvider>
    )
  }

  // Individual post
  const key = `/content/blog/${slug}.md`
  const raw = blogModules[key]
  if (!raw) return <Navigate to="/blog" replace />

  const post = parseBlog(key, raw)
  const canonicalUrl = `https://santafegoatguys.com/blog/${slug}`

  const schemaJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Santa Fe Goat Guys' },
    publisher: { '@type': 'Organization', name: 'Santa Fe Goat Guys', url: 'https://santafegoatguys.com' },
    url: canonicalUrl,
  })

  return (
    <HelmetProvider>
      <Helmet>
        <title>{post.title} | Santa Fe Goat Guys</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{schemaJsonLd}</script>
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navbar />
        <section className="bg-green-900 text-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="text-green-300 text-sm hover:text-green-100 transition-colors">← All Posts</Link>
            {post.date && <p className="text-green-400 text-xs font-mono mt-3 mb-2">{post.date}</p>}
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">{post.title}</h1>
          </div>
        </section>
        <section className="max-w-3xl mx-auto px-6 py-12">
          <div className="prose prose-green max-w-none prose-headings:text-green-900 prose-a:text-green-700">
            <ReactMarkdown>{post.raw}</ReactMarkdown>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-900 font-semibold mb-1">Ready to protect your property?</p>
              <p className="text-amber-800 text-sm mb-4">Get a free FireReady Home assessment — takes 30 seconds, maps your specific wildfire risk zones.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://app.fireready.ai" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors text-center">
                  Free FireReady Assessment →
                </a>
                <a href="/#contact"
                  className="inline-block bg-green-800 hover:bg-green-900 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors text-center">
                  Get a Grazing Quote
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </HelmetProvider>
  )
}
