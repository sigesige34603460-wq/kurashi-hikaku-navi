import Link from 'next/link'
import Header from '@/components/Header'
import { cityDetails } from '@/data/cityDetails'
import { rankCities } from '@/data/cities'

export const metadata = {
  title: '移住支援金・補助金まとめ2024｜最大100万円もらえる制度完全ガイド | くらし比較ナビ',
  description: '地方移住でもらえる支援金・補助金を完全まとめ。国の移住支援金（最大100万円）から各都道府県の独自補助まで、申請条件・金額・窓口を一覧で紹介。',
  openGraph: {
    title: '移住支援金・補助金まとめ2024｜最大100万円もらえる制度完全ガイド',
    description: '地方移住でもらえる支援金・補助金を完全まとめ。国の制度から都道府県独自補助まで一覧で紹介。',
    url: 'https://www.kurashi-hikaku.net/blog/shienkin',
  },
}

const cityList = rankCities
  .map(c => ({ ...c, detail: cityDetails[c.id] }))
  .filter(c => c.detail?.subsidies?.length)

export default function ShienkinPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--green-pale)' }}>
      <Header />

      {/* ヒーロー */}
      <div style={{
        background: 'linear-gradient(160deg,#5C3A1E 0%,#7C5C3A 100%)',
        padding: '40px 20px 32px',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>トップ</Link>
            {' › '}コラム
          </div>
          <p style={{ fontSize: 11, background: 'rgba(255,255,255,0.15)', color: '#fff', display: 'inline-block', padding: '3px 12px', borderRadius: 100, marginBottom: 12 }}>
            2024年最新版 · 随時更新
          </p>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1.45, marginBottom: 10 }}>
            移住支援金・補助金まとめ<br />最大100万円もらえる制度ガイド
          </h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
            東京圏から地方に移住するだけで、国と自治体から合わせて100万円以上の支援金を受け取れる可能性があります。
            申請条件・対象者・手続きの流れをわかりやすく解説します。
          </p>
        </div>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '24px 16px 64px' }}>

        {/* 目次 */}
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '20px', marginBottom: 24, border: '1.5px solid var(--border)' }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 10 }}>この記事の内容</p>
          <ol style={{ margin: 0, padding: '0 0 0 18px', fontSize: 13, color: 'var(--earth)', lineHeight: 2.2 }}>
            <li><a href="#national" style={{ color: 'var(--earth)' }}>国の移住支援金制度（最大100万円）</a></li>
            <li><a href="#flow" style={{ color: 'var(--earth)' }}>申請の流れ・注意点</a></li>
            <li><a href="#list" style={{ color: 'var(--earth)' }}>都道府県別の補助金一覧</a></li>
            <li><a href="#sim" style={{ color: 'var(--earth)' }}>節約額をシミュレーションする</a></li>
          </ol>
        </div>

        {/* 国の制度 */}
        <section id="national" style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 16 }}>国の移住支援金制度（最大100万円）</h2>
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1.5px solid rgba(124,92,58,0.3)', padding: '20px', marginBottom: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              {[
                { label: '世帯での移住', amount: '最大100万円', note: '夫婦2人での移住が対象' },
                { label: '単身での移住', amount: '最大60万円', note: '1人での移住が対象' },
                { label: '18歳未満の子1人', amount: '＋100万円', note: '子どもがいる世帯に加算' },
                { label: 'テレワーク移住', amount: '最大100万円', note: '東京圏の仕事を継続しながら移住' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--earth-pale)', borderRadius: 'var(--radius-md)', padding: '14px', border: '1px solid rgba(124,92,58,0.15)' }}>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--earth)' }}>{s.amount}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 4 }}>{s.note}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
              ※上記は移住支援金の上限額です。実際の金額は各都道府県・市区町村の条件によって異なります。
              東京23区在住者または東京圏（東京・神奈川・埼玉・千葉）からの転出が対象。
              就業先や移住先の要件を必ず確認してください。
            </p>
          </div>
        </section>

        {/* 申請の流れ */}
        <section id="flow" style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 16 }}>申請の流れ・よくある失敗</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { step: 'STEP 1', title: '移住先の市区町村に事前確認', body: '支援金の対象条件（転入元・就業先・居住期間など）は自治体ごとに異なります。移住前に必ず市区町村の移住担当窓口に確認しましょう。', warn: false },
              { step: 'STEP 2', title: '対象求人への就業 or テレワーク確認', body: '就業型の支援金は「マッチングサイトに掲載された求人」への就業が条件。テレワーク型は東京圏の会社に勤めながら移住するケースが対象です。', warn: false },
              { step: 'STEP 3', title: '転入届の提出', body: '移住後に住民票を移す手続き。申請期限（転入後3ヶ月以内など）が設けられている場合が多いため、早めに手続きを進めましょう。', warn: true },
              { step: 'STEP 4', title: '支援金の申請・受給', body: '転入後に必要書類（就業証明・住民票など）を揃えて市区町村に申請します。支給まで1〜3ヶ月程度かかるケースが多いです。', warn: false },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '16px', background: s.warn ? '#FFF8E1' : 'var(--white)', borderRadius: 'var(--radius-lg)', border: `1.5px solid ${s.warn ? '#FFC107' : 'var(--border)'}` }}>
                <div style={{ flexShrink: 0, width: 56, height: 56, background: s.warn ? '#FFC107' : 'var(--earth)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#fff', textAlign: 'center', lineHeight: 1.3 }}>
                  {s.step}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
                    {s.warn && '⚠️ '}{s.title}
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* アフィリエイトCTA */}
        <div style={{ marginBottom: 28 }}>
          <a href="https://hikkoshi.suumo.jp/" target="_blank" rel="noopener noreferrer sponsored"
            style={{ display: 'block', background: 'linear-gradient(135deg,#E8F5E9,#F1F8E9)', border: '1.5px solid #81C784', borderRadius: 'var(--radius-lg)', padding: '18px 20px', textDecoration: 'none' }}>
            <div style={{ fontSize: 11, color: '#2E7D32', fontWeight: 700, marginBottom: 4 }}>PR</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1B5E20', marginBottom: 4 }}>引越し費用も節約して移住をスタート</div>
            <div style={{ fontSize: 12, color: '#388E3C', marginBottom: 10 }}>SUUMO引越しで最大10社から一括見積もり。支援金＋引越し節約のダブル効果で移住コストを最���化。</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', background: '#2E7D32', display: 'inline-block', padding: '8px 20px', borderRadius: 8 }}>無料で見積もりを比較する →</div>
          </a>
        </div>

        {/* 都道府県別補助金一覧 */}
        <section id="list" style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 6 }}>都道府県別の補助金・支援制度一覧</h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16, lineHeight: 1.7 }}>
            各都道府県の代表的な支援制度をまとめました。都市名をタップすると詳細・申請リンクを確認できます。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {cityList.map(c => (
              <div key={c.id} style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border)', overflow: 'hidden' }}>
                <Link href={`/cities/${c.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--earth-pale)', borderBottom: '1px solid rgba(124,92,58,0.15)' }}>
                    <div>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{c.pref} · </span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{c.name}</span>
                    </div>
                    <span style={{ fontSize: 12, color: 'var(--earth)', fontWeight: 600 }}>詳細を見る →</span>
                  </div>
                </Link>
                <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {c.detail.subsidies.map((s, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>{s.title}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{s.desc.slice(0, 50)}…</div>
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--earth)', whiteSpace: 'nowrap', flexShrink: 0, background: 'var(--earth-light)', padding: '2px 8px', borderRadius: 6 }}>
                        {s.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 賃貸CTA */}
        <div style={{ marginBottom: 28 }}>
          <a href="https://suumo.jp/chintai/" target="_blank" rel="noopener noreferrer sponsored"
            style={{ display: 'block', background: 'linear-gradient(135deg,#E3F2FD,#E8EAF6)', border: '1.5px solid #90CAF9', borderRadius: 'var(--radius-lg)', padding: '18px 20px', textDecoration: 'none' }}>
            <div style={{ fontSize: 11, color: '#1565C0', fontWeight: 700, marginBottom: 4 }}>PR</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#0D47A1', marginBottom: 4 }}>移住先の賃貸物件を今すぐ検索</div>
            <div style={{ fontSize: 12, color: '#1976D2', marginBottom: 10 }}>補助金対象エリアで格安物件を探す。SUUMOで全国の賃貸物件を一括検索。</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', background: '#1565C0', display: 'inline-block', padding: '8px 20px', borderRadius: 8 }}>物件を検索する →</div>
          </a>
        </div>

        {/* シミュレーターCTA */}
        <section id="sim" style={{ background: 'linear-gradient(135deg,var(--green-dark),var(--green))', borderRadius: 'var(--radius-xl)', padding: '28px 24px', textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 8 }}>支援金＋節約額をまとめて確認する</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 20, lineHeight: 1.7 }}>
            移住先を選ぶと、月々の節約額と<br />支援金の有無が一画面でわかります。
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
          <Link href="/blog/tokyo-vs" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border)', textDecoration: 'none', color: 'var(--text)', fontSize: 14, fontWeight: 600 }}>
            📊 東京から移住したら月いくら節約できる？47都道府県比較 →
          </Link>
        </div>

      </main>

      <footer style={{ padding: '20px 24px 32px', fontSize: 11, color: 'var(--text-light)', textAlign: 'center', lineHeight: 1.8 }}>
        ※掲載内容は2024年時点の情報です。制度は変更される場合があるため、必ず各自治体の公式サイトでご確認ください。<br />
        © 2025 くらし比較ナビ
      </footer>
    </div>
  )
}
