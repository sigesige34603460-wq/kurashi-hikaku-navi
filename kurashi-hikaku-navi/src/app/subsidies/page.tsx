'use client'
import { useState, useMemo } from 'react'
import Header from '@/components/Header'
import AffiliateBlock from '@/components/AffiliateBlock'
import RakutenBlock from '@/components/RakutenBlock'
import { subsidies, SubsidyTag, SubsidyLevel } from '@/data/subsidies'
import styles from './page.module.css'

type FilterKey = 'all' | SubsidyTag

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all',     label: 'すべて' },
  { key: 'nat',     label: '国の制度' },
  { key: 'pref',    label: '都道府県' },
  { key: 'city',    label: '市区町村' },
  { key: 'family',  label: '子育て世帯' },
  { key: 'work',    label: '起業・就業' },
  { key: 'housing', label: '住居支援' },
]

const LEVEL_LABEL: Record<SubsidyLevel, string> = {
  nat:  '国の制度',
  pref: '都道府県の制度',
  city: '市区町村の制度',
}

const LEVEL_COLOR: Record<SubsidyLevel, string> = {
  nat:  '#1D9E75',
  pref: '#378ADD',
  city: '#EF9F27',
}

const TAG_STYLE: Record<string, string> = {
  nat:     'tagNat',
  pref:    'tagPref',
  city:    'tagCity',
  family:  'tagFamily',
  work:    'tagWork',
  housing: 'tagHousing',
}

const TAG_LABEL: Record<string, string> = {
  nat: '国の制度', pref: '都道府県', city: '市区町村',
  family: '子育て', work: '起業・就業', housing: '住居',
}

export default function Subsidies() {
  const [filter, setFilter] = useState<FilterKey>('all')
  const [search, setSearch] = useState('')
  const [openId, setOpenId] = useState<number | null>(null)

  const filtered = useMemo(() => {
    return subsidies.filter(s => {
      const matchFilter = filter === 'all' || s.tags.includes(filter as SubsidyTag)
      const q = search.toLowerCase()
      const matchSearch = !q || s.name.toLowerCase().includes(q) || s.org.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)
      return matchFilter && matchSearch
    })
  }, [filter, search])

  const natItems  = filtered.filter(s => s.level === 'nat')
  const prefItems = filtered.filter(s => s.level === 'pref')
  const cityItems = filtered.filter(s => s.level === 'city')

  function toggle(id: number) {
    setOpenId(openId === id ? null : id)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero */}
        <div className={styles.pageHead}>
          <div className={styles.tag}>2025年最新情報</div>
          <h1 className={styles.h1}>移住・定住支援制度 完全ガイド</h1>
          <p className={styles.lead}>国・都道府県・市区町村の補助金・支援制度を一覧で確認。条件別に絞り込んで、あなたが受け取れる支援をすぐ探せます。</p>
        </div>

        {/* Summary */}
        <div className={styles.summary}>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}>{filtered.length}</span>
            <span className={styles.sumLabel}>掲載制度数</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}>最大<br />300万円</span>
            <span className={styles.sumLabel}>受給できる最大額</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}>併用<br />可能</span>
            <span className={styles.sumLabel}>複数制度の組み合わせ</span>
          </div>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <div className={styles.filterBtns}>
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`${styles.filterBtn} ${filter === f.key ? styles.filterBtnOn : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="制度名・地域で検索..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* List */}
        <div className={styles.list}>
          {filtered.length === 0 && (
            <div className={styles.empty}>条件に合う制度が見つかりませんでした。検索条件を変えてお試しください。</div>
          )}

          {[
            { items: natItems,  level: 'nat'  as SubsidyLevel },
            { items: prefItems, level: 'pref' as SubsidyLevel },
            { items: cityItems, level: 'city' as SubsidyLevel },
          ].map(({ items, level }) => items.length > 0 && (
            <div key={level}>
              <div className={styles.sectionTitle}>
                <div className={styles.sectionDot} style={{ background: LEVEL_COLOR[level] }} />
                {LEVEL_LABEL[level]}（{items.length}件）
              </div>
              {items.map(s => (
                <div key={s.id} className={styles.item} onClick={() => toggle(s.id)}>
                  <div className={styles.itemHead}>
                    <div className={styles.itemLeft}>
                      <div className={styles.itemName}>{s.name}</div>
                      <div className={styles.itemOrg}>{s.org}</div>
                    </div>
                    <div className={styles.itemAmount}>{s.amount}</div>
                  </div>
                  <div className={styles.itemTags}>
                    {s.tags.map(t => (
                      <span key={t} className={`${styles.tagPill} ${styles[TAG_STYLE[t]]}`}>{TAG_LABEL[t]}</span>
                    ))}
                  </div>
                  <div className={styles.itemDesc}>{s.desc}</div>

                  {openId === s.id && (
                    <div className={styles.itemDetail}>
                      <div className={styles.detailGrid}>
                        <div className={styles.detailRow}>
                          <div className={styles.detailLabel}>支給額の内訳</div>
                          <div className={styles.detailVal}>{s.amountSub}</div>
                        </div>
                        <div className={styles.detailRow}>
                          <div className={styles.detailLabel}>対象者</div>
                          <div className={styles.detailVal}>{s.target}</div>
                        </div>
                        <div className={styles.detailRow}>
                          <div className={styles.detailLabel}>主な条件</div>
                          <div className={styles.detailVal}>{s.condition}</div>
                        </div>
                        <div className={styles.detailRow}>
                          <div className={styles.detailLabel}>申請時期</div>
                          <div className={styles.detailVal}>{s.period}</div>
                        </div>
                      </div>
                      <div className={styles.detailRow} style={{ marginBottom: '6px' }}>
                        <div className={styles.detailLabel}>他制度との併用</div>
                        <div className={styles.detailVal}>{s.combine}</div>
                      </div>
                      <div className={styles.detailNote}>注意事項：{s.note}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ padding: '8px 0' }}>
          <AffiliateBlock heading="支援金を活用して移住の準備をはじめよう" />
        </div>
        <div style={{ padding: '8px 0 0' }}>
          <RakutenBlock />
        </div>

        <footer className={styles.footer}>
          ※掲載情報は2025年時点のものです。制度内容・条件は変更される場合があります。必ず各窓口で最新情報をご確認ください。<br />
          データ出典：内閣府地方創生推進事務局・各都道府県・市区町村公式情報 · © 2025 くらし比較ナビ
        </footer>
      </main>
    </>
  )
}
