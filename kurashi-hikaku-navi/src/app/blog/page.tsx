import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Header from '@/components/Header'

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog')

// 固定の既存記事
const STATIC_ARTICLES = [
  {
    slug: 'cost-ranking',
    title: '生活費が安い都道府県ランキング47選【2024年最新版】',
    description: '総務省データをもとに生活費が安い都道府県を47位まで完全ランキング。',
    date: '2024-01-01',
    category: 'ランキング',
    isStatic: true,
  },
  {
    slug: 'tokyo-vs',
    title: '東京から移住したら月いくら節約できる？47都道府県の節約額一覧',
    description: '東京から各都道府県に移住した場合の月間節約額を一覧で比較。',
    date: '2024-01-01',
    category: '節約',
    isStatic: true,
  },
  {
    slug: 'shienkin',
    title: '移住支援金・補助金まとめ2024｜最大100万円もらえる制度完全ガイド',
    description: '地方移住でもらえる支援金・補助金を完全まとめ。',
    date: '2024-01-01',
    category: '支援制度',
    isStatic: true,
  },
]

function getMarkdownArticles() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const { data } = matter(fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf8'))
      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title ?? '',
        description: data.description ?? '',
        date: data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : String(data.date).slice(0, 10),
        category: data.category ?? 'コラム',
        isStatic: false,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

const CATEGORY_COLOR: Record<string, string> = {
  ランキング: '#2E7D32',
  節約: '#1565C0',
  支援制度: '#7C5C3A',
  移住ガイド: '#1D9E75',
  コラム: '#555',
}

export const metadata = {
  title: 'コラム一覧 | くらし比較ナビ',
  description: '移住・生活費・支援制度に関するコラム記事一覧。地方移住の参考情報をまとめています。',
}

export default function BlogIndexPage() {
  const mdArticles = getMarkdownArticles()
  const allArticles = [...mdArticles, ...STATIC_ARTICLES]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--green-pale)' }}>
      <Header />

      <div style={{
        background: 'linear-gradient(160deg, var(--green-dark) 0%, var(--green) 100%)',
        padding: '36px 20px 28px',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>トップ</Link>
            {' › '}コラム
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 8 }}>移住・くらしコラム</h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
            全{allArticles.length}記事 · 移住・生活費・支援制度に関する情報をお届けします
          </p>
        </div>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '24px 16px 64px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {allArticles.map(article => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-xl)',
                padding: '18px 20px',
                border: '1.5px solid var(--border)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.15s',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100,
                    background: CATEGORY_COLOR[article.category] ?? '#555',
                    color: '#fff',
                  }}>
                    {article.category}
                  </span>
                  {article.date && article.date !== '2024-01-01' && (
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                      {new Date(article.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 6, lineHeight: 1.5 }}>
                  {article.title}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {article.description}
                </div>
                <div style={{ fontSize: 12, color: 'var(--green-dark)', fontWeight: 600, marginTop: 10 }}>
                  読む →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer style={{ padding: '20px 24px 32px', fontSize: 11, color: 'var(--text-light)', textAlign: 'center' }}>
        © 2025 くらし比較ナビ
      </footer>
    </div>
  )
}
