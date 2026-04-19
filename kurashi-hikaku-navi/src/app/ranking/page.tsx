'use client'
import { useState, useMemo } from 'react'
import Header from '@/components/Header'
import AffiliateBlock from '@/components/AffiliateBlock'
import { rankCities, whyData } from '@/data/cities'
import styles from './page.module.css'

type TabKey = 'all' | 'family' | 'remote' | 'senior'

const PRESETS: Record<TabKey, number[]> = {
  all:    [1, 1, 1, 1],
  family: [1, 2, 2, 2],
  remote: [2, 2, 3, 1],
  senior: [2, 1, 2, 3],
}

const TABS = [
  { key: 'all' as TabKey,    label: '総合' },
  { key: 'family' as TabKey, label: '子育て世帯' },
  { key: 'remote' as TabKey, label: 'リモートワーカー' },
  { key: 'senior' as TabKey, label: 'シニア・老後' },
]

const iconBg: Record<string, string> = {
  cost: '#E1F5EE', conv: '#E6F1FB', nat: '#EAF3DE', med: '#FBEAF0',
}
const iconColor: Record<string, string> = {
  cost: '#085041', conv: '#0C447C', nat: '#27500A', med: '#72243E',
}

export default function Ranking() {
  const [tab, setTab] = useState<TabKey>('all')
  const [weights, setWeights] = useState([1, 1, 1, 1])
  const [selected, setSelected] = useState<string | null>(null)

  function setTab2(key: TabKey) {
    setTab(key)
    setWeights(PRESETS[key])
    setSelected(null)
  }

  function setWeight(i: number, v: number) {
    const w = [...weights]
    w[i] = v
    setWeights(w)
  }

  const ranked = useMemo(() => {
    const [wc, wv, wn, wm] = weights
    const total = wc + wv + wn + wm || 1
    return [...rankCities]
      .map(c => ({ ...c, score: Math.round((c.cost * wc + c.conv * wv + c.nat * wn + c.med * wm) / total) }))
      .sort((a, b) => b.score - a.score)
  }, [weights])

  const detail = selected ? ranked.find(c => c.id === selected) : null
  const reasons = selected ? (whyData[selected] ?? []) : []

  const BARS = [
    { key: 'cost', label: '生活費',  color: '#1D9E75' },
    { key: 'conv', label: '利便性',  color: '#378ADD' },
    { key: 'nat',  label: '自然',    color: '#639922' },
    { key: 'med',  label: '医療',    color: '#D4537E' },
  ] as const

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.pageHead}>
          <div className={styles.tag}>総務省・国土交通省データ準拠</div>
          <h1 className={styles.h1}>住みやすさランキング</h1>
          <p className={styles.lead}>4つの指標を自分の優先順位で調整。あなたにとって最高の移住先を探せます。</p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {TABS.map(t => (
            <button key={t.key} className={`${styles.tab} ${tab === t.key ? styles.tabOn : ''}`} onClick={() => setTab2(t.key)}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Weights */}
        <div className={styles.weights}>
          <span className={styles.weightsLabel}>重みを調整：</span>
          {['生活費', '利便性', '自然環境', '医療'].map((label, i) => (
            <div key={i} className={styles.wRow}>
              <label className={styles.wLabel}>{label}</label>
              <input type="range" min={0} max={3} step={1} value={weights[i]}
                onChange={e => setWeight(i, Number(e.target.value))}
                className={styles.wSlider}
              />
              <span className={styles.wVal}>×{weights[i]}</span>
            </div>
          ))}
        </div>

        {/* Rank list */}
        <div className={styles.rankList}>
          <div className={styles.rankHead}>
            <div></div>
            <div>都市</div>
            {BARS.map(b => <div key={b.key} style={{ textAlign: 'right' }}>{b.label}</div>)}
            <div style={{ textAlign: 'right' }}>総合</div>
          </div>

          {ranked.map((c, i) => (
            <div
              key={c.id}
              className={`${styles.rankRow} ${selected === c.id ? styles.rankRowSelected : ''}`}
              onClick={() => setSelected(selected === c.id ? null : c.id)}
            >
              <div className={`${styles.rankNum} ${i === 0 ? styles.g1 : i === 1 ? styles.g2 : i === 2 ? styles.g3 : ''}`}>
                {i + 1}
              </div>
              <div>
                <div className={styles.cityName}>{c.name}</div>
                <div className={styles.cityPref}>{c.pref}</div>
              </div>
              {BARS.map(b => (
                <div key={b.key} className={styles.scoreCell}>
                  <div className={styles.scoreBarBg}>
                    <div className={styles.scoreBarFill} style={{ width: `${(c as Record<string,number>)[b.key]}%`, background: b.color }} />
                  </div>
                  <span className={styles.scoreNum}>{(c as Record<string,number>)[b.key]}</span>
                </div>
              ))}
              <div className={styles.totalScore}>{c.score}</div>
            </div>
          ))}
        </div>

        {/* Detail */}
        {detail && (
          <div className={styles.detail}>
            <div className={styles.detailHead}>
              <span className={styles.detailName}>{detail.name}</span>
              <span className={styles.detailScore}>総合スコア {detail.score} / 100</span>
            </div>
            <div className={styles.detailReasons}>
              {reasons.map((r, i) => (
                <div key={i} className={styles.reason}>
                  <div className={styles.reasonIcon} style={{ background: iconBg[r.icon] }}>
                    <svg viewBox="0 0 13 13" fill="none" width="13" height="13">
                      {r.icon === 'cost' && <><circle cx="6.5" cy="6.5" r="5" stroke={iconColor.cost} strokeWidth="1.2" /><path d="M6.5 4v1.5M6.5 7.5V9M5 6.5h3" stroke={iconColor.cost} strokeWidth="1.2" strokeLinecap="round" /></>}
                      {r.icon === 'conv' && <path d="M2 10l3-5 2.5 3L9 5l2 5" stroke={iconColor.conv} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />}
                      {r.icon === 'nat'  && <><path d="M6.5 2L9 7H4L6.5 2z" stroke={iconColor.nat} strokeWidth="1.2" strokeLinejoin="round" /><path d="M3 10h7" stroke={iconColor.nat} strokeWidth="1.2" strokeLinecap="round" /></>}
                      {r.icon === 'med'  && <><rect x="2" y="2" width="9" height="9" rx="2" stroke={iconColor.med} strokeWidth="1.2" /><path d="M6.5 4.5v4M4.5 6.5h4" stroke={iconColor.med} strokeWidth="1.2" strokeLinecap="round" /></>}
                    </svg>
                  </div>
                  <div>
                    <div className={styles.reasonTitle}>{r.title}</div>
                    <div className={styles.reasonDesc}>{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className={styles.legend}>
          {BARS.map(b => (
            <div key={b.key} className={styles.legendItem}>
              <div className={styles.legendDot} style={{ background: b.color }} />
              {b.label}
            </div>
          ))}
        </div>

        <div style={{ padding: '8px 0' }}>
          <AffiliateBlock heading="移住先が決まったら次のステップへ" />
        </div>

        <footer className={styles.footer}>
          データ出典：総務省「消費者物価地域差指数」· 国土交通省「都市構造評価」· © 2025 くらし比較ナビ
        </footer>
      </main>
    </>
  )
}
