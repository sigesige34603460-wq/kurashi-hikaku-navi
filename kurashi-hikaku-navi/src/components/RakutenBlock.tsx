import { AFFILIATE } from '@/data/affiliateLinks'

const ITEMS = [
  {
    href: AFFILIATE.rakutenHikkoshi,
    emoji: '📦',
    title: '引越し用ダンボール・梱包資材',
    desc: 'サイズ別セットがお得。早めの準備がおすすめ。',
    color: { bg: '#FFF8E1', border: '#FFD54F', text: '#E65100', btn: '#F57F17' },
  },
  {
    href: AFFILIATE.rakutenKaden,
    emoji: '🏠',
    title: '新生活家電セット',
    desc: '冷蔵庫・洗濯機・電子レンジをまとめてお得に。',
    color: { bg: '#E8F5E9', border: '#81C784', text: '#1B5E20', btn: '#2E7D32' },
  },
  {
    href: AFFILIATE.rakutenShuuno,
    emoji: '🗂️',
    title: '収納グッズ・整理用品',
    desc: '新居のクローゼット・棚を使いやすく整理。',
    color: { bg: '#E3F2FD', border: '#90CAF9', text: '#0D47A1', btn: '#1565C0' },
  },
]

export default function RakutenBlock() {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #e0e0e0', borderRadius: 12, padding: '20px 18px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        <img
          src="https://static.affiliate.rakuten.co.jp/makelink/rl.gif"
          alt="楽天市場"
          style={{ height: 16, verticalAlign: 'middle' }}
        />
        <span style={{ fontSize: 12, color: '#888', fontWeight: 600 }}>楽天市場で移住準備グッズを探す</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: item.color.bg,
              border: `1.5px solid ${item.color.border}`,
              borderRadius: 8, padding: '10px 14px',
              textDecoration: 'none',
            }}
          >
            <span style={{ fontSize: 24, flexShrink: 0 }}>{item.emoji}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: item.color.text, marginBottom: 2 }}>{item.title}</div>
              <div style={{ fontSize: 11, color: '#666' }}>{item.desc}</div>
            </div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: '#fff',
              background: item.color.btn, padding: '5px 10px',
              borderRadius: 6, whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              楽天で見る →
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
