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

  // 公式サイトリンク（47都道府県）
  const officialSiteMap: Record<string, { city: string; pref: string }> = {
    hokkaido:  { city: 'https://www.city.sapporo.jp/',              pref: 'https://www.pref.hokkaido.lg.jp/' },
    aomori:    { city: 'https://www.city.aomori.aomori.jp/',        pref: 'https://www.pref.aomori.lg.jp/' },
    iwate:     { city: 'https://www.city.morioka.iwate.jp/',        pref: 'https://www.pref.iwate.jp/' },
    sendai:    { city: 'https://www.city.sendai.jp/',               pref: 'https://www.pref.miyagi.jp/' },
    akita:     { city: 'https://www.city.akita.lg.jp/',             pref: 'https://www.pref.akita.lg.jp/' },
    yamagata:  { city: 'https://www.city.yamagata.yamagata.jp/',    pref: 'https://www.pref.yamagata.jp/' },
    fukushima: { city: 'https://www.city.fukushima.fukushima.jp/',  pref: 'https://www.pref.fukushima.lg.jp/' },
    ibaraki:   { city: 'https://www.city.mito.lg.jp/',             pref: 'https://www.pref.ibaraki.jp/' },
    tochigi:   { city: 'https://www.city.utsunomiya.tochigi.jp/',   pref: 'https://www.pref.tochigi.lg.jp/' },
    maebashi:  { city: 'https://www.city.maebashi.gunma.jp/',       pref: 'https://www.pref.gunma.jp/' },
    chiba:     { city: 'https://www.city.chiba.jp/',                pref: 'https://www.pref.chiba.lg.jp/' },
    niigata:   { city: 'https://www.city.niigata.lg.jp/',           pref: 'https://www.pref.niigata.lg.jp/' },
    toyama:    { city: 'https://www.city.toyama.lg.jp/',            pref: 'https://www.pref.toyama.jp/' },
    kanazawa:  { city: 'https://www4.city.kanazawa.lg.jp/',         pref: 'https://www.pref.ishikawa.lg.jp/' },
    fukui:     { city: 'https://www.city.fukui.lg.jp/',             pref: 'https://www.pref.fukui.lg.jp/' },
    yamanashi: { city: 'https://www.city.kofu.yamanashi.jp/',       pref: 'https://www.pref.yamanashi.jp/' },
    nagano:    { city: 'https://www.city.nagano.nagano.jp/',        pref: 'https://www.pref.nagano.lg.jp/' },
    gifu:      { city: 'https://www.city.gifu.lg.jp/',              pref: 'https://www.pref.gifu.lg.jp/' },
    shizuoka:  { city: 'https://www.city.shizuoka.lg.jp/',          pref: 'https://www.pref.shizuoka.jp/' },
    mie:       { city: 'https://www.city.tsu.lg.jp/',               pref: 'https://www.pref.mie.lg.jp/' },
    shiga:     { city: 'https://www.city.otsu.lg.jp/',              pref: 'https://www.pref.shiga.lg.jp/' },
    kyoto:     { city: 'https://www.city.kyoto.lg.jp/',             pref: 'https://www.pref.kyoto.jp/' },
    hyogo:     { city: 'https://www.city.kobe.lg.jp/',              pref: 'https://web.pref.hyogo.lg.jp/' },
    nara:      { city: 'https://www.city.nara.lg.jp/',              pref: 'https://www.pref.nara.jp/' },
    wakayama:  { city: 'https://www.city.wakayama.wakayama.jp/',    pref: 'https://www.pref.wakayama.lg.jp/' },
    tottori:   { city: 'https://www.city.tottori.lg.jp/',           pref: 'https://www.pref.tottori.lg.jp/' },
    shimane:   { city: 'https://www.city.matsue.lg.jp/',            pref: 'https://www.pref.shimane.lg.jp/' },
    okayama:   { city: 'https://www.city.okayama.lg.jp/',           pref: 'https://www.pref.okayama.jp/' },
    hiroshima: { city: 'https://www.city.hiroshima.lg.jp/',         pref: 'https://www.pref.hiroshima.lg.jp/' },
    yamaguchi: { city: 'https://www.city.yamaguchi.lg.jp/',         pref: 'https://www.pref.yamaguchi.lg.jp/' },
    tokushima: { city: 'https://www.city.tokushima.tokushima.jp/',  pref: 'https://www.pref.tokushima.lg.jp/' },
    kagawa:    { city: 'https://www.city.takamatsu.kagawa.jp/',     pref: 'https://www.pref.kagawa.lg.jp/' },
    ehime:     { city: 'https://www.city.matsuyama.ehime.jp/',      pref: 'https://www.pref.ehime.jp/' },
    kochi:     { city: 'https://www.city.kochi.kochi.jp/',          pref: 'https://www.pref.kochi.lg.jp/' },
    fukuoka:   { city: 'https://www.city.fukuoka.lg.jp/',           pref: 'https://www.pref.fukuoka.lg.jp/' },
    saga:      { city: 'https://www.city.saga.lg.jp/',              pref: 'https://www.pref.saga.lg.jp/' },
    nagasaki:  { city: 'https://www.city.nagasaki.lg.jp/',          pref: 'https://www.pref.nagasaki.jp/' },
    kumamoto:  { city: 'https://www.city.kumamoto.jp/',             pref: 'https://www.pref.kumamoto.jp/' },
    oita:      { city: 'https://www.city.oita.oita.jp/',            pref: 'https://www.pref.oita.jp/' },
    miyazaki:  { city: 'https://www.city.miyazaki.miyazaki.jp/',    pref: 'https://www.pref.miyazaki.lg.jp/' },
    kagoshima: { city: 'https://www.city.kagoshima.lg.jp/',         pref: 'https://www.pref.kagoshima.jp/' },
    okinawa:   { city: 'https://www.city.naha.okinawa.jp/',         pref: 'https://www.pref.okinawa.jp/' },
  }
  const officialSite = officialSiteMap[params.id]

  // 食べログ 都道府県コード対応表（47都道府県）
  const tabelogPrefMap: Record<string, string> = {
    hokkaido:  'hokkaido',
    aomori:    'aomori',
    iwate:     'iwate',
    sendai:    'miyagi',
    akita:     'akita',
    yamagata:  'yamagata',
    fukushima: 'fukushima',
    ibaraki:   'ibaraki',
    tochigi:   'tochigi',
    maebashi:  'gunma',
    chiba:     'chiba',
    niigata:   'niigata',
    toyama:    'toyama',
    kanazawa:  'ishikawa',
    fukui:     'fukui',
    yamanashi: 'yamanashi',
    nagano:    'nagano',
    gifu:      'gifu',
    shizuoka:  'shizuoka',
    mie:       'mie',
    shiga:     'shiga',
    kyoto:     'kyoto',
    hyogo:     'hyogo',
    nara:      'nara',
    wakayama:  'wakayama',
    tottori:   'tottori',
    shimane:   'shimane',
    okayama:   'okayama',
    hiroshima: 'hiroshima',
    yamaguchi: 'yamaguchi',
    tokushima: 'tokushima',
    kagawa:    'kagawa',
    ehime:     'ehime',
    kochi:     'kochi',
    fukuoka:   'fukuoka',
    saga:      'saga',
    nagasaki:  'nagasaki',
    kumamoto:  'kumamoto',
    oita:      'oita',
    miyazaki:  'miyazaki',
    kagoshima: 'kagoshima',
    okinawa:   'okinawa',
  }
  // ホットペッパー エリアコード（47都道府県）
  const hotpepperAreaMap: Record<string, string> = {
    hokkaido:  'SA11',
    aomori:    'SA51',
    iwate:     'SA52',
    sendai:    'SA53',
    akita:     'SA54',
    yamagata:  'SA55',
    fukushima: 'SA56',
    ibaraki:   'SA12',
    tochigi:   'SA14',
    maebashi:  'SA17',
    chiba:     'SA21',
    niigata:   'SA61',
    toyama:    'SA62',
    kanazawa:  'SA63',
    fukui:     'SA64',
    yamanashi: 'SA65',
    nagano:    'SA66',
    gifu:      'SA67',
    shizuoka:  'SA68',
    mie:       'SA69',
    shiga:     'SA71',
    kyoto:     'SA72',
    hyogo:     'SA73',
    nara:      'SA76',
    wakayama:  'SA77',
    tottori:   'SA78',
    shimane:   'SA79',
    okayama:   'SA81',
    hiroshima: 'SA74',
    yamaguchi: 'SA82',
    tokushima: 'SA83',
    kagawa:    'SA84',
    ehime:     'SA85',
    kochi:     'SA86',
    fukuoka:   'SA91',
    saga:      'SA92',
    nagasaki:  'SA93',
    kumamoto:  'SA94',
    oita:      'SA95',
    miyazaki:  'SA96',
    kagoshima: 'SA97',
    okinawa:   'SA98',
  }
  // じゃらん観光 都道府県コード（6桁）
  const jalanPrefMap: Record<string, string> = {
    hokkaido:  '010000',
    aomori:    '020000',
    iwate:     '030000',
    sendai:    '040000',
    akita:     '050000',
    yamagata:  '060000',
    fukushima: '070000',
    ibaraki:   '080000',
    tochigi:   '090000',
    maebashi:  '100000',
    chiba:     '120000',
    niigata:   '150000',
    toyama:    '160000',
    kanazawa:  '170000',
    fukui:     '180000',
    yamanashi: '190000',
    nagano:    '200000',
    gifu:      '210000',
    shizuoka:  '220000',
    mie:       '240000',
    shiga:     '250000',
    kyoto:     '260000',
    hyogo:     '280000',
    nara:      '290000',
    wakayama:  '300000',
    tottori:   '310000',
    shimane:   '320000',
    okayama:   '330000',
    hiroshima: '340000',
    yamaguchi: '350000',
    tokushima: '360000',
    kagawa:    '370000',
    ehime:     '380000',
    kochi:     '390000',
    fukuoka:   '400000',
    saga:      '410000',
    nagasaki:  '420000',
    kumamoto:  '430000',
    oita:      '440000',
    miyazaki:  '450000',
    kagoshima: '460000',
    okinawa:   '470000',
  }
  const tabelogPref   = tabelogPrefMap[params.id]   ?? ''
  const hotpepperArea = hotpepperAreaMap[params.id]  ?? ''
  const jalanPref     = jalanPrefMap[params.id]      ?? ''

  // 料理名から食べログのジャンルコードを自動判定
  function getTabelogGenre(name: string): string | null {
    if (/ラーメン|らーめん|中華そば/.test(name)) return 'ramen'
    if (/寿司|すし|鮨|回転寿司/.test(name)) return 'sushi'
    if (/焼肉|ホルモン|もつ|モツ/.test(name)) return 'yakiniku'
    if (/居酒屋/.test(name)) return 'izakaya'
    if (/うどん|饂飩/.test(name)) return 'udon'
    if (/そば|蕎麦/.test(name)) return 'soba'
    if (/天ぷら|てんぷら/.test(name)) return 'tempura'
    if (/カレー/.test(name)) return 'curry'
    if (/鍋|なべ|水炊き|ちゃんこ/.test(name)) return 'nabe'
    if (/焼き鳥|焼鳥|串焼き|串/.test(name)) return 'yakitori'
    if (/中華|ちゃんぽん|餃子/.test(name)) return 'chinese'
    if (/海鮮|魚|刺身|牡蠣|カキ|海老|かに|カニ/.test(name)) return 'seafood'
    if (/ステーキ|ハンバーグ/.test(name)) return 'steak'
    if (/イタリアン|パスタ|ピザ/.test(name)) return 'italian'
    if (/フレンチ/.test(name)) return 'french'
    if (/焼き魚|定食/.test(name)) return 'teishoku'
    return null
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

        {/* 公式サイトリンク */}
        {officialSite && (
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '18px 20px', boxShadow: 'var(--shadow-sm)', border: '1.5px solid var(--border)' }}>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12, fontWeight: 600 }}>🏛️ 公式サイトで詳しい情報を確認</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a
                href={officialSite.city}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1, textAlign: 'center', padding: '10px 8px',
                  background: 'var(--green-pale)',
                  border: '1.5px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 13, fontWeight: 700, color: 'var(--green-dark)',
                  textDecoration: 'none',
                }}
              >
                🏙️ {city.name}公式サイト
              </a>
              <a
                href={officialSite.pref}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1, textAlign: 'center', padding: '10px 8px',
                  background: 'var(--earth-pale)',
                  border: '1.5px solid rgba(124,92,58,0.2)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 13, fontWeight: 700, color: 'var(--earth)',
                  textDecoration: 'none',
                }}
              >
                🗾 {city.pref}公式サイト
              </a>
            </div>
          </div>
        )}

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
          <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>🍜 ご当地グルメ</h2>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 16 }}>食べログで近くのお店を探せます</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {city.gourmet.map((g, i) => (
              <div key={i} style={{
                display: 'flex', flexDirection: 'column', gap: 8, padding: '12px',
                border: '1.5px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--earth-pale)',
              }}>
                <div style={{ display: 'flex', gap: 10 }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>🍽️</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>{g.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.65 }}>{g.desc}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <a
                    href={
                      getTabelogGenre(g.name)
                        ? `https://tabelog.com/${tabelogPref}/rstLst/${getTabelogGenre(g.name)}/`
                        : `https://tabelog.com/${tabelogPref}/rstLst/?sk=${encodeURIComponent(g.name)}`
                    }
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{
                      flex: 1, textAlign: 'center', fontSize: 11, fontWeight: 600,
                      padding: '5px 4px', borderRadius: 6,
                      background: '#e8f5e9', color: '#2D6A4F',
                      border: '1px solid rgba(45,106,79,0.2)',
                      textDecoration: 'none',
                    }}
                  >
                    食べログで探す
                  </a>
                  <a
                    href={`https://www.hotpepper.jp/${hotpepperArea}/lst/?keyword=${encodeURIComponent(g.name)}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{
                      flex: 1, textAlign: 'center', fontSize: 11, fontWeight: 600,
                      padding: '5px 4px', borderRadius: 6,
                      background: '#fff3e0', color: '#7C5C3A',
                      border: '1px solid rgba(124,92,58,0.2)',
                      textDecoration: 'none',
                    }}
                  >
                    ホットペッパー
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* おすすめスポット */}
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '24px 20px', boxShadow: 'var(--shadow-sm)', border: '1.5px solid var(--border)' }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>📍 おすすめスポット</h2>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 16 }}>地図や観光情報をすぐに確認できます</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {city.spots.map((s, i) => (
              <div key={i} style={{
                display: 'flex', flexDirection: 'column', gap: 8, padding: '12px',
                border: '1.5px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--green-pale)',
              }}>
                <div style={{ display: 'flex', gap: 10 }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>🗺️</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>{s.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.65 }}>{s.desc}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(s.name + ' ' + city.name)}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{
                      flex: 1, textAlign: 'center', fontSize: 11, fontWeight: 600,
                      padding: '5px 4px', borderRadius: 6,
                      background: '#e8f5e9', color: '#2D6A4F',
                      border: '1px solid rgba(45,106,79,0.2)',
                      textDecoration: 'none',
                    }}
                  >
                    Google マップ
                  </a>
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent('じゃらん観光 ' + s.name)}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{
                      flex: 1, textAlign: 'center', fontSize: 11, fontWeight: 600,
                      padding: '5px 4px', borderRadius: 6,
                      background: '#e3f2fd', color: '#0077B6',
                      border: '1px solid rgba(0,119,182,0.2)',
                      textDecoration: 'none',
                    }}
                  >
                    じゃらん観光
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 補助金・移住支援金 */}
        {city.subsidies && city.subsidies.length > 0 && (
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '24px 20px', boxShadow: 'var(--shadow-sm)', border: '1.5px solid rgba(124,92,58,0.25)' }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>💴 補助金・移住支援金</h2>
            <p style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 16 }}>※金額・条件は変更になる場合があります。最新情報は各公式サイトでご確認ください。</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {city.subsidies.map((s, i) => (
                <div key={i} style={{
                  padding: '16px',
                  background: 'var(--earth-pale)',
                  border: '1.5px solid rgba(124,92,58,0.2)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', flex: 1 }}>{s.title}</span>
                    <span style={{
                      fontSize: 13, fontWeight: 800, color: 'var(--earth)',
                      background: '#fff', padding: '2px 10px', borderRadius: 100,
                      border: '1.5px solid rgba(124,92,58,0.3)', whiteSpace: 'nowrap', flexShrink: 0,
                    }}>{s.amount}</span>
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 10 }}>{s.desc}</p>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block', fontSize: 11, fontWeight: 600,
                      color: 'var(--green-dark)', padding: '5px 12px',
                      background: 'var(--green-light)', borderRadius: 6,
                      border: '1px solid rgba(45,106,79,0.2)', textDecoration: 'none',
                    }}
                  >
                    公式サイトで詳しく見る →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

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
