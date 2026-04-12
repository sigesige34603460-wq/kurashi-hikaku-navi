export type CityKey =
  | 'tokyo' | 'kanagawa' | 'osaka' | 'aichi' | 'saitama'
  | 'fukuoka' | 'sendai' | 'hiroshima' | 'nagano'
  | 'miyazaki' | 'kumamoto' | 'kanazawa' | 'maebashi'
  | 'hokkaido' | 'aomori' | 'iwate' | 'akita' | 'yamagata' | 'fukushima'
  | 'ibaraki' | 'tochigi' | 'chiba'
  | 'niigata' | 'toyama' | 'fukui' | 'yamanashi' | 'gifu' | 'shizuoka' | 'mie'
  | 'shiga' | 'kyoto' | 'hyogo' | 'nara' | 'wakayama'
  | 'tottori' | 'shimane' | 'okayama' | 'yamaguchi'
  | 'tokushima' | 'kagawa' | 'ehime' | 'kochi'
  | 'saga' | 'nagasaki' | 'oita' | 'kagoshima' | 'okinawa'

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
  // 移住元（大都市圏）
  tokyo:     { name: '東京都',   rent: 110000, food: 55000, util: 12000, grant: 0 },
  kanagawa:  { name: '神奈川県', rent: 95000,  food: 52000, util: 11500, grant: 0 },
  osaka:     { name: '大阪府',   rent: 75000,  food: 50000, util: 11000, grant: 0 },
  aichi:     { name: '愛知県',   rent: 68000,  food: 49000, util: 10500, grant: 0 },
  saitama:   { name: '埼玉県',   rent: 72000,  food: 50000, util: 11000, grant: 0 },
  // 移住先
  hokkaido:  { name: '北海道（札幌市）',   rent: 52000, food: 46000, util: 12000, grant: 1000000 },
  aomori:    { name: '青森県（青森市）',   rent: 42000, food: 43000, util: 11500, grant: 1000000 },
  iwate:     { name: '岩手県（盛岡市）',   rent: 44000, food: 43000, util: 11500, grant: 1000000 },
  sendai:    { name: '宮城県（仙台市）',   rent: 60000, food: 46000, util: 10500, grant: 1000000 },
  akita:     { name: '秋田県（秋田市）',   rent: 40000, food: 42000, util: 11500, grant: 1000000 },
  yamagata:  { name: '山形県（山形市）',   rent: 43000, food: 43000, util: 11500, grant: 1000000 },
  fukushima: { name: '福島県（福島市）',   rent: 46000, food: 44000, util: 11000, grant: 1000000 },
  ibaraki:   { name: '茨城県（水戸市）',   rent: 52000, food: 45000, util: 10500, grant: 1000000 },
  tochigi:   { name: '栃木県（宇都宮市）', rent: 50000, food: 45000, util: 10500, grant: 1000000 },
  maebashi:  { name: '群馬県（前橋市）',   rent: 50000, food: 44000, util: 10000, grant: 1000000 },
  chiba:     { name: '千葉県（千葉市）',   rent: 65000, food: 48000, util: 10500, grant: 500000  },
  niigata:   { name: '新潟県（新潟市）',   rent: 50000, food: 44000, util: 11000, grant: 1000000 },
  toyama:    { name: '富山県（富山市）',   rent: 46000, food: 44000, util: 11000, grant: 1000000 },
  kanazawa:  { name: '石川県（金沢市）',   rent: 58000, food: 46000, util: 10200, grant: 1000000 },
  fukui:     { name: '福井県（福井市）',   rent: 44000, food: 43000, util: 10500, grant: 1000000 },
  yamanashi: { name: '山梨県（甲府市）',   rent: 48000, food: 44000, util: 10500, grant: 1000000 },
  nagano:    { name: '長野県（長野市）',   rent: 55000, food: 45000, util: 11000, grant: 1000000 },
  gifu:      { name: '岐阜県（岐阜市）',   rent: 50000, food: 45000, util: 10500, grant: 1000000 },
  shizuoka:  { name: '静岡県（静岡市）',   rent: 58000, food: 46000, util: 10500, grant: 1000000 },
  mie:       { name: '三重県（津市）',     rent: 50000, food: 45000, util: 10500, grant: 1000000 },
  shiga:     { name: '滋賀県（大津市）',   rent: 56000, food: 46000, util: 10500, grant: 1000000 },
  kyoto:     { name: '京都府（京都市）',   rent: 68000, food: 48000, util: 10500, grant: 500000  },
  hyogo:     { name: '兵庫県（神戸市）',   rent: 65000, food: 47000, util: 10500, grant: 500000  },
  nara:      { name: '奈良県（奈良市）',   rent: 55000, food: 46000, util: 10500, grant: 1000000 },
  wakayama:  { name: '和歌山県（和歌山市）', rent: 45000, food: 44000, util: 10500, grant: 1000000 },
  tottori:   { name: '鳥取県（鳥取市）',   rent: 40000, food: 42000, util: 10500, grant: 1000000 },
  shimane:   { name: '島根県（松江市）',   rent: 40000, food: 42000, util: 10500, grant: 1000000 },
  okayama:   { name: '岡山県（岡山市）',   rent: 52000, food: 45000, util: 10000, grant: 1000000 },
  hiroshima: { name: '広島県（広島市）',   rent: 62000, food: 46000, util: 10000, grant: 1000000 },
  yamaguchi: { name: '山口県（山口市）',   rent: 45000, food: 43000, util: 10500, grant: 1000000 },
  tokushima: { name: '徳島県（徳島市）',   rent: 42000, food: 43000, util: 10000, grant: 1000000 },
  kagawa:    { name: '香川県（高松市）',   rent: 48000, food: 44000, util: 10000, grant: 1000000 },
  ehime:     { name: '愛媛県（松山市）',   rent: 46000, food: 44000, util: 10000, grant: 1000000 },
  kochi:     { name: '高知県（高知市）',   rent: 42000, food: 43000, util: 10000, grant: 1000000 },
  fukuoka:   { name: '福岡県（福岡市）',   rent: 67000, food: 47000, util: 10000, grant: 1000000 },
  saga:      { name: '佐賀県（佐賀市）',   rent: 42000, food: 43000, util: 10000, grant: 1000000 },
  nagasaki:  { name: '長崎県（長崎市）',   rent: 48000, food: 44000, util: 10000, grant: 1000000 },
  kumamoto:  { name: '熊本県（熊本市）',   rent: 53000, food: 45000, util: 9800,  grant: 1000000 },
  oita:      { name: '大分県（大分市）',   rent: 46000, food: 44000, util: 10000, grant: 1000000 },
  miyazaki:  { name: '宮崎県（宮崎市）',   rent: 48000, food: 44000, util: 9500,  grant: 1000000 },
  kagoshima: { name: '鹿児島県（鹿児島市）', rent: 46000, food: 44000, util: 9800, grant: 1000000 },
  okinawa:   { name: '沖縄県（那覇市）',   rent: 52000, food: 45000, util: 9500,  grant: 1000000 },
}

export const rankCities: RankCity[] = [
  // 北海道・東北
  { id: 'hokkaido',  name: '札幌市',   pref: '北海道',   cost: 85, conv: 75, nat: 95, med: 78 },
  { id: 'aomori',    name: '青森市',   pref: '青森県',   cost: 88, conv: 55, nat: 88, med: 55 },
  { id: 'iwate',     name: '盛岡市',   pref: '岩手県',   cost: 87, conv: 52, nat: 90, med: 58 },
  { id: 'sendai',    name: '仙台市',   pref: '宮城県',   cost: 82, conv: 78, nat: 68, med: 78 },
  { id: 'akita',     name: '秋田市',   pref: '秋田県',   cost: 90, conv: 50, nat: 88, med: 52 },
  { id: 'yamagata',  name: '山形市',   pref: '山形県',   cost: 88, conv: 52, nat: 85, med: 55 },
  { id: 'fukushima', name: '福島市',   pref: '福島県',   cost: 86, conv: 58, nat: 82, med: 60 },
  // 関東
  { id: 'ibaraki',   name: '水戸市',   pref: '茨城県',   cost: 83, conv: 62, nat: 70, med: 68 },
  { id: 'tochigi',   name: '宇都宮市', pref: '栃木県',   cost: 82, conv: 68, nat: 78, med: 70 },
  { id: 'maebashi',  name: '前橋市',   pref: '群馬県',   cost: 90, conv: 62, nat: 72, med: 68 },
  { id: 'chiba',     name: '千葉市',   pref: '千葉県',   cost: 68, conv: 80, nat: 65, med: 78 },
  // 中部
  { id: 'niigata',   name: '新潟市',   pref: '新潟県',   cost: 84, conv: 68, nat: 80, med: 70 },
  { id: 'toyama',    name: '富山市',   pref: '富山県',   cost: 82, conv: 62, nat: 85, med: 65 },
  { id: 'kanazawa',  name: '金沢市',   pref: '石川県',   cost: 80, conv: 64, nat: 75, med: 72 },
  { id: 'fukui',     name: '福井市',   pref: '福井県',   cost: 87, conv: 55, nat: 82, med: 60 },
  { id: 'yamanashi', name: '甲府市',   pref: '山梨県',   cost: 80, conv: 58, nat: 85, med: 60 },
  { id: 'nagano',    name: '長野市',   pref: '長野県',   cost: 84, conv: 58, nat: 90, med: 65 },
  { id: 'gifu',      name: '岐阜市',   pref: '岐阜県',   cost: 83, conv: 65, nat: 85, med: 65 },
  { id: 'shizuoka',  name: '静岡市',   pref: '静岡県',   cost: 75, conv: 72, nat: 80, med: 70 },
  { id: 'aichi',     name: '名古屋市', pref: '愛知県',   cost: 65, conv: 88, nat: 55, med: 85 },
  { id: 'mie',       name: '津市',     pref: '三重県',   cost: 82, conv: 60, nat: 80, med: 62 },
  // 近畿
  { id: 'shiga',     name: '大津市',   pref: '滋賀県',   cost: 78, conv: 70, nat: 78, med: 68 },
  { id: 'kyoto',     name: '京都市',   pref: '京都府',   cost: 70, conv: 80, nat: 72, med: 80 },
  { id: 'hyogo',     name: '神戸市',   pref: '兵庫県',   cost: 72, conv: 80, nat: 70, med: 78 },
  { id: 'nara',      name: '奈良市',   pref: '奈良県',   cost: 80, conv: 68, nat: 78, med: 65 },
  { id: 'wakayama',  name: '和歌山市', pref: '和歌山県', cost: 85, conv: 55, nat: 85, med: 58 },
  // 中国
  { id: 'tottori',   name: '鳥取市',   pref: '鳥取県',   cost: 91, conv: 45, nat: 88, med: 52 },
  { id: 'shimane',   name: '松江市',   pref: '島根県',   cost: 90, conv: 42, nat: 88, med: 50 },
  { id: 'okayama',   name: '岡山市',   pref: '岡山県',   cost: 83, conv: 70, nat: 72, med: 72 },
  { id: 'hiroshima', name: '広島市',   pref: '広島県',   cost: 83, conv: 75, nat: 70, med: 76 },
  { id: 'yamaguchi', name: '山口市',   pref: '山口県',   cost: 86, conv: 55, nat: 80, med: 60 },
  // 四国
  { id: 'tokushima', name: '徳島市',   pref: '徳島県',   cost: 88, conv: 52, nat: 82, med: 65 },
  { id: 'kagawa',    name: '高松市',   pref: '香川県',   cost: 82, conv: 65, nat: 68, med: 68 },
  { id: 'ehime',     name: '松山市',   pref: '愛媛県',   cost: 86, conv: 62, nat: 80, med: 65 },
  { id: 'kochi',     name: '高知市',   pref: '高知県',   cost: 87, conv: 48, nat: 90, med: 55 },
  // 九州・沖縄
  { id: 'fukuoka',   name: '福岡市',   pref: '福岡県',   cost: 78, conv: 82, nat: 65, med: 80 },
  { id: 'saga',      name: '佐賀市',   pref: '佐賀県',   cost: 89, conv: 52, nat: 75, med: 58 },
  { id: 'nagasaki',  name: '長崎市',   pref: '長崎県',   cost: 86, conv: 58, nat: 78, med: 65 },
  { id: 'kumamoto',  name: '熊本市',   pref: '熊本県',   cost: 85, conv: 65, nat: 80, med: 72 },
  { id: 'oita',      name: '大分市',   pref: '大分県',   cost: 84, conv: 55, nat: 82, med: 62 },
  { id: 'miyazaki',  name: '宮崎市',   pref: '宮崎県',   cost: 92, conv: 55, nat: 88, med: 65 },
  { id: 'kagoshima', name: '鹿児島市', pref: '鹿児島県', cost: 87, conv: 60, nat: 85, med: 63 },
  { id: 'okinawa',   name: '那覇市',   pref: '沖縄県',   cost: 80, conv: 65, nat: 90, med: 68 },
]

export const whyData: Record<string, WhyPoint[]> = {
  aichi: [
    { icon: 'conv', title: '交通アクセスが日本最高水準', desc: '名古屋は新幹線・地下鉄・JR・近鉄が集中。東京・大阪いずれも1時間圏内でビジネスに便利。' },
    { icon: 'med',  title: '医療・大学病院が充実', desc: '名古屋大学病院をはじめ高度医療機関が多く、安心して暮らせる医療環境です。' },
    { icon: 'cost', title: '東京より生活コストが低い', desc: '名古屋の家賃は東京比で約40%安。食費も抑えられ、月3〜4万円の節約が見込めます。' },
    { icon: 'nat',  title: '海・山・里山がバランスよく近い', desc: '知多半島・三河湾の海、木曽山脈の山々。週末のアウトドアや農家体験も充実しています。' },
  ],
  hokkaido: [
    { icon: 'cost', title: '家賃が東京の半額以下', desc: '札幌の平均家賃は約5.2万円。食費も安く、東京比で月5〜6万円の節約が可能です。' },
    { icon: 'nat',  title: '雄大な自然が日常に', desc: '四季折々の絶景。スキー・登山・釣りなどアウトドアが生活の中にあります。' },
    { icon: 'conv', title: '地下鉄・JRで便利な移動', desc: '札幌市内は地下鉄3路線が充実。新千歳空港へも直通でアクセス良好です。' },
    { icon: 'med',  title: '北大病院など医療が充実', desc: '北海道大学病院をはじめ高度医療機関が揃い、道内最高水準の医療が受けられます。' },
  ],
  aomori: [
    { icon: 'cost', title: '物価が全国最安水準', desc: '家賃は平均4.2万円と全国最安クラス。新鮮な食材も安く手に入ります。' },
    { icon: 'nat',  title: '白神山地と八甲田の大自然', desc: '世界自然遺産・白神山地や八甲田山など手つかずの大自然が身近にあります。' },
    { icon: 'cost', title: 'りんごなど農産物が激安', desc: '日本一のりんご産地。旬の農産物が驚くほど安く手に入り食費を大幅節約できます。' },
    { icon: 'med',  title: '弘前大学医学部附属病院', desc: '青森県の中核医療機関として高度専門医療を提供しています。' },
  ],
  iwate: [
    { icon: 'cost', title: '家賃・物価が低水準', desc: '盛岡市の平均家賃は約4.4万円。食費も全国平均を大幅に下回ります。' },
    { icon: 'nat',  title: '北アルプスに匹敵する山岳', desc: '早池峰山・岩手山など百名山が点在。四季の自然を満喫できる環境です。' },
    { icon: 'conv', title: '東北新幹線で東京へ2時間強', desc: '盛岡から東京まで新幹線で最速2時間20分。テレワーク拠点として理想的。' },
    { icon: 'med',  title: '岩手医科大学附属病院', desc: '岩手県の中核医療機関。高度な専門医療が受けられる環境が整っています。' },
  ],
  sendai: [
    { icon: 'cost', title: '東北最安クラスの家賃', desc: '1LDKの平均家賃は約6万円。東京と比べ月5万円以上の節約が見込めます。' },
    { icon: 'conv', title: '新幹線で東京へ90分', desc: '仙台駅から東京まで最速90分。リモートワークの出社日も無理なく対応できます。' },
    { icon: 'nat',  title: '四季の自然が豊か', desc: '松島・蔵王など絶景スポットが近郊に点在。夏は涼しく、冬はスキーも楽しめます。' },
    { icon: 'med',  title: '東北大学病院が市内に', desc: '高度医療を担う東北大学病院があり、地方都市としてトップクラスの医療水準です。' },
  ],
  akita: [
    { icon: 'cost', title: '家賃・物価が全国最安水準', desc: '平均家賃4万円以下。消費者物価も全国最低水準で生活コストを極限まで抑えられます。' },
    { icon: 'nat',  title: '世界遺産・白神山地が近い', desc: '世界自然遺産の白神山地が隣県との境に広がり、豊かな自然環境の中で暮らせます。' },
    { icon: 'cost', title: '移住支援金が手厚い', desc: '秋田県は人口減少対策として移住支援金が充実。最大100万円＋各市町村独自補助あり。' },
    { icon: 'med',  title: '秋田大学医学部附属病院', desc: '県内唯一の大学病院として高度医療を提供しています。' },
  ],
  yamagata: [
    { icon: 'cost', title: '果物・農産物が激安', desc: 'さくらんぼ・ラ・フランスなど全国ブランドの果物が産地価格で入手できます。' },
    { icon: 'nat',  title: '蔵王・月山などの名山', desc: '蔵王のお釜・月山など名山が揃い、四季を通じて豊かな自然を楽しめます。' },
    { icon: 'conv', title: '山形新幹線で東京へ2.5時間', desc: '山形市内から東京まで山形新幹線で約2.5時間。週1出社も十分対応可能です。' },
    { icon: 'med',  title: '山形大学医学部附属病院', desc: '高度医療を担う大学病院があり、地方でも安心の医療体制が整っています。' },
  ],
  fukushima: [
    { icon: 'cost', title: '生活コストが低く移住支援が手厚い', desc: '平均家賃4.6万円と安く、福島県は復興促進のため移住支援金が特に手厚いです。' },
    { icon: 'nat',  title: '磐梯山・猪苗代湖の絶景', desc: '磐梯山と猪苗代湖が生み出す絶景は四季折々の美しさ。スキーや湖水浴も楽しめます。' },
    { icon: 'conv', title: '東北新幹線で東京へ80分', desc: '郡山・福島から東京まで新幹線で約80〜90分。首都圏通勤圏内としても注目です。' },
    { icon: 'med',  title: '福島県立医科大学附属病院', desc: '県内最高水準の医療機関として高度専門医療が受けられます。' },
  ],
  ibaraki: [
    { icon: 'cost', title: '首都圏最安水準の家賃', desc: '水戸市の平均家賃は約5.2万円。首都圏近郊でありながらコスパ最高の生活が可能です。' },
    { icon: 'conv', title: 'つくばエクスプレスで東京へ45分', desc: 'つくば市から秋葉原まで最速45分。茨城県はテレワーク移住先として人気急上昇中です。' },
    { icon: 'nat',  title: '筑波山と太平洋が身近', desc: '百名山の筑波山や大洗の海岸など、多様な自然環境を日常的に楽しめます。' },
    { icon: 'med',  title: '筑波大学附属病院', desc: '国内有数の研究・医療機関である筑波大学附属病院が県内にあります。' },
  ],
  tochigi: [
    { icon: 'cost', title: '家賃・物価が手頃', desc: '宇都宮市の平均家賃は約5万円。いちごなど農産物も安く、生活費を大幅に節約できます。' },
    { icon: 'conv', title: '新幹線で東京へ50分', desc: '宇都宮から東京まで新幹線で最速50分。東京勤務との両立も十分可能な距離です。' },
    { icon: 'nat',  title: '日光の世界遺産と山岳', desc: '世界遺産の日光東照宮、那須の高原など豊かな自然と歴史文化が身近にあります。' },
    { icon: 'med',  title: '自治医科大学附属病院', desc: '地域医療の中核・自治医科大学附属病院があり、高度医療が受けられます。' },
  ],
  maebashi: [
    { icon: 'cost', title: '家賃が群馬最安レベル', desc: '平均家賃は5万円と低水準。物価も全国平均を大幅に下回り、節約効果が高い都市です。' },
    { icon: 'conv', title: '東京へ新幹線で60分', desc: '高崎から新幹線を使えば東京まで約60分。在来線でも通勤圏内で、二拠点生活にも最適です。' },
    { icon: 'nat',  title: '赤城山と利根川の自然', desc: '赤城山でのハイキング・スキー、利根川でのアウトドアなど自然アクティビティが充実しています。' },
    { icon: 'med',  title: '群馬大学医学部附属病院', desc: '高度専門医療を提供する大学病院があり、万が一の際も安心の医療環境です。' },
  ],
  chiba: [
    { icon: 'conv', title: '東京へのアクセスが抜群', desc: '千葉市から東京駅まで電車で約40分。首都圏の利便性を享受しながら生活コストを抑えられます。' },
    { icon: 'cost', title: '都心隣接で家賃がお得', desc: '都内比で家賃を3〜4万円節約可能。大型商業施設も充実し利便性と経済性を両立できます。' },
    { icon: 'nat',  title: '房総半島の海と自然', desc: '九十九里浜・鴨川など房総の豊かな自然が身近。週末は海や山でリフレッシュできます。' },
    { icon: 'med',  title: '千葉大学医学部附属病院', desc: '高度専門医療を提供する大学病院が市内にあり、充実した医療環境です。' },
  ],
  niigata: [
    { icon: 'cost', title: '米・魚が豊富で食費が安い', desc: '日本一のコシヒカリ産地。新鮮な日本海の海産物も安く手に入り食費を節約できます。' },
    { icon: 'nat',  title: '日本海と越後山脈の絶景', desc: '日本海に沈む夕日と冬の越後山脈は圧巻。スキー場も多く冬の楽しみが充実しています。' },
    { icon: 'conv', title: '上越新幹線で東京へ2時間', desc: '新潟駅から東京まで上越新幹線で最速約2時間。テレワーク拠点として理想的な距離です。' },
    { icon: 'med',  title: '新潟大学医歯学総合病院', desc: '北陸・新潟地域の高度医療の中心として専門性の高い治療が受けられます。' },
  ],
  toyama: [
    { icon: 'cost', title: '住宅の広さ日本一', desc: '富山県は一人当たりの住宅延床面積が全国1位。広い家に安く住めるのが最大の魅力です。' },
    { icon: 'nat',  title: '立山連峰と日本海が目の前', desc: '3000m級の立山連峰と日本海を同時に望む絶景。ホタルイカなど海の幸も豊富です。' },
    { icon: 'conv', title: '北陸新幹線で東京へ2時間', desc: '富山駅から東京まで北陸新幹線で最速約2時間。大都市へのアクセスが格段に向上しました。' },
    { icon: 'med',  title: '富山大学附属病院', desc: '高度専門医療を提供する大学病院があり、地方でも安心の医療体制が整っています。' },
  ],
  kanazawa: [
    { icon: 'cost', title: '文化都市で物価が穏やか', desc: '家賃は平均5.8万円。新幹線開通後も物価は安定しており、豊かな暮らしが実現できます。' },
    { icon: 'nat',  title: '日本海と白山が近い', desc: '新鮮な海産物が安く手に入り、白山の登山も楽しめます。四季の変化が豊かです。' },
    { icon: 'conv', title: '北陸新幹線で東京へ2.5時間', desc: '2024年開通の北陸新幹線により東京への時間が大幅短縮。移住先として注目が急増中です。' },
    { icon: 'med',  title: '金沢大学附属病院', desc: '北陸地方の高度医療の中心として、充実した医療サービスが受けられます。' },
  ],
  fukui: [
    { icon: 'cost', title: '共働き率・年収が全国トップ水準', desc: '福井県は共働き率全国1位。物価が安く収入も安定しており、家計が非常に豊かになります。' },
    { icon: 'nat',  title: '東尋坊・若狭湾の絶景', desc: '荒々しい奇岩が続く東尋坊と美しい若狭湾の海岸線。豊かな自然環境が魅力です。' },
    { icon: 'cost', title: '恐竜博物館など独自の文化', desc: '世界三大恐竜博物館のひとつが福井にあり、独自の文化・観光資源が充実しています。' },
    { icon: 'med',  title: '福井大学医学部附属病院', desc: '県内の中核医療機関として高度専門医療を提供しています。' },
  ],
  yamanashi: [
    { icon: 'nat',  title: '富士山を毎日望む生活', desc: '富士山を日常的に眺められる環境。山梨県は自然との距離が非常に近い暮らしができます。' },
    { icon: 'cost', title: 'ぶどう・桃が産地価格', desc: '全国トップのぶどう・桃産地。旬の時期は驚くほど安く果物を手に入れられます。' },
    { icon: 'conv', title: '特急で東京へ90分', desc: '甲府から東京まで特急かいじで約90分。中央道でのドライブも快適なアクセスです。' },
    { icon: 'med',  title: '山梨大学医学部附属病院', desc: '県内の中核医療機関として高度専門医療を提供しています。' },
  ],
  nagano: [
    { icon: 'cost', title: '食費・物価が低水準', desc: '農業県のため野菜・果物が安く、食費を大幅に節約できます。' },
    { icon: 'nat',  title: '日本アルプスが目の前', desc: '北アルプス・南アルプスを望む絶景の中で暮らせます。登山・スキーが趣味の方に最高の環境です。' },
    { icon: 'conv', title: '北陸新幹線で東京へ80分', desc: '長野駅から東京まで最速80分のアクセス。テレワーク拠点として理想的な距離感です。' },
    { icon: 'med',  title: '信州大学医学部附属病院', desc: '高度医療を担う大学病院があり、地方でも安心の医療体制が整っています。' },
  ],
  gifu: [
    { icon: 'nat',  title: '白川郷・飛騨の絶景', desc: '世界遺産・白川郷の合掌造りや飛騨高山の古い町並み。自然と歴史文化が共存する環境です。' },
    { icon: 'cost', title: '名古屋通勤圏で家賃が安い', desc: '岐阜市は名古屋まで電車20分。都市機能を享受しながら平均5万円の安い家賃で生活できます。' },
    { icon: 'conv', title: '名古屋へのアクセスが抜群', desc: '岐阜から名古屋まで新快速で18分。東海道新幹線も名古屋から使えます。' },
    { icon: 'med',  title: '岐阜大学医学部附属病院', desc: '高度専門医療を提供する大学病院があり、安心の医療環境です。' },
  ],
  shizuoka: [
    { icon: 'nat',  title: '富士山・伊豆・駿河湾', desc: '富士山を望む海と山の両方が身近。温暖な気候でお茶・みかん・桜えびなど食材も豊富です。' },
    { icon: 'cost', title: '温暖な気候で光熱費が安い', desc: '年間を通じて温暖。東北・北陸と比べ暖房費が少なく光熱費を大幅に節約できます。' },
    { icon: 'conv', title: '新幹線で東京・大阪の中間', desc: '東海道新幹線の停車駅が多く、東京も大阪も2時間以内でアクセスできる好立地です。' },
    { icon: 'med',  title: '浜松医科大学附属病院', desc: '高度専門医療を提供する大学病院があり、地方でも安心の医療体制が整っています。' },
  ],
  mie: [
    { icon: 'nat',  title: '伊勢神宮と紀伊半島の自然', desc: '日本人の心のふるさと・伊勢神宮が生活圏に。熊野の山々と志摩の海も身近に楽しめます。' },
    { icon: 'cost', title: '伊勢えびなど海の幸が豊富', desc: '伊勢えびやあわびなど高級食材も地元価格。豊かな食生活を手頃な価格で楽しめます。' },
    { icon: 'conv', title: '名古屋・大阪の両方へアクセス', desc: '名阪国道や近鉄特急で名古屋・大阪の両方へアクセス可能な好立地です。' },
    { icon: 'med',  title: '三重大学医学部附属病院', desc: '高度専門医療を提供する大学病院があり、安心の医療環境が整っています。' },
  ],
  shiga: [
    { icon: 'nat',  title: '琵琶湖が生活圏に', desc: '日本最大の湖・琵琶湖が県の1/6を占める。水上スポーツや釣りなどが日常的に楽しめます。' },
    { icon: 'conv', title: '京都・大阪へのアクセスが抜群', desc: '大津から京都まで電車で10分、大阪まで30分。関西の利便性を享受しながら安く住めます。' },
    { icon: 'cost', title: '関西圏で最もコスパが高い', desc: '京都・大阪に隣接しながら家賃は5.6万円と手頃。生活費を大幅に節約できます。' },
    { icon: 'med',  title: '滋賀医科大学医学部附属病院', desc: '高度専門医療を提供する大学病院があり、安心の医療環境が整っています。' },
  ],
  kyoto: [
    { icon: 'nat',  title: '世界遺産に囲まれた生活', desc: '金閣寺・伏見稲荷など17件の世界遺産が日常の中に。文化・芸術・歴史が生活に溶け込みます。' },
    { icon: 'conv', title: '大阪・東京へのアクセスが良好', desc: '大阪まで新快速で28分、東京まで新幹線で約2時間15分。都市間移動が非常に便利です。' },
    { icon: 'cost', title: '大阪より家賃が安いエリアも', desc: '市街地を離れると家賃5〜6万円台のエリアも。古民家リノベーション物件が人気です。' },
    { icon: 'med',  title: '京都大学医学部附属病院', desc: '国内トップクラスの研究・医療機関。専門性の高い高度医療が受けられます。' },
  ],
  hyogo: [
    { icon: 'conv', title: '神戸・大阪・姫路と交通の要', desc: '神戸は大阪まで30分。新幹線・飛行機・フェリーなど交通手段が豊富な好立地です。' },
    { icon: 'nat',  title: '海と六甲山が共存', desc: '六甲山から一望できるポートアイランド・神戸港。山と海が20分で行き来できる贅沢な環境です。' },
    { icon: 'cost', title: '大阪比で家賃を節約', desc: '大阪と比べ家賃が安いエリアが多い。芦屋・西宮など高級住宅街から庶民的なエリアまで多彩です。' },
    { icon: 'med',  title: '神戸大学医学部附属病院', desc: '高度専門医療を提供する大学病院があり、充実した医療環境です。' },
  ],
  nara: [
    { icon: 'nat',  title: '奈良公園・世界遺産が日常に', desc: '世界遺産の東大寺・春日大社・法隆寺が生活圏に。鹿が歩く独特の日常を過ごせます。' },
    { icon: 'conv', title: '大阪・京都へ30分以内', desc: '近鉄特急で大阪・難波まで35分、京都まで45分。関西の都市機能を享受しながら自然豊かな生活ができます。' },
    { icon: 'cost', title: '関西圏でコスパ最高の住宅', desc: '大阪・京都より家賃が安く、広い住宅に住める。吉野など郊外は移住補助も充実しています。' },
    { icon: 'med',  title: '奈良県立医科大学附属病院', desc: '県内最高水準の医療機関として高度専門医療を提供しています。' },
  ],
  wakayama: [
    { icon: 'nat',  title: '熊野古道・紀の松島の絶景', desc: '世界遺産の熊野古道と美しい南紀の海。温泉も豊富で自然環境は全国トップクラスです。' },
    { icon: 'cost', title: 'みかん・梅が産地価格', desc: '全国トップのみかん・梅産地。旬の時期は驚くほど安く購入でき食費を大幅節約できます。' },
    { icon: 'conv', title: '大阪へ特急で1時間', desc: '和歌山から大阪まで特急くろしおで約1時間。大阪通勤圏内として移住者が増えています。' },
    { icon: 'med',  title: '和歌山県立医科大学附属病院', desc: '県内最高水準の医療機関として高度専門医療を提供しています。' },
  ],
  tottori: [
    { icon: 'cost', title: '家賃・物価が全国最安クラス', desc: '平均家賃4万円以下。物価も全国最安水準で、最も生活コストを抑えられる県の一つです。' },
    { icon: 'nat',  title: '鳥取砂丘と山陰海岸の絶景', desc: '日本最大の砂丘・鳥取砂丘と山陰海岸国立公園の雄大な景色が日常に広がります。' },
    { icon: 'cost', title: '移住支援が全国最高水準', desc: '鳥取県は人口最少県として移住支援に力を入れ、独自の手厚い補助金制度が揃っています。' },
    { icon: 'med',  title: '鳥取大学医学部附属病院', desc: '山陰地方の高度医療の中核として専門医療を提供しています。' },
  ],
  shimane: [
    { icon: 'cost', title: '日本最安水準の生活コスト', desc: '家賃4万円以下、物価も全国最安クラス。移住支援金も充実し移住コストを最小限に抑えられます。' },
    { icon: 'nat',  title: '出雲大社と日本海の絶景', desc: '縁結びで有名な出雲大社と穏やかな宍道湖、荒々しい日本海。豊かな自然と文化が調和します。' },
    { icon: 'cost', title: '海産物・農産物が激安', desc: '松葉ガニなど日本海の幸が産地価格で手に入り、食費を大幅に節約できます。' },
    { icon: 'med',  title: '島根大学医学部附属病院', desc: '島根県の中核医療機関として高度専門医療を提供しています。' },
  ],
  okayama: [
    { icon: 'nat',  title: '晴れの国・岡山で温暖な気候', desc: '全国トップクラスの晴天日数。温暖で過ごしやすく、白桃・マスカットなど果物も豊富です。' },
    { icon: 'conv', title: '新幹線で東京・大阪の中間', desc: '岡山駅は山陽新幹線・瀬戸大橋線の結節点。四国へのアクセスも抜群な交通の要衝です。' },
    { icon: 'cost', title: '大都市並みの利便性で安い家賃', desc: '岡山市は政令市並みの都市機能を持ちながら平均家賃5.2万円。コスパ最高の都市です。' },
    { icon: 'med',  title: '岡山大学病院', desc: '中国地方の高度医療の中心として先端医療・専門医療が受けられます。' },
  ],
  hiroshima: [
    { icon: 'cost', title: '中国地方で家賃が安い', desc: '平均家賃は約6.2万円。物価全体も全国平均を下回り、コスパの高い生活が可能です。' },
    { icon: 'conv', title: '路面電車と新幹線が便利', desc: '市内は路面電車で移動しやすく、新幹線も停車。関西・九州の両方へのアクセスが良好です。' },
    { icon: 'nat',  title: '瀬戸内海と山が近い', desc: '穏やかな気候の瀬戸内に面し、しまなみ海道サイクリングや山陽の自然が身近です。' },
    { icon: 'med',  title: '広島大学病院が充実', desc: '大学病院・専門病院が揃い、がん治療でも全国トップ水準の医療機関があります。' },
  ],
  yamaguchi: [
    { icon: 'cost', title: '家賃・物価が非常に安い', desc: '山口市の平均家賃は約4.5万円。フグ・アンコウなど高級食材も地元価格で楽しめます。' },
    { icon: 'nat',  title: '秋吉台・角島の絶景', desc: '日本最大のカルスト台地・秋吉台と角島大橋の絶景は日本屈指の景観スポットです。' },
    { icon: 'conv', title: '山陽新幹線で広島・福岡へ', desc: '山陽新幹線が通り、広島まで15分・福岡まで約40分。九州・中国地方の中間地として便利です。' },
    { icon: 'med',  title: '山口大学医学部附属病院', desc: '山口県の中核医療機関として高度専門医療を提供しています。' },
  ],
  tokushima: [
    { icon: 'cost', title: '家賃・物価が四国最安水準', desc: '平均家賃4.2万円と四国最安クラス。すだちなど地元食材が安く手に入り食費も節約できます。' },
    { icon: 'nat',  title: '祖谷・大歩危の秘境', desc: 'かずら橋で有名な祖谷渓谷や大歩危・小歩危の吉野川峡谷は日本屈指の秘境です。' },
    { icon: 'conv', title: '明石海峡大橋で神戸へ1.5時間', desc: '明石海峡大橋経由で神戸まで約1.5時間。関西へのアクセスが意外に良好です。' },
    { icon: 'med',  title: '徳島大学病院', desc: '四国の医療をリードする大学病院として高度専門医療を提供しています。' },
  ],
  kagawa: [
    { icon: 'cost', title: 'うどんが激安・物価が手頃', desc: '本場の讃岐うどんが1杯100〜300円。食費を極限まで抑えられるグルメ県です。' },
    { icon: 'nat',  title: '瀬戸内海・小豆島の絶景', desc: '穏やかな瀬戸内の島々と美しい海。小豆島などへのフェリーも便利で離島生活も楽しめます。' },
    { icon: 'conv', title: 'マリンライナーで岡山へ1時間', desc: '高松から岡山まで快速マリンライナーで約1時間。山陽新幹線接続で都市間移動が便利です。' },
    { icon: 'med',  title: '香川大学医学部附属病院', desc: '四国の高度医療を担う大学病院として専門医療が受けられます。' },
  ],
  ehime: [
    { icon: 'nat',  title: 'みかん・しまなみ海道の絶景', desc: '段々畑のみかん産地としまなみ海道サイクリングロード。瀬戸内の豊かな自然が魅力です。' },
    { icon: 'cost', title: '四国で最も都市機能が充実', desc: '松山市は四国最大の都市。家賃は約4.6万円と安く、大型商業施設・医療機関も揃っています。' },
    { icon: 'conv', title: '松山空港で東京へ1.5時間', desc: '松山空港から東京まで約1.5時間。LCCも就航しており交通費を抑えた往来が可能です。' },
    { icon: 'med',  title: '愛媛大学医学部附属病院', desc: '四国の高度医療を担う大学病院として専門医療が受けられます。' },
  ],
  kochi: [
    { icon: 'nat',  title: '四万十川・足摺岬の大自然', desc: '日本最後の清流・四万十川と足摺岬の絶景。高知は日本一の自然環境を持つ県の一つです。' },
    { icon: 'cost', title: 'カツオなど新鮮な食材が安い', desc: '土佐のカツオのたたきが地元価格。野菜・魚介類が豊富で食費を大幅に節約できます。' },
    { icon: 'cost', title: '移住支援が手厚い', desc: '高知県は人口対策として移住支援が非常に充実。就農支援・住宅補助など多彩な制度があります。' },
    { icon: 'med',  title: '高知大学医学部附属病院', desc: '高知県の中核医療機関として高度専門医療を提供しています。' },
  ],
  fukuoka: [
    { icon: 'cost', title: '生活費が東京の約6割', desc: '家賃は平均6.7万円と東京の約6割。外食も安く、同じ生活水準でも出費を大きく抑えられます。' },
    { icon: 'conv', title: '九州最大の都市機能', desc: '地下鉄・バスが充実し、車なしでも生活可能。博多駅から新幹線で東京へ約5時間。' },
    { icon: 'nat',  title: '海・山・温泉が身近', desc: '糸島の海岸、背振山地など自然豊か。週末のアウトドアも気軽に楽しめます。' },
    { icon: 'med',  title: '医療機関が充実', desc: '九州大学病院をはじめ大学病院・専門医が多く、安心して暮らせる医療環境です。' },
  ],
  saga: [
    { icon: 'cost', title: '九州最安クラスの物価', desc: '佐賀市の平均家賃は約4.2万円。全国でも最安水準の物価で、コスパ最高の生活ができます。' },
    { icon: 'nat',  title: '有明海・玄界灘の恵み', desc: '有明海のムツゴロウ・竹崎カニ、玄界灘の新鮮な海産物が安く手に入ります。' },
    { icon: 'conv', title: '福岡へ特急で30分', desc: '佐賀から博多まで特急で約30分。福岡の都市機能を享受しながら安く住めます。' },
    { icon: 'med',  title: '佐賀大学医学部附属病院', desc: '佐賀県の中核医療機関として高度専門医療を提供しています。' },
  ],
  nagasaki: [
    { icon: 'nat',  title: '九十九島・軍艦島の絶景', desc: '九十九島の美しい島々と世界遺産の軍艦島。長崎港の夜景は日本三大夜景のひとつです。' },
    { icon: 'cost', title: '長崎ちゃんぽんなど食費が安い', desc: '新鮮な魚介類や長崎ならではの食文化が豊富。食費を安く抑えながら豊かな食生活が楽しめます。' },
    { icon: 'conv', title: '西九州新幹線が開業', desc: '2022年開業の西九州新幹線で武雄温泉まで23分。佐賀・福岡へのアクセスが向上しました。' },
    { icon: 'med',  title: '長崎大学病院', desc: '長崎県の中核医療機関として熱帯病研究など特色ある高度医療を提供しています。' },
  ],
  kumamoto: [
    { icon: 'cost', title: '九州第2位のコスパ都市', desc: '福岡に次ぐ九州の中心都市でありながら家賃は平均5.3万円と非常にリーズナブルです。' },
    { icon: 'nat',  title: '阿蘇・天草が近い', desc: '世界最大級のカルデラ・阿蘇山や、美しい天草の海が日帰り圏内。自然体験が豊富です。' },
    { icon: 'conv', title: '九州新幹線で福岡へ32分', desc: '博多まで新幹線で32分と近く、福岡のオフィスへの通勤も現実的な距離です。' },
    { icon: 'med',  title: '熊本大学病院が市内に', desc: '医療水準が高く、九州全体の高度医療の中核を担う病院が揃っています。' },
  ],
  oita: [
    { icon: 'nat',  title: '温泉湧出量・源泉数日本一', desc: '別府・由布院など名湯が集中。温泉が生活のそばにある「おんせん県」は移住者に大人気。' },
    { icon: 'cost', title: 'かぼすなど農産物が安い', desc: '全国生産量1位のかぼすをはじめ、豊後牛・関あじ関さばなど高級食材が地元価格で楽しめます。' },
    { icon: 'conv', title: '大分空港で東京へ1.5時間', desc: '大分空港から東京まで約1.5時間。ソニックで福岡まで約2時間のアクセスです。' },
    { icon: 'med',  title: '大分大学医学部附属病院', desc: '大分県の中核医療機関として高度専門医療を提供しています。' },
  ],
  miyazaki: [
    { icon: 'cost', title: '日本トップクラスの物価安', desc: '消費者物価地域差指数は全国最低水準。同じ生活でも東京の約7割のコストで暮らせます。' },
    { icon: 'nat',  title: '年中温暖な気候と海', desc: '日照時間が長く温暖。青島・堀切峠など美しいビーチが日常の中にあります。' },
    { icon: 'conv', title: '移住支援が手厚い', desc: '宮崎県・各市町村の移住支援金が充実。最大100万円の支援を受けられるケースもあります。' },
    { icon: 'med',  title: '宮崎大学医学部附属病院', desc: '県内最大の医療機関があり、専門性の高い治療も対応可能です。' },
  ],
  kagoshima: [
    { icon: 'nat',  title: '桜島と奄美の大自然', desc: '活火山・桜島を望む鹿児島市と世界自然遺産・屋久島。九州の大自然を全身で感じる県です。' },
    { icon: 'cost', title: '黒毛和牛・黒豚が産地価格', desc: '全国トップの黒毛和牛・黒豚産地。高級ブランド食材が地元価格で楽しめます。' },
    { icon: 'conv', title: '九州新幹線で博多へ1.5時間', desc: '鹿児島中央から博多まで九州新幹線で最速約80分。九州各地へのアクセスが便利です。' },
    { icon: 'med',  title: '鹿児島大学病院', desc: '南九州・南西諸島の高度医療の中心として専門医療が受けられます。' },
  ],
  okinawa: [
    { icon: 'nat',  title: '年中温暖な楽園の海', desc: '平均気温22度の亜熱帯気候。エメラルドグリーンの海と白浜が日常の中にある唯一の県です。' },
    { icon: 'cost', title: '家賃が東京の半額以下', desc: '那覇市の平均家賃は約5.2万円。温暖な気候で光熱費も安く、生活コストを大幅に抑えられます。' },
    { icon: 'conv', title: '那覇空港で全国各地へ', desc: '那覇空港から東京へ約2.5時間。アジア各都市へのアクセスも良好でリゾートワーク最適地です。' },
    { icon: 'med',  title: '琉球大学病院', desc: '沖縄県の中核医療機関として島嶼医療も含む高度専門医療を提供しています。' },
  ],
}
