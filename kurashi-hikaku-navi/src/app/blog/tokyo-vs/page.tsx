import Link from 'next/link'
import Header from '@/components/Header'
import { simCities, rankCities } from '@/data/cities'
import { AFFILIATE } from '@/data/affiliateLinks'

export const metadata = {
  title: '東京から移住したら月いくら節約できる？47都道府県の節約額一覧【2024年】 | くらし比較ナビ',
  description: '東京から各都道府県に移住した場合の月間節約額を一覧で比較。家賃・食費・光熱費の差額を総務省データで算出。節約額トップは月6万円以上の県も。',
  openGraph: {
    title: '東京から移住したら月いくら節約できる？47都道府県の節約額一覧',
    description: '東京から各都道府県に移住した場合の月間節約額を一覧で比較。家賃・食費・光熱費の差額を総務省データで算出。',
    url: 'https://www.kurashi-hikaku.net/blog/tokyo-vs',
  },
}

const tokyoBase = simCities['tokyo']

const savingList = rankCities
  .map(c => {
    const city = simCities[c.id]
    if (!city) return null
    const saving = tokyoBase.rent + tokyoBase.food + tokyoBase.util
      - city.rent - city.food - city.util
    return {
      ...c,
      saving,
      rent: tokyoBase.rent - city.rent,
      food: tokyoBase.food - city.food,
      util: tokyoBase.util - city.util,
      grant: city.grant,
    }
  })
  .filter(Boolean)
  .sort((a, b) => b!.saving - a!.saving) as NonNullable<ReturnType<typeof savingList[0]>>[]

export default function TokyoVsPage() {
  const top3 = savingList.slice(0, 3)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--green-pale)' }}>
      <Header />

      {/* ヒーロー */}
      <div style={{
        background: 'linear-gradient(160deg,#1B4332 0%,#2D6A4F 100%)',
        padding: '40px 20px 32px',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>トップ</Link>
            {' › '}コラム
          </div>
          <p style={{ fontSize: 11, background: 'rgba(255,255,255,0.15)', color: '#fff', display: 'inline-block', padding: '3px 12px', borderRadius: 100, marginBottom: 12 }}>
            総務省データ準拠 · 2024年最新版
          </p>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1.45, marginBottom: 10 }}>
            東京から移住したら月いくら節約できる？<br />47都道府県の節約額を完全比較
          </h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
            東京の家賃・食費・光熱費を基準に、各都道府県へ移住した場合の月間節約額を算出しました。
            節約額トップの県では月6万円以上、年間70万円超の節約が見込めます。
          </p>
        </div>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '24px 16px 64px' }}>

        {/* サマリーカード */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 28 }}>
          {top3.map((c, i) => (
            <Link key={c.id} href={`/cities/${c.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--white)', borderRadius: 'var(--radius-lg)',
                padding: '14px 12px', border: '1.5px solid var(--border)', textAlign: 'center',
                boxShadow: '0 2px 8px rgba(45,106,79,0.1)',
              }}>
                <div style={{ fontSize: 18 }}>{'🥇🥈🥉'[i]}</div>
                <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 4 }}>{c.pref}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{c.name}</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--green)', marginTop: 4 }}>
                  月{Math.round(c.saving / 10000 * 10) / 10}万円節約
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 前書き */}
        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 12 }}>なぜ東京から地方移住で節約できるのか</h2>
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '20px', border: '1.5px solid var(--border)', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.9 }}>
            <p style={{ margin: '0 0 12px' }}>
              東京の平均的な生活費は<strong style={{ color: 'var(--text)' }}>月約17.7万円</strong>（家賃11万円＋食費5.5万円＋光熱費1.2万円）。
              これに対し、宮崎・秋田・鳥取などの地方都市では同条件で<strong style={{ color: 'var(--text)' }}>月10〜11万円</strong>程度に収まります。
            </p>
            <p style={{ margin: 0 }}>
              最大の要因は<strong style={{ color: 'var(--text)' }}>家賃</strong>。東京で同じ広さ・設備の物件を借りると、地方の2〜3倍の家賃がかかります。
              加えて、地方では食材が安く・新鮮で、食費の節約効果も見逃せません。
            </p>
          </div>
        </section>

        {/* 全47都道府県の節約額一覧 */}
        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 6 }}>全47都道府県の節約額一覧（東京比）</h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16, lineHeight: 1.7 }}>
            節約額の多い順に並べています。都市名をタップすると詳細ページに移動できます。
          </p>
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1.5px solid var(--border)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 72px 56px 56px 56px', padding: '10px 14px', background: 'var(--green-dark)', fontSize: 11, fontWeight: 700, color: '#fff', gap: 4 }}>
              <span>#</span>
              <span>都市</span>
              <span style={{ textAlign: 'right' }}>月節約額</span>
              <span style={{ textAlign: 'right', fontSize: 10 }}>家賃差</span>
              <span style={{ textAlign: 'right', fontSize: 10 }}>食費差</span>
              <span style={{ textAlign: 'right', fontSize: 10 }}>支援金</span>
            </div>
            {savingList.map((c, i) => (
              <Link key={c.id} href={`/cities/${c.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '40px 1fr 72px 56px 56px 56px',
                  padding: '10px 14px', gap: 4, alignItems: 'center',
                  background: i % 2 === 0 ? 'var(--white)' : 'var(--green-pale)',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 700 }}>{i + 1}</span>
                  <div>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{c.pref}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{c.name}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      fontSize: 13, fontWeight: 800,
                      color: c.saving > 0 ? 'var(--green-dark)' : 'var(--text-muted)',
                    }}>
                      {c.saving > 0 ? `▲${Math.round(c.saving / 1000)}千円` : `±0`}
                    </span>
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'right' }}>
                    {c.rent > 0 ? `▲${Math.round(c.rent / 1000)}千` : `±0`}
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'right' }}>
                    {c.food > 0 ? `▲${Math.round(c.food / 1000)}千` : `±0`}
                  </span>
                  <span style={{ fontSize: 11, textAlign: 'right', color: c.grant > 0 ? '#7C5C3A' : 'var(--text-muted)' }}>
                    {c.grant > 0 ? `最大${Math.round(c.grant / 10000)}万` : '－'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 8 }}>
            ※節約額は家賃・食費・光熱費の差額（東京比）。支援金は移住支援金の上限額（条件あり）。
          </p>
        </section>

        {/* アフィリエイトCTA */}
        <div style={{ marginBottom: 28 }}>
          <a href={AFFILIATE.hikkoshi} target="_blank" rel="noopener noreferrer sponsored"
            style={{ display: 'block', background: 'linear-gradient(135deg,#E8F5E9,#F1F8E9)', border: '1.5px solid #81C784', borderRadius: 'var(--radius-lg)', padding: '18px 20px', textDecoration: 'none' }}>
            <div style={{ fontSize: 11, color: '#2E7D32', fontWeight: 700, marginBottom: 4 }}>PR</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1B5E20', marginBottom: 4 }}>移住の引越し費用を最大50%節約しよう</div>
            <div style={{ fontSize: 12, color: '#388E3C', marginBottom: 10 }}>SUUMO引越しなら最大10社から一括見積もり。地方移住の実績も豊富です。</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', background: '#2E7D32', display: 'inline-block', padding: '8px 20px', borderRadius: 8 }}>無料で見積もりを比較する →</div>
          </a>
        </div>

        {/* 移住検討ポイント */}
        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 16 }}>節約額だけで選ぶと後悔する？移住先の選び方</h2>
          {[
            { icon: '🚃', title: '利便性も確認する', body: '節約額が大きい県ほど、交通の便が悪い傾向があります。車が必須になると維持費（月3〜5万円）がかかり、節約効果が相殺される場合も。公共交通機関の充実度も必ず確認しましょう。' },
            { icon: '💼', title: '仕事・収入の見通しを立てる', body: '生活費が下がっても収入が大幅に減ると本末転倒。リモートワーク継続か、現地での転職先を確保してから移住するのが鉄則です。地方特化の転職サービスも活用しましょう。' },
            { icon: '🏥', title: '医療・教育環境も重要', body: '特に子育て世帯やシニア層は、近くに病院・学校があるか確認が必要です。スコアが低い県でも、県庁所在地周辺なら医療・教育施設が充実していることが多いです。' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, padding: '16px', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border)', marginBottom: 10 }}>
              <span style={{ fontSize: 26, flexShrink: 0 }}>{p.icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{p.title}</div>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* シミュレーターCTA */}
        <section style={{ background: 'linear-gradient(135deg,var(--green-dark),var(--green))', borderRadius: 'var(--radius-xl)', padding: '28px 24px', textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 8 }}>あなたの住所から節約額を計算する</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 20, lineHeight: 1.7 }}>
            現住所・移住先・月収を入力するだけ。<br />移住支援金の有無もわかります。
          </p>
          <Link href="/" style={{
            display: 'inline-block', background: '#fff', color: 'var(--green-dark)',
            fontWeight: 800, fontSize: 15, padding: '14px 32px', borderRadius: 'var(--radius-md)',
            textDecoration: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}>
            無料でシミュレーションする →
          </Link>
        </section>

        {/* 関連リンク */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>関連記事</p>
          <Link href="/blog/cost-ranking" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border)', textDecoration: 'none', color: 'var(--text)', fontSize: 14, fontWeight: 600 }}>
            🏆 生活費が安い都道府県ランキング47選 →
          </Link>
          <Link href="/blog/shienkin" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border)', textDecoration: 'none', color: 'var(--text)', fontSize: 14, fontWeight: 600 }}>
            💴 移住支援金・補助金まとめ｜最大100万円の制度一覧 →
          </Link>
        </div>

      </main>

      <footer style={{ padding: '20px 24px 32px', fontSize: 11, color: 'var(--text-light)', textAlign: 'center', lineHeight: 1.8 }}>
        データ出典：総務省「消費者物価地域差指数」「家計調査」�� © 2025 くらし比較ナビ
      </footer>
    </div>
  )
}
