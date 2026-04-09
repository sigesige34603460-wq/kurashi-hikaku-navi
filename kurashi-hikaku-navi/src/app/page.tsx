"use client"
import { useState } from 'react'
import Header from '@/components/Header'
import { simCities, whyData } from '@/data/cities'
import Link from 'next/link'
import styles from './page.module.css'

const FROM_OPTIONS = [
  { value: 'tokyo',    label: '東京都' },
  { value: 'kanagawa', label: '神奈川県' },
  { value: 'osaka',    label: '大阪府' },
  { value: 'aichi',    label: '愛知県' },
  { value: 'saitama',  label: '埼玉県' },
]

const TO_OPTIONS = [
  { value: 'fukuoka',   label: '福岡市（福岡県）' },
  { value: 'sendai',    label: '仙台市（宮城県）' },
  { value: 'hiroshima', label: '広島市（広島県）' },
  { value: 'nagano',    label: '長野市（長野県）' },
  { value: 'miyazaki',  label: '宮崎市（宮崎県）' },
  { value: 'kumamoto',  label: '熊本市（熊本県）' },
  { value: 'kanazawa',  label: '金沢市（石川県）' },
  { value: 'maebashi',  label: '前橋市（群馬県）' },
]

const iconBg: Record<string, string> = {
  cost: '#E1F5EE', conv: '#E6F1FB', nat: '#EAF3DE', med: '#FBEAF0',
}

const iconColor: Record<string, string> = {
  cost: '#085041', conv: '#0C447C', nat: '#27500A', med: '#72243E',
}

export default function Home() {
  const [income, setIncome] = useState(30)
  const [from, setFrom] = useState('tokyo')
  const [to, setTo] = useState('fukuoka')
  const [result, setResult] = useState<{
    total: number; rent: number; food: number; util: number;
    fromName: string; toName: string; grant: number;
  } | null>(null)

  function simulate() {
    const f = simCities[from]
    const t = simCities[to]
    setResult({
      total: f.rent + f.food + f.util - t.rent - t.food - t.util,
      rent:  f.rent - t.rent,
      food:  f.food - t.food,
      util:  f.util - t.util,
      fromName: FROM_OPTIONS.find(o => o.value === from)?.label ?? '',
      toName:   TO_OPTIONS.find(o => o.value === to)?.label ?? '',
      grant: t.grant,
    })
  }

  const reasons = whyData[to] ?? []
  const maxSave = 65000

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.tag}>総務省データ準拠 · 2024年最新版</div>
          <h1 className={styles.h1}>あなたにぴったりの<br />移住先、見つかります</h1>
          <p className={styles.lead}>月収と現住所を入力するだけ。節約額と住みやすさの理由がすぐわかります。</p>

          {/* Steps */}
          <div className={styles.steps}>
            {['収入を入力', '移住先を選ぶ', '結果を確認'].map((s, i) => (
              <div key={i} className={styles.stepWrap}>
                <div className={`${styles.step} ${i < 2 ? styles.stepOn : ''}`}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <span className={styles.stepLabel}>{s}</span>
                </div>
                {i < 2 && <span className={styles.stepSep}>›</span>}
              </div>
            ))}
          </div>

          {/* Sim Card */}
          <div className={styles.card}>
            <div className={styles.fieldLabel}>月収（手取り）はいくらですか？</div>
            <div className={styles.incomeRow}>
              <label className={styles.incomeLabel}>月収</label>
              <input
                type="range" min={15} max={60} step={1} value={income}
                onChange={e => setIncome(Number(e.target.value))}
                className={styles.slider}
              />
              <span className={styles.incomeVal}>{income}万円</span>
            </div>

            <div className={styles.fieldLabel}>どこからどこへ移住しますか？</div>
            <div className={styles.cityRow}>
              <select value={from} onChange={e => setFrom(e.target.value)} className={styles.select}>
                {FROM_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <span className={styles.arrow}>→</span>
              <select value={to} onChange={e => setTo(e.target.value)} className={styles.select}>
                {TO_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>

            <button className={styles.btn} onClick={simulate}>節約額と住みやすさを確認する</button>

            {result && (
              <div className={styles.result}>
                {/* 節約額 */}
                <div className={styles.resultHero}>
                  <div className={styles.resultMain}>
                    <span className={styles.resultNum}>{Math.max(0, result.total).toLocaleString()}</span>
                    <span className={styles.resultUnit}>円 / 月の節約</span>
                  </div>
                  <p className={styles.resultDesc}>
                    {result.total > 0
                      ? `${result.fromName}から${result.toName}への移住で、年間約${Math.round(result.total * 12 / 10000)}万円の節約が見込まれます。`
                      : `${result.toName}は${result.fromName}より生活費が高めです。`}
                  </p>
                  {/* バー */}
                  {[
                    { label: '家賃',  val: result.rent },
                    { label: '食費',  val: result.food },
                    { label: '光熱費', val: result.util },
                  ].map(row => (
                    <div key={row.label} className={styles.barRow}>
                      <span className={styles.barLabel}>{row.label}</span>
                      <div className={styles.barBg}>
                        <div className={styles.barFill} style={{ width: `${Math.max(0, Math.round(row.val / maxSave * 100))}%` }} />
                      </div>
                      <span className={styles.barVal}>{Math.max(0, row.val).toLocaleString()}円</span>
                    </div>
                  ))}
                  {result.grant > 0 && (
                    <div className={styles.grant}>
                      <div className={styles.grantDot} />
                      <span>{result.toName}は移住支援金として最大{Math.round(result.grant / 10000)}万円を支給（条件あり）</span>
                    </div>
                  )}
                </div>

                {/* 住みやすい理由 */}
                <div className={styles.why}>
                  <div className={styles.whyTitle}>{result.toName}が住みやすい理由</div>
                  <div className={styles.whyPoints}>
                    {reasons.map((r, i) => (
                      <div key={i} className={styles.whyPoint}>
                        <div className={styles.whyIcon} style={{ background: iconBg[r.icon] }}>
                          <svg viewBox="0 0 13 13" fill="none" width="13" height="13">
                            {r.icon === 'cost' && <><circle cx="6.5" cy="6.5" r="5" stroke={iconColor.cost} strokeWidth="1.2" /><path d="M6.5 4v1.5M6.5 7.5V9M5 6.5h3" stroke={iconColor.cost} strokeWidth="1.2" strokeLinecap="round" /></>}
                            {r.icon === 'conv' && <path d="M2 10l3-5 2.5 3L9 5l2 5" stroke={iconColor.conv} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />}
                            {r.icon === 'nat'  && <><path d="M6.5 2L9 7H4L6.5 2z" stroke={iconColor.nat} strokeWidth="1.2" strokeLinejoin="round" /><path d="M3 10h7" stroke={iconColor.nat} strokeWidth="1.2" strokeLinecap="round" /></>}
                            {r.icon === 'med'  && <><rect x="2" y="2" width="9" height="9" rx="2" stroke={iconColor.med} strokeWidth="1.2" /><path d="M6.5 4.5v4M4.5 6.5h4" stroke={iconColor.med} strokeWidth="1.2" strokeLinecap="round" /></>}
                          </svg>
                        </div>
                        <div className={styles.whyText}>
                          <strong>{r.title}</strong><br />{r.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* おすすめ都市カード */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>東京から移住すると？おすすめの街</h2>
            <span>月収30万円の場合</span>
          </div>
          <div className={styles.cityCards}>
            {[
              { id: 'fukuoka', name: '福岡市', pref: '福岡県', saving: '月4.2万円', sub: '年50万円以上の節約', badge: '都市機能◎', badgeType: 'green' },
              { id: 'miyazaki', name: '宮崎市', pref: '宮崎県', saving: '月5.8万円', sub: '年70万円以上の節約', badge: '自然豊か', badgeType: 'amber' },
              { id: 'maebashi', name: '前橋市', pref: '群馬県', saving: '月5.6万円', sub: '新幹線で東京へ1時間', badge: '東京通勤可', badgeType: 'green' },
            ].map((c, i) => (
              <div key={i} className={styles.cityCard}>
                <div className={styles.cityCardTop}>
                  <span className={styles.cityCardName}>{c.name}</span>
                  <span className={`${styles.badge} ${c.badgeType === 'amber' ? styles.badgeAmber : styles.badgeGreen}`}>{c.badge}</span>
                </div>
                <div className={styles.cityCardSaving}>{c.saving}</div>
                <div className={styles.cityCardSub}>{c.sub}</div>
              <Link href={`/cities/${c.id}`} className={styles.cityCardLink}>詳しく見る →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* 特徴 */}
        <section className={styles.section}>
          <div className={styles.sectionHead}><h2>このサイトでできること</h2></div>
          <div className={styles.features}>
            {[
              { title: 'すぐわかる', desc: '入力2項目で節約額を即計算' },
              { title: '公式データ', desc: '総務省の統計を元に算出' },
              { title: '支援金も確認', desc: '自治体の移住補助金を表示' },
            ].map((f, i) => (
              <div key={i} className={styles.feat}>
                <div className={styles.featIcon}>
                  <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                    <circle cx="8" cy="8" r="6" stroke="#1D9E75" strokeWidth="1.5" />
                    <path d="M5 8h6M8 5v6" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={styles.featTitle}>{f.title}</div>
                <div className={styles.featDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* アフィリエイトバナー */}
        <section style={{maxWidth:'480px',margin:'0 auto',padding:'0 16px 32px'}}>
          <p style={{fontSize:'13px',color:'#888',textAlign:'center',marginBottom:'10px'}}>移住準備に役立つサービス</p>
          <a href="https://hikkoshi.suumo.jp/" target="_blank" rel="noopener noreferrer sponsored" style={{display:'block',background:'#E8F5E9',border:'1px solid #4CAF50',borderRadius:'10px',padding:'14px 16px',marginBottom:'10px',textDecoration:'none',color:'#222'}}>
            <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>引越し費用を最大50%節約！</div>
            <div style={{fontSize:'12px',color:'#555',marginBottom:'8px'}}>SUUMO引越しで最大10社から一括見積もり。</div>
            <div style={{fontSize:'13px',fontWeight:600,color:'#1565C0'}}>無料で見積もりを比較する →</div>
          </a>
          <a href="https://suumo.jp/chintai/" target="_blank" rel="noopener noreferrer sponsored" style={{display:'block',background:'#E3F2FD',border:'1px solid #2196F3',borderRadius:'10px',padding:'14px 16px',textDecoration:'none',color:'#222'}}>
            <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>移住先の賃貸物件を探す</div>
            <div style={{fontSize:'12px',color:'#555',marginBottom:'8px'}}>全国の賃貸物件を検索。地方の格安物件も充実。</div>
            <div style={{fontSize:'13px',fontWeight:600,color:'#1565C0'}}>賃貸物件を検索する →</div>
          </a>
        </section>footer className={styles.footer}>
          データ出典：総務省「消費者物価地域差指数」「家計調査」· © 2025 くらし比較ナビ
        </footer>
      </main>
    </>
  )
}

