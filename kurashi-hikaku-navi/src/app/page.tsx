"use client"
import { useState } from 'react'
import Header from '@/components/Header'
import Link from 'next/link'
import { simCities, rankCities, whyData } from '@/data/cities'
import styles from './page.module.css'

const FROM_OPTIONS = [
  // 北海道・東北
  { value: 'hokkaido',  label: '北海道（札幌市）' },
  { value: 'aomori',    label: '青森県（青森市）' },
  { value: 'iwate',     label: '岩手県（盛岡市）' },
  { value: 'sendai',    label: '宮城県（仙台市）' },
  { value: 'akita',     label: '秋田県（秋田市）' },
  { value: 'yamagata',  label: '山形県（山形市）' },
  { value: 'fukushima', label: '福島県（福島市）' },
  // 関東
  { value: 'ibaraki',   label: '茨城県（水戸市）' },
  { value: 'tochigi',   label: '栃木県（宇都宮市）' },
  { value: 'maebashi',  label: '群馬県（前橋市）' },
  { value: 'saitama',   label: '埼玉県（さいたま市）' },
  { value: 'chiba',     label: '千葉県（千葉市）' },
  { value: 'tokyo',     label: '東京都' },
  { value: 'kanagawa',  label: '神奈川県（横浜市）' },
  // 中部
  { value: 'niigata',   label: '新潟県（新潟市）' },
  { value: 'toyama',    label: '富山県（富山市）' },
  { value: 'kanazawa',  label: '石川県（金沢市）' },
  { value: 'fukui',     label: '福井県（福井市）' },
  { value: 'yamanashi', label: '山梨県（甲府市）' },
  { value: 'nagano',    label: '長野県（長野市）' },
  { value: 'gifu',      label: '岐阜県（岐阜市）' },
  { value: 'shizuoka',  label: '静岡県（静岡市）' },
  { value: 'aichi',     label: '愛知県（名古屋市）' },
  { value: 'mie',       label: '三重県（津市）' },
  // 近畿
  { value: 'shiga',     label: '滋賀県（大津市）' },
  { value: 'kyoto',     label: '京都府（京都市）' },
  { value: 'osaka',     label: '大阪府（大阪市）' },
  { value: 'hyogo',     label: '兵庫県（神戸市）' },
  { value: 'nara',      label: '奈良県（奈良市）' },
  { value: 'wakayama',  label: '和歌山県（和歌山市）' },
  // 中国・四国
  { value: 'tottori',   label: '鳥取県（鳥取市）' },
  { value: 'shimane',   label: '島根県（松江市）' },
  { value: 'okayama',   label: '岡山県（岡山市）' },
  { value: 'hiroshima', label: '広島県（広島市）' },
  { value: 'yamaguchi', label: '山口県（山口市）' },
  { value: 'tokushima', label: '徳島県（徳島市）' },
  { value: 'kagawa',    label: '香川県（高松市）' },
  { value: 'ehime',     label: '愛媛県（松山市）' },
  { value: 'kochi',     label: '高知県（高知市）' },
  // 九州・沖縄
  { value: 'fukuoka',   label: '福岡県（福岡市）' },
  { value: 'saga',      label: '佐賀県（佐賀市）' },
  { value: 'nagasaki',  label: '長崎県（長崎市）' },
  { value: 'kumamoto',  label: '熊本県（熊本市）' },
  { value: 'oita',      label: '大分県（大分市）' },
  { value: 'miyazaki',  label: '宮崎県（宮崎市）' },
  { value: 'kagoshima', label: '鹿児島県（鹿児島市）' },
  { value: 'okinawa',   label: '沖縄県（那覇市）' },
]

const TO_OPTIONS = [
  // 北海道・東北
  { value: 'hokkaido',  label: '北海道（札幌市）',   region: '北海道・東北' },
  { value: 'aomori',    label: '青森県（青森市）',   region: '北海道・東北' },
  { value: 'iwate',     label: '岩手県（盛岡市）',   region: '北海道・東北' },
  { value: 'sendai',    label: '宮城県（仙台市）',   region: '北海道・東北' },
  { value: 'akita',     label: '秋田県（秋田市）',   region: '北海道・東北' },
  { value: 'yamagata',  label: '山形県（山形市）',   region: '北海道・東北' },
  { value: 'fukushima', label: '福島県（福島市）',   region: '北海道・東北' },
  // 関東
  { value: 'ibaraki',   label: '茨城県（水戸市）',   region: '関東' },
  { value: 'tochigi',   label: '栃木県（宇都宮市）', region: '関東' },
  { value: 'maebashi',  label: '群馬県（前橋市）',   region: '関東' },
  { value: 'chiba',     label: '千葉県（千葉市）',   region: '関東' },
  // 中部
  { value: 'niigata',   label: '新潟県（新潟市）',   region: '中部' },
  { value: 'toyama',    label: '富山県（富山市）',   region: '中部' },
  { value: 'kanazawa',  label: '石川県（金沢市）',   region: '中部' },
  { value: 'fukui',     label: '福井県（福井市）',   region: '中部' },
  { value: 'yamanashi', label: '山梨県（甲府市）',   region: '中部' },
  { value: 'nagano',    label: '長野県（長野市）',   region: '中部' },
  { value: 'gifu',      label: '岐阜県（岐阜市）',   region: '中部' },
  { value: 'shizuoka',  label: '静岡県（静岡市）',   region: '中部' },
  { value: 'aichi',     label: '愛知県（名古屋市）', region: '中部' },
  { value: 'mie',       label: '三重県（津市）',     region: '中部' },
  // 近畿
  { value: 'shiga',     label: '滋賀県（大津市）',   region: '近畿' },
  { value: 'kyoto',     label: '京都府（京都市）',   region: '近畿' },
  { value: 'hyogo',     label: '兵庫県（神戸市）',   region: '近畿' },
  { value: 'nara',      label: '奈良県（奈良市）',   region: '近畿' },
  { value: 'wakayama',  label: '和歌山県（和歌山市）', region: '近畿' },
  // 中国・四国
  { value: 'tottori',   label: '鳥取県（鳥取市）',   region: '中国・四国' },
  { value: 'shimane',   label: '島根県（松江市）',   region: '中国・四国' },
  { value: 'okayama',   label: '岡山県（岡山市）',   region: '中国・四国' },
  { value: 'hiroshima', label: '広島県（広島市）',   region: '中国・四国' },
  { value: 'yamaguchi', label: '山口県（山口市）',   region: '中国・四国' },
  { value: 'tokushima', label: '徳島県（徳島市）',   region: '中国・四国' },
  { value: 'kagawa',    label: '香川県（高松市）',   region: '中国・四国' },
  { value: 'ehime',     label: '愛媛県（松山市）',   region: '中国・四国' },
  { value: 'kochi',     label: '高知県（高知市）',   region: '中国・四国' },
  // 九州・沖縄
  { value: 'fukuoka',   label: '福岡県（福岡市）',   region: '九州・沖縄' },
  { value: 'saga',      label: '佐賀県（佐賀市）',   region: '九州・沖縄' },
  { value: 'nagasaki',  label: '長崎県（長崎市）',   region: '九州・沖縄' },
  { value: 'kumamoto',  label: '熊本県（熊本市）',   region: '九州・沖縄' },
  { value: 'oita',      label: '大分県（大分市）',   region: '九州・沖縄' },
  { value: 'miyazaki',  label: '宮崎県（宮崎市）',   region: '九州・沖縄' },
  { value: 'kagoshima', label: '鹿児島県（鹿児島市）', region: '九州・沖縄' },
  { value: 'okinawa',   label: '沖縄県（那覇市）',   region: '九州・沖縄' },
]

const REGIONS = ['すべて', '北海道・東北', '関東', '中部', '近畿', '中国・四国', '九州・沖縄']

const iconBg = { cost: '#E1F5EE', conv: '#E6F1FB', nat: '#EAF3DE', med: '#FBEAF0' }
const iconColor = { cost: '#085041', conv: '#0C447C', nat: '#27500A', med: '#72243E' }

export default function Home() {
  const [income, setIncome] = useState(30)
  const [from, setFrom] = useState('tokyo')
  const [to, setTo] = useState('fukuoka')
  const [result, setResult] = useState(null)
  const [activeRegion, setActiveRegion] = useState('すべて')

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

  const tokyoBase = simCities['tokyo']
  const filteredCities = rankCities.filter(c => {
    if (activeRegion === 'すべて') return true
    const opt = TO_OPTIONS.find(o => o.value === c.id)
    return opt?.region === activeRegion
  })

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.tag}>総務省データ準拠 · 2024年最新版</div>
          <h1 className={styles.h1}>あなたにぴったりの<br />移住先、見つかります</h1>
          <p className={styles.lead}>月収と現住所を入力するだけ。節約額と住みやすさの理由がすぐわかります。</p>
          <div className={styles.steps}>
            {['収入を入力', '移住先を選ぶ', '結果を確認'].map((s, i) => (
              <div key={i} className={styles.stepWrap}>
                <div className={styles.step + (i < 2 ? ' ' + styles.stepOn : '')}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <span className={styles.stepLabel}>{s}</span>
                </div>
                {i < 2 && <span className={styles.stepSep}>›</span>}
              </div>
            ))}
          </div>
          <div className={styles.card}>
            <div className={styles.fieldLabel}>月収（手取り）はいくらですか？</div>
            <div className={styles.incomeRow}>
              <label className={styles.incomeLabel}>月収</label>
              <input type="range" min={15} max={60} step={1} value={income}
                onChange={e => setIncome(Number(e.target.value))} className={styles.slider} />
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
                <div className={styles.resultHero}>
                  <div className={styles.resultMain}>
                    <span className={styles.resultNum}>{Math.max(0, result.total).toLocaleString()}</span>
                    <span className={styles.resultUnit}>円 / 月の節約</span>
                  </div>
                  <p className={styles.resultDesc}>
                    {result.total > 0
                      ? result.fromName + 'から' + result.toName + 'への移住で、年間約' + Math.round(result.total * 12 / 10000) + '万円の節約が見込まれます。'
                      : result.toName + 'は' + result.fromName + 'より生活費が高めです。'}
                  </p>
                  {[
                    { label: '家賃', val: result.rent },
                    { label: '食費', val: result.food },
                    { label: '光熱費', val: result.util },
                  ].map(row => (
                    <div key={row.label} className={styles.barRow}>
                      <span className={styles.barLabel}>{row.label}</span>
                      <div className={styles.barBg}>
                        <div className={styles.barFill} style={{ width: Math.max(0, Math.round(row.val / maxSave * 100)) + '%' }} />
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
                <div className={styles.why}>
                  <div className={styles.whyTitle}>{result.toName}が住みやすい理由</div>
                  <div className={styles.whyPoints}>
                    {reasons.map((r, i) => (
                      <div key={i} className={styles.whyPoint}>
                        <div className={styles.whyIcon} style={{ background: iconBg[r.icon] }}>
                          <svg viewBox="0 0 13 13" fill="none" width="13" height="13">
                            {r.icon === 'cost' && <><circle cx="6.5" cy="6.5" r="5" stroke={iconColor.cost} strokeWidth="1.2" /><path d="M6.5 4v1.5M6.5 7.5V9M5 6.5h3" stroke={iconColor.cost} strokeWidth="1.2" strokeLinecap="round" /></>}
                            {r.icon === 'conv' && <path d="M2 10l3-5 2.5 3L9 5l2 5" stroke={iconColor.conv} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />}
                            {r.icon === 'nat' && <><path d="M6.5 2L9 7H4L6.5 2z" stroke={iconColor.nat} strokeWidth="1.2" strokeLinejoin="round" /><path d="M3 10h7" stroke={iconColor.nat} strokeWidth="1.2" strokeLinecap="round" /></>}
                            {r.icon === 'med' && <><rect x="2" y="2" width="9" height="9" rx="2" stroke={iconColor.med} strokeWidth="1.2" /><path d="M6.5 4.5v4M4.5 6.5h4" stroke={iconColor.med} strokeWidth="1.2" strokeLinecap="round" /></>}
                          </svg>
                        </div>
                        <div className={styles.whyText}><strong>{r.title}</strong><br />{r.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link href={'/cities/' + to} className={styles.detailBtn}>
                  {result.toName}の詳細ページを見る →
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* 47都道府県一覧 */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>47都道府県から探す</h2>
            <span>東京からの月間節約額目安</span>
          </div>

          {/* 地方フィルタータブ */}
          <div className={styles.regionTabs}>
            {REGIONS.map(r => (
              <button
                key={r}
                className={styles.regionTab + (activeRegion === r ? ' ' + styles.regionTabActive : '')}
                onClick={() => setActiveRegion(r)}
              >
                {r}
              </button>
            ))}
          </div>

          <div className={styles.prefGrid}>
            {filteredCities.map(c => {
              const city = simCities[c.id]
              const saving = city
                ? tokyoBase.rent + tokyoBase.food + tokyoBase.util - city.rent - city.food - city.util
                : 0
              const savingMan = Math.round(saving / 10000 * 10) / 10
              return (
                <Link key={c.id} href={'/cities/' + c.id} className={styles.prefCard}>
                  <div className={styles.prefCardPref}>{c.pref}</div>
                  <div className={styles.prefCardCity}>{c.name}</div>
                  <div className={styles.prefCardSaving}>
                    {saving > 0 ? (
                      <><span className={styles.prefCardSavingNum}>月{savingMan}万円</span><span className={styles.prefCardSavingLabel}>節約</span></>
                    ) : (
                      <span className={styles.prefCardSavingMinus}>東京と同水準</span>
                    )}
                  </div>
                  <div className={styles.prefCardScores}>
                    <span title="コスト" style={{color:'var(--green-dark)'}}>¥{c.cost}</span>
                    <span title="利便" style={{color:'#2563EB'}}>🚃{c.conv}</span>
                    <span title="自然" style={{color:'#16a34a'}}>🌿{c.nat}</span>
                  </div>
                  <div className={styles.prefCardArrow}>詳しく見る →</div>
                </Link>
              )
            })}
          </div>
        </section>

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
        </section>
      </main>
      <footer className={styles.footer}>
        データ出典：総務省「消費者物価地域差指数」「家計調査」· © 2025 くらし比較ナビ
      </footer>
    </>
  )
}
