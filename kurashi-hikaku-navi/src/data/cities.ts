export type CityKey =
  | 'tokyo' | 'kanagawa' | 'osaka' | 'aichi' | 'saitama'
  | 'fukuoka' | 'sendai' | 'hiroshima' | 'nagano'
  | 'miyazaki' | 'kumamoto' | 'kanazawa' | 'maebashi'

export interface SimCity {
  name: string
  rent: number
  food: number
  util: number
  grant: number
}

export interface RankCity {
  id: string
  name: string
  pref: string
  cost: number
  conv: number
  nat: number
  med: number
}

export interface WhyPoint {
  icon: 'cost' | 'conv' | 'nat' | 'med'
  title: string
  desc: string
}

export const simCities: Record<string, SimCity> = {
  tokyo:     { name: '東京都',   rent: 110000, food: 55000, util: 12000, grant: 0 },
  kanagawa:  { name: '神奈川県', rent: 95000,  food: 52000, util: 11500, grant: 0 },
  osaka:     { name: '大阪府',   rent: 75000,  food: 50000, util: 11000, grant: 0 },
  aichi:     { name: '愛知県',   rent: 68000,  food: 49000, util: 10500, grant: 0 },
  saitama:   { name: '埼玉県',   rent: 72000,  food: 50000, util: 11000, grant: 0 },
  fukuoka:   { name: '福岡市（福岡県）',   rent: 67000, food: 47000, util: 10000, grant: 1000000 },
  sendai:    { name: '仙台市（宮城県）',   rent: 60000, food: 46000, util: 10500, grant: 1000000 },
  hiroshima: { name: '広島市（広島県）',   rent: 62000, food: 46000, util: 10000, grant: 1000000 },
  nagano:    { name: '長野市（長野県）',   rent: 55000, food: 45000, util: 11000, grant: 1000000 },
  miyazaki:  { name: '宮崎市（宮崎県）',   rent: 48000, food: 44000, util: 9500,  grant: 1000000 },
  kumamoto:  { name: '熊本市（熊本県）',   rent: 53000, food: 45000, util: 9800,  grant: 1000000 },
  kanazawa:  { name: '金沢市（石川県）',   rent: 58000, food: 46000, util: 10200, grant: 1000000 },
  maebashi:  { name: '前橋市（群馬県）',   rent: 50000, food: 44000, util: 10000, grant: 1000000 },
}

export const rankCities: RankCity[] = [
  { id: 'fukuoka',   name: '福岡市',  pref: '福岡県',  cost: 78, conv: 82, nat: 65, med: 80 },
  { id: 'miyazaki',  name: '宮崎市',  pref: '宮崎県',  cost: 92, conv: 55, nat: 88, med: 65 },
  { id: 'maebashi',  name: '前橋市',  pref: '群馬県',  cost: 90, conv: 62, nat: 72, med: 68 },
  { id: 'sendai',    name: '仙台市',  pref: '宮城県',  cost: 82, conv: 78, nat: 68, med: 78 },
  { id: 'kumamoto',  name: '熊本市',  pref: '熊本県',  cost: 85, conv: 65, nat: 80, med: 72 },
  { id: 'hiroshima', name: '広島市',  pref: '広島県',  cost: 83, conv: 75, nat: 70, med: 76 },
  { id: 'kanazawa',  name: '金沢市',  pref: '石川県',  cost: 80, conv: 64, nat: 75, med: 72 },
  { id: 'nagano',    name: '長野市',  pref: '長野県',  cost: 84, conv: 58, nat: 90, med: 65 },
]

export const whyData: Record<string, WhyPoint[]> = {
  fukuoka: [
    { icon: 'cost', title: '生活費が東京の約6割', desc: '家賃は平均6.7万円と東京の約6割。外食も安く、同じ生活水準でも出費を大きく抑えられます。' },
    { icon: 'conv', title: '九州最大の都市機能', desc: '地下鉄・バスが充実し、車なしでも生活可能。博多駅から新幹線で東京へ約5時間。' },
    { icon: 'nat',  title: '海・山・温泉が身近', desc: '糸島の海岸、背振山地など自然豊か。週末のアウトドアも気軽に楽しめます。' },
    { icon: 'med',  title: '医療機関が充実', desc: '九州大学病院をはじめ大学病院・専門医が多く、安心して暮らせる医療環境です。' },
  ],
  sendai: [
    { icon: 'cost', title: '東北最安クラスの家賃', desc: '1LDKの平均家賃は約6万円。東京と比べ月5万円以上の節約が見込めます。' },
    { icon: 'conv', title: '新幹線で東京へ90分', desc: '仙台駅から東京まで最速90分。リモートワークの出社日も無理なく対応できます。' },
    { icon: 'nat',  title: '四季の自然が豊か', desc: '松島・蔵王など絶景スポットが近郊に点在。夏は涼しく、冬はスキーも楽しめます。' },
    { icon: 'med',  title: '東北大学病院が市内に', desc: '高度医療を担う東北大学病院があり、地方都市としてトップクラスの医療水準です。' },
  ],
  hiroshima: [
    { icon: 'cost', title: '中国地方で家賃が安い', desc: '平均家賃は約6.2万円。物価全体も全国平均を下回り、コスパの高い生活が可能です。' },
    { icon: 'conv', title: '路面電車と新幹線が便利', desc: '市内は路面電車で移動しやすく、新幹線も停車。関西・九州の両方へのアクセスが良好です。' },
    { icon: 'nat',  title: '瀬戸内海と山が近い', desc: '穏やかな気候の瀬戸内に面し、しまなみ海道サイクリングや山陽の自然が身近です。' },
    { icon: 'med',  title: '広島大学病院が充実', desc: '大学病院・専門病院が揃い、がん治療でも全国トップ水準の医療機関があります。' },
  ],
  nagano: [
    { icon: 'cost', title: '食費・物価が低水準', desc: '農業県のため野菜・果物が安く、食費を大幅に節約できます。' },
    { icon: 'nat',  title: '日本アルプスが目の前', desc: '北アルプス・南アルプスを望む絶景の中で暮らせます。登山・スキーが趣味の方に最高の環境です。' },
    { icon: 'conv', title: '北陸新幹線で東京へ80分', desc: '長野駅から東京まで最速80分のアクセス。テレワーク拠点として理想的な距離感です。' },
    { icon: 'med',  title: '信州大学医学部附属病院', desc: '高度医療を担う大学病院があり、地方でも安心の医療体制が整っています。' },
  ],
  miyazaki: [
    { icon: 'cost', title: '日本トップクラスの物価安', desc: '消費者物価地域差指数は全国最低水準。同じ生活でも東京の約7割のコストで暮らせます。' },
    { icon: 'nat',  title: '年中温暖な気候と海', desc: '日照時間が長く温暖。青島・堀切峠など美しいビーチが日常の中にあります。' },
    { icon: 'conv', title: '移住支援が手厚い', desc: '宮崎県・各市町村の移住支援金が充実。最大100万円の支援を受けられるケースもあります。' },
    { icon: 'med',  title: '宮崎大学医学部附属病院', desc: '県内最大の医療機関があり、専門性の高い治療も対応可能です。' },
  ],
  kumamoto: [
    { icon: 'cost', title: '九州第2位のコスパ都市', desc: '福岡に次ぐ九州の中心都市でありながら家賃は平均5.3万円と非常にリーズナブルです。' },
    { icon: 'nat',  title: '阿蘇・天草が近い', desc: '世界最大級のカルデラ・阿蘇山や、美しい天草の海が日帰り圏内。自然体験が豊富です。' },
    { icon: 'conv', title: '九州新幹線で福岡へ32分', desc: '博多まで新幹線で32分と近く、福岡のオフィスへの通勤も現実的な距離です。' },
    { icon: 'med',  title: '熊本大学病院が市内に', desc: '医療水準が高く、九州全体の高度医療の中核を担う病院が揃っています。' },
  ],
  kanazawa: [
    { icon: 'cost', title: '文化都市で物価が穏やか', desc: '家賃は平均5.8万円。新幹線開通後も物価は安定しており、豊かな暮らしが実現できます。' },
    { icon: 'nat',  title: '日本海と白山が近い', desc: '新鮮な海産物が安く手に入り、白山の登山も楽しめます。四季の変化が豊かです。' },
    { icon: 'conv', title: '北陸新幹線で東京へ2.5時間', desc: '2024年開通の北陸新幹線により東京への時間が大幅短縮。移住先として注目が急増中です。' },
    { icon: 'med',  title: '金沢大学附属病院', desc: '北陸地方の高度医療の中心として、充実した医療サービスが受けられます。' },
  ],
  maebashi: [
    { icon: 'cost', title: '家賃が群馬最安レベル', desc: '平均家賃は5万円と低水準。物価も全国平均を大幅に下回り、節約効果が高い都市です。' },
    { icon: 'conv', title: '東京へ新幹線で60分', desc: '高崎から新幹線を使えば東京まで約60分。在来線でも通勤圏内で、二拠点生活にも最適です。' },
    { icon: 'nat',  title: '赤城山と利根川の自然', desc: '赤城山でのハイキング・スキー、利根川でのアウトドアなど自然アクティビティが充実しています。' },
    { icon: 'med',  title: '群馬大学医学部附属病院', desc: '高度専門医療を提供する大学病院があり、万が一の際も安心の医療環境です。' },
  ],
}
