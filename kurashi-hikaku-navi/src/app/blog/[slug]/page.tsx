import { notFound } from 'next/navigation'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import Header from '@/components/Header'
import AffiliateBlock from '@/components/AffiliateBlock'
import RakutenBlock from '@/components/RakutenBlock'

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog')

export async function generateStaticParams() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => ({ slug: f.replace(/\.md$/, '') }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const filePath = path.join(CONTENT_DIR, `${params.slug}.md`)
  if (!fs.existsSync(filePath)) return {}
  const { data } = matter(fs.readFileSync(filePath, 'utf8'))
  return {
    title: `${data.title} | くらし比較ナビ`,
    description: data.description ?? '',
    openGraph: {
      title: data.title,
      description: data.description ?? '',
      url: `https://www.kurashi-hikaku.net/blog/${params.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(CONTENT_DIR, `${params.slug}.md`)
  if (!fs.existsSync(filePath)) notFound()

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(remarkHtml).process(content)
  const html = processed.toString()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--green-pale)' }}>
      <Header />

      {/* ヒーロー */}
      <div style={{
        background: 'linear-gradient(160deg, var(--green-dark) 0%, var(--green) 100%)',
        padding: '40px 20px 32px',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>トップ</Link>
            {' › '}
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>コラム</Link>
          </div>
          {data.category && (
            <p style={{ fontSize: 11, background: 'rgba(255,255,255,0.15)', color: '#fff', display: 'inline-block', padding: '3px 12px', borderRadius: 100, marginBottom: 12 }}>
              {data.category}
            </p>
          )}
          <h1 style={{ fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1.45, marginBottom: 10 }}>
            {data.title}
          </h1>
          {data.date && (
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>
              {new Date(data.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          )}
        </div>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '28px 16px 64px' }}>

        {/* 記事本文 */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: html }}
          style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius-xl)',
            padding: '28px 24px',
            border: '1.5px solid var(--border)',
            marginBottom: 28,
            fontSize: 14,
            lineHeight: 1.9,
            color: 'var(--text)',
          }}
        />

        {/* アフィリエイト */}
        <div style={{ marginBottom: 20 }}>
          <AffiliateBlock heading="移住の準備をはじめよう" />
        </div>
        <div style={{ marginBottom: 28 }}>
          <RakutenBlock />
        </div>

        {/* シミュレーターCTA */}
        <section style={{
          background: 'linear-gradient(135deg, var(--green-dark), var(--green))',
          borderRadius: 'var(--radius-xl)',
          padding: '28px 24px',
          textAlign: 'center',
          marginBottom: 28,
        }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 8 }}>
            移住したら月いくら節約できる？
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 20, lineHeight: 1.7 }}>
            今の住所と移住先を選ぶだけ。節約額と支援金がすぐわかります。
          </p>
          <Link href="/" style={{
            display: 'inline-block', background: '#fff', color: 'var(--green-dark)',
            fontWeight: 800, fontSize: 15, padding: '14px 32px',
            borderRadius: 'var(--radius-md)', textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}>
            無料でシミュレーションする →
          </Link>
        </section>

        <Link href="/blog" style={{
          display: 'inline-block', fontSize: 13, color: 'var(--green-dark)',
          fontWeight: 600, textDecoration: 'none',
        }}>
          ← コラム一覧に戻る
        </Link>
      </main>

      <style>{`
        .blog-content h2 { font-size: 18px; font-weight: 800; color: var(--text); margin: 28px 0 12px; padding-bottom: 6px; border-bottom: 2px solid var(--green-light); }
        .blog-content h3 { font-size: 15px; font-weight: 700; color: var(--text); margin: 20px 0 8px; }
        .blog-content p { margin: 0 0 14px; }
        .blog-content ul, .blog-content ol { padding-left: 20px; margin: 0 0 14px; }
        .blog-content li { margin-bottom: 6px; }
        .blog-content table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
        .blog-content th { background: var(--green-dark); color: #fff; padding: 8px 12px; text-align: left; }
        .blog-content td { padding: 8px 12px; border-bottom: 1px solid var(--border); }
        .blog-content tr:nth-child(even) td { background: var(--green-pale); }
        .blog-content strong { color: var(--text); }
        .blog-content a { color: var(--green-dark); }
      `}</style>
    </div>
  )
}
