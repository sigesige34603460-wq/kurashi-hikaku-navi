import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cityDetails } from '@/data/cityDetails'
import { rankCities, whyData } from '@/data/cities'

type Props = { params: { id: string } }

export function generateStaticParams() {
  return Object.keys(cityDetails).map(id => ({ id }))
}

export default function CityPage({ params }: Props) {
  const city = cityDetails[params.id]
  if (!city) notFound()

  const rank = rankCities.find(c => c.id === params.id)
  const why = whyData[params.id] ?? []

  const iconMap: Record<string, string> = {
    cost: '💰', conv: '🚃', nat: '🌿', med: '🏥'
  }

  const scoreItems = [
    { label: '生活コスト', value: rank?.cost ?? 0, color: '#2D6A4F' },
    { label: '利便性',     value: rank?.conv ?? 0, color: '#52B788' },
    { label: '自然環境',   value: rank?.nat  ?? 0, color: '#1B4332' },
    { label: '医療',       value: rank?.med  ?? 0, color: '#7C5C3A' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--green-pale)' }}>

      {/* サブヘッダー（パンくず） */}
      <div style={{
        background: 'var(--white)',
        borderBottom: '1px solid var(--border)',
        position: 'sticky', top: 56, zIndex: 90,
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
          <Link href="/" style={{ color: 'var(--green)', fontWeight: 600 }}>← トップ</Link>
          <span style={{ color: 'var(--text-light)' }}>/</span>
          <span style={{ color: 'var(--text-muted)' }}>{city.name}（{city.pref}）</span>
        </div>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '24px 20px 48px', display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* ヒーロー */}
        <div style={{
          background: 'linear-gradient(135deg, var(--green-dark) 0%, var(--green) 60%, var(--green-mid) 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '36px 28px',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 80% 10%, rgba(255,255,255,0.07) 0%, transparent 55%)',
            pointerEvents: 'none',
          }} />
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 6, letterSpacing: '0.08em' }}>
            {city.pref}
          </p>
          <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12, textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}>
            {city.name}
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.88)', lineHeight: 1.75 }}>
            {city.catchcopy}
          </p>
        </div>

        {/* 住みやすさスコア */}
        {rank && (
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '24px 20px', boxShadow: 'var(--shadow-sm)', border: '1.5px solid var(--border)' }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 18 }}>📊 住みやすさスコア</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {scoreItems.map(item => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{item.label}</span>
                    <span style={{ fontSize: 20, fontWeight: 800, color: item.color }}>{item.value}</span>
                  </div>
                  <div style={{ height: 8, background: 'var(--green-light)', borderRadius: 100, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${item.value}%`,
                      background: item.color,
                      borderRadius: 100,
                      transition: 'width 0.6s ease',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 移住するメリット */}
        {why.length > 0 && (
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '24px 20px', boxShadow: 'var(--shadow-sm)', border: '1.5px solid var(--border)' }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>✅ 移住するメリット</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {why.map((w, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 12, padding: '14px 12px',
                  background: 'var(--green-pale)',
                  border: '1.5px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{iconMap[w.icon] ?? '📌'}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{w.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.65 }}>{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ご当地グルメ */}
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '24px 20px', boxShadow: 'var(--shadow-sm)', border: '1.5px solid var(--border)' }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>🍜 ご当地グルメ</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {city.gourmet.map((g, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, padding: '12px',
                border: '1.5px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--earth-pale)',
                transition: 'border-color 0.15s',
              }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>🍽️</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>{g.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.65 }}>{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* おすすめスポット */}
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '24px 20px', boxShadow: 'var(--shadow-sm)', border: '1.5px solid var(--border)' }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>📍 おすすめスポット</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {city.spots.map((s, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, padding: '12px',
                border: '1.5px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--green-pale)',
              }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>🗺️</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.65 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 移住のコツ */}
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '24px 20px', boxShadow: 'var(--shadow-sm)', border: '1.5px solid var(--border)' }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>💡 移住のコツ</h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, listStyle: 'none', padding: 0, margin: 0 }}>
            {city.tips.map((tip, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: 'var(--green-light)',
                  color: 'var(--green-dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 1,
                }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.75 }}>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, var(--green-light) 0%, var(--green-pale) 100%)',
          border: '1.5px solid rgba(45,106,79,0.2)',
          borderRadius: 'var(--radius-xl)',
          padding: '28px 20px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16 }}>他の都市と比較してみましょう</p>
          <Link href="/" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)',
            color: '#fff',
            padding: '12px 32px',
            borderRadius: 'var(--radius-md)',
            fontWeight: 700,
            fontSize: 14,
            boxShadow: '0 4px 12px rgba(45,106,79,0.35)',
            transition: 'transform 0.15s',
          }}>
            ← 都市比較トップへ
          </Link>
        </div>

      </main>
    </div>
  )
}
