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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="text-blue-600 hover:underline text-sm">← トップに戻る</Link>
          <span className="text-gray-400">|</span>
          <span className="font-bold text-gray-800">{city.name}（{city.pref}）</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">

        {/* ヒーロー */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 text-white">
          <p className="text-blue-100 text-sm mb-1">{city.pref}</p>
          <h1 className="text-3xl font-bold mb-3">{city.name}</h1>
          <p className="text-blue-50 text-lg leading-relaxed">{city.catchcopy}</p>
        </div>

        {/* スコア */}
        {rank && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">📊 住みやすさスコア</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: '生活コスト', value: rank.cost, color: 'bg-green-500' },
                { label: '利便性', value: rank.conv, color: 'bg-blue-500' },
                { label: '自然環境', value: rank.nat, color: 'bg-emerald-500' },
                { label: '医療', value: rank.med, color: 'bg-red-500' },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-1">{item.value}</div>
                  <div className="text-xs text-gray-500 mb-2">{item.label}</div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 移住のポイント */}
        {why.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">✅ 移住するメリット</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {why.map((w, i) => (
                <div key={i} className="flex gap-3 p-4 bg-blue-50 rounded-xl">
                  <span className="text-2xl">{iconMap[w.icon] ?? '📌'}</span>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm mb-1">{w.title}</div>
                    <div className="text-gray-600 text-xs leading-relaxed">{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ご当地グルメ */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">🍜 ご当地グルメ</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {city.gourmet.map((g, i) => (
              <div key={i} className="flex gap-3 p-4 border border-gray-100 rounded-xl hover:bg-orange-50 transition-colors">
                <span className="text-2xl">🍽️</span>
                <div>
                  <div className="font-semibold text-gray-800 text-sm mb-1">{g.name}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 観光・おすすめスポット */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📍 おすすめスポット</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {city.spots.map((s, i) => (
              <div key={i} className="flex gap-3 p-4 border border-gray-100 rounded-xl hover:bg-green-50 transition-colors">
                <span className="text-2xl">🗺️</span>
                <div>
                  <div className="font-semibold text-gray-800 text-sm mb-1">{s.name}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 移住のコツ */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">💡 移住のコツ</h2>
          <ul className="space-y-3">
            {city.tips.map((tip, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-700 text-sm leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 text-center">
          <p className="text-gray-600 mb-4">他の都市と比較してみましょう</p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            ← 都市比較トップへ
          </Link>
        </div>

      </main>
    </div>
  )
}
