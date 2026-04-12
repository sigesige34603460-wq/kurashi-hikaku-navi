import Link from 'next/link'
import Header from '@/components/Header'
import { rankCities } from '@/data/cities'

export const metadata = {
  title: '生活費が安い都道府県ランキング47選【2024年最新版】 | くらし比較ナビ',
  description: '総務省データをもとに生活費（家賃・食費・光熱費）が安い都道府県を47位まで完全ランキング。東京からの移住で月いくら節約できるかも一覧で確認できます。',
  openGraph: {
    title: '生活費が安い都道府県ランキング47選【2024年最新版】',
    description: '総務省データをもとに生活費が安い都道府県を完全ランキング。移住先選びの参考に。',
    url: 'https://www.kurashi-hikaku.net/blog/cost-ranking',
  },
}

const sorted = [...rankCities].sort((a, b) => b.cost - a.cost)

const medalColor = (i: number) => {
  if (i === 0) return '#FFD700'
  if (i === 1) return '#C0C0C0'
  if (i === 2) return '#CD7F32'
  return 'var(--text-muted)'
}

export default function CostRankingPage() {
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
            {' › '}コラム
          </div>
          <p style={{ fontSize: 11, background: 'rgba(255,255,255,0.15)', color: '#fff', display: 'inline-block', padding: '3px 12px', borderRadius: 100, marginBottom: 12 }}>
            総務省データ準拠 · 2024年最新版
          </p>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: '#fff', lineHeight: 1.4, marginBottom: 10 }}>
            生活費が安い都道府県<br />ランキング47選
          </h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
            家賃・食費・光熱費の合計をもとに、全47都道府県の生活コストを比較しました。
            地方移住の候補地選びや、節約効果の試算にお役立てください。
          </p>
        </div>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '24px 16px 64px' }}>

        {/* 目次 */}
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '20px', marginBottom: 24, border: '1.5px solid var(--border)' }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 10 }}>この記事の内容</p>
          <ol style={{ margin: 0, padding: '0 0 0 18px', fontSize: 13, color: 'var(--green-dark)', lineHeight: 2 }}>
            <li><a href="#ranking" style={{ color: 'var(--green-dark)' }}>生活費ランキング TOP10</a></li>
            <li><a href="#all" style={{ color: 'var(--green-dark)' }}>全47都道府県の一覧</a></li>
            <li><a href="#howto" style={{ color: 'var(--green-dark)' }}>移住で節約するためのポイント</a></li>
            <li><a href="#sim" style={{ color: 'var(--green-dark)' }}>あなたの節約額をシミュレーション</a></li>
          </ol>
        </div>

        {/* ランキングTOP10 */}
        <section id="ranking" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 6 }}>
            🏆 生活費ランキング TOP10
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16, lineHeight: 1.7 }}>
            以下は、家賃・食費・光熱費を総合した「生活コストスコア」の上位10都道府県です。
            スコアが高いほど生活費が安く、東京（スコア約30）との差が大きいほど節約効果も大きくなります。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {sorted.slice(0, 10).map((c, i) => (
              <Link key={c.id} href={`/cities/${c.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: 'var(--white)', borderRadius: 'var(--radius-lg)',
                  padding: '14px 16px', border: '1.5px solid var(--border)',
                  boxShadow: i < 3 ? '0 2px 8px rgba(45,106,79,0.12)' : 'none',
                  transition: 'transform 0.15s',
                }}>
                  <span style={{ fontSize: i < 3 ? 22 : 16, fontWeight: 800, color: medalColor(i), width: 32, textAlign: 'center', flexShrink: 0 }}>
                    {i < 3 ? ['🥇','🥈','🥉'][i] : `${i+1}位`}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{c.pref}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>{c.name}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>生活コストスコア</div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--green-dark)' }}>{c.cost}</div>
                  </div>
                  <div style={{ width: 60, marginLeft: 4 }}>
                    <div style={{ height: 6, background: 'var(--green-light)', borderRadius: 100, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${c.cost}%`, background: 'linear-gradient(90deg,var(--green-dark),var(--green-mid))', borderRadius: 100 }} />
                    </div>
                  </div>
                  <span style={{ fontSize: 12, color: 'var(--green-mid)' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* アフィリエイトCTA① */}
        <div style={{ marginBottom: 32 }}>
          <a href="https://hikkoshi.suumo.jp/" target="_blank" rel="noopener noreferrer sponsored"
            style={{ display: 'block', background: 'linear-gradient(135deg,#E8F5E9,#F1F8E9)', border: '1.5px solid #81C784', borderRadius: 'var(--radius-lg)', padding: '18px 20px', textDecoration: 'none' }}>
            <div style={{ fontSize: 11, color: '#2E7D32', fontWeight: 700, marginBottom: 4 }}>PR</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1B5E20', marginBottom: 4 }}>移住の引越し費用を最大50%節約しよう</div>
            <div style={{ fontSize: 12, color: '#388E3C', marginBottom: 10 }}>SUUMO引越しなら最大10社から一括見積もり。地方移住の実績も豊富です。</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', background: '#2E7D32', display: 'inline-block', padding: '8px 20px', borderRadius: 8 }}>無料で見積もりを比較する →</div>
          </a>
        </div>

        {/* 全47都道府県一覧 */}
        <section id="all" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 6 }}>全47都道府県 生活費ランキング一覧</h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16, lineHeight: 1.7 }}>
            各都道府県名をタップすると、グルメ・観光スポット・移住補助金など詳細情報を確認できます。
          </p>
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1.5px solid var(--border)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr 64px 64px 64px', padding: '10px 16px', background: 'var(--green-dark)', fontSize: 11, fontWeight: 700, color: '#fff', gap: 4 }}>
              <span>順位</span><span>都市</span><span style={{textAlign:'center'}}>コスト</span><span style={{textAlign:'center'}}>利便性</span><span style={{textAlign:'center'}}>自然</span>
            </div>
            {sorted.map((c, i) => (
              <Link key={c.id} href={`/cities/${c.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '44px 1fr 64px 64px 64px',
                  padding: '10px 16px', gap: 4,
                  background: i % 2 === 0 ? 'var(--white)' : 'var(--green-pale)',
                  borderBottom: '1px solid var(--border)', alignItems: 'center',
                }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: i < 3 ? medalColor(i) : 'var(--text-muted)' }}>{i+1}位</span>
                  <div>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{c.pref}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{c.name}</div>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--green-dark)', textAlign: 'center' }}>{c.cost}</span>
                  <span style={{ fontSize: 13, color: '#2563EB', textAlign: 'center' }}>{c.conv}</span>
                  <span style={{ fontSize: 13, color: '#16a34a', textAlign: 'center' }}>{c.nat}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 移住で節約するポイント */}
        <section id="howto" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 16 }}>移住で節約するための3つのポイント</h2>
          {[
            { icon: '🏠', title: '家賃を下げることが最大の節約', body: '東京の平均家賃は約11万円。秋田・鳥取・島根などの地方都市では4万円台で1LDK〜2LDKが借りられます。��賃だけで月6〜7万円の差になり、年間で70〜80万円以上の節約につながります。' },
            { icon: '🛒', title: '食費は地方の方が安くて新鮮', body: '地方は産地直売所や農家からの直販が充実。新鮮な野菜・魚介が都市部の半額以下で手に入ることも珍しくありません。食費だけで月1〜2万円の節約が見込めます。' },
            { icon: '💴', title: '移住支援金・補助金を活用する', body: '東京圏から地方に移住する場合、国と自治体から合わせて最大100万円以上の支援金を受け取れるケースがあります。条件をしっかり確認しておきましょう。' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, padding: '16px', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border)', marginBottom: 12 }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>{p.icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{p.title}</div>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* アフィリエイトCTA② */}
        <div style={{ marginBottom: 32 }}>
          <a href="https://suumo.jp/chintai/" target="_blank" rel="noopener noreferrer sponsored"
            style={{ display: 'block', background: 'linear-gradient(135deg,#E3F2FD,#E8EAF6)', border: '1.5px solid #90CAF9', borderRadius: 'var(--radius-lg)', padding: '18px 20px', textDecoration: 'none' }}>
            <div style={{ fontSize: 11, color: '#1565C0', fontWeight: 700, marginBottom: 4 }}>PR</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#0D47A1', marginBottom: 4 }}>移住先の賃貸物件を今すぐ検索</div>
            <div style={{ fontSize: 12, color: '#1976D2', marginBottom: 10 }}>SUUMOなら全国の賃貸物件を一括検索。家賃相場の確認にも最適です。</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', background: '#1565C0', display: 'inline-block', padding: '8px 20px', borderRadius: 8 }}>物件を検索する →</div>
          </a>
        </div>

        {/* シミュレ���ターCTA */}
        <section id="sim" style={{ background: 'linear-gradient(135deg,var(--green-dark),var(--green))', borderRadius: 'var(--radius-xl)', padding: '28px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 8 }}>あなたの節約額を計算してみよう</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 20, lineHeight: 1.7 }}>
            今の住所と移住先を選ぶだけで、月々の節約���と<br />移住支援金の有無がすぐわかります。
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
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>関連記事</p>
          <Link href="/blog/tokyo-vs" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border)', textDecoration: 'none', color: 'var(--text)', fontSize: 14, fontWeight: 600 }}>
            📊 東京から移住したら月いくら節約できる？47都道府県比較 →
          </Link>
          <Link href="/blog/shienkin" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border)', textDecoration: 'none', color: 'var(--text)', fontSize: 14, fontWeight: 600 }}>
            💴 移住支援金・補助金まとめ｜最大100万円の制度一覧 →
          </Link>
        </div>

      </main>

      <footer style={{ padding: '20px 24px 32px', fontSize: 11, color: 'var(--text-light)', textAlign: 'center', lineHeight: 1.8 }}>
        データ出典：総務省「消費者物価地域差指数」「家計調査」· © 2025 くらし比較ナビ
      </footer>
    </div>
  )
}
