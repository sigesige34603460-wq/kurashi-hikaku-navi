/**
 * 移住コラム自動生成スクリプト
 * 使い方: ANTHROPIC_API_KEY=xxx node scripts/generate-article.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = path.join(__dirname, '../src/content/blog')

// 記事テーマ候補（都道府県・移住トピック）
const TOPICS = [
  { title: '北海道（札幌市）', slug: 'hokkaido-sapporo', category: '移住ガイド' },
  { title: '青森県（青森市）', slug: 'aomori', category: '移住ガイド' },
  { title: '岩手県（盛岡市）', slug: 'iwate-morioka', category: '移住ガイド' },
  { title: '宮城県（仙台市）', slug: 'miyagi-sendai', category: '移住ガイド' },
  { title: '秋田県（秋田市）', slug: 'akita', category: '移住ガイド' },
  { title: '山形県（山形市）', slug: 'yamagata', category: '移住ガイド' },
  { title: '福島県（福島市）', slug: 'fukushima', category: '移住ガイド' },
  { title: '茨城県（水戸市）', slug: 'ibaraki-mito', category: '移住ガイド' },
  { title: '栃木県（宇都宮市）', slug: 'tochigi-utsunomiya', category: '移住ガイド' },
  { title: '群馬県（前橋市）', slug: 'gunma-maebashi', category: '移住ガイド' },
  { title: '新潟県（新潟市）', slug: 'niigata', category: '移住ガイド' },
  { title: '富山県（富山市）', slug: 'toyama', category: '移住ガイド' },
  { title: '石川県（金沢市）', slug: 'ishikawa-kanazawa', category: '移住ガイド' },
  { title: '福井県（福井市）', slug: 'fukui', category: '移住ガイド' },
  { title: '山梨県（甲府市）', slug: 'yamanashi-kofu', category: '移住ガイド' },
  { title: '岐阜県（岐阜市）', slug: 'gifu', category: '移住ガイド' },
  { title: '静岡県（静岡市）', slug: 'shizuoka', category: '移住ガイド' },
  { title: '三重県（津市）', slug: 'mie-tsu', category: '移住ガイド' },
  { title: '滋賀県（大津市）', slug: 'shiga-otsu', category: '移住ガイド' },
  { title: '京都府（京都市）', slug: 'kyoto', category: '移住ガイド' },
  { title: '兵庫県（神戸市）', slug: 'hyogo-kobe', category: '移住ガイド' },
  { title: '奈良県（奈良市）', slug: 'nara', category: '移住ガイド' },
  { title: '和歌山県（和歌山市）', slug: 'wakayama', category: '移住ガイド' },
  { title: '鳥取県（鳥取市）', slug: 'tottori', category: '移住ガイド' },
  { title: '島根県（松江市）', slug: 'shimane-matsue', category: '移住ガイド' },
  { title: '岡山県（岡山市）', slug: 'okayama', category: '移住ガイド' },
  { title: '広島県（広島市）', slug: 'hiroshima', category: '移住ガイド' },
  { title: '山口県（山口市）', slug: 'yamaguchi', category: '移住ガイド' },
  { title: '徳島県（徳島市）', slug: 'tokushima', category: '移住ガイド' },
  { title: '香川県（高松市）', slug: 'kagawa-takamatsu', category: '移住ガイド' },
  { title: '愛媛県（松山市）', slug: 'ehime-matsuyama', category: '移住ガイド' },
  { title: '高知県（高知市）', slug: 'kochi', category: '移住ガイド' },
  { title: '福岡県（福岡市）', slug: 'fukuoka', category: '移住ガイド' },
  { title: '佐賀県（佐賀市）', slug: 'saga', category: '移住ガイド' },
  { title: '長崎県（長崎市）', slug: 'nagasaki', category: '移住ガイド' },
  { title: '熊本県（熊本市）', slug: 'kumamoto', category: '移住ガイド' },
  { title: '大分県（大分市）', slug: 'oita', category: '移住ガイド' },
  { title: '宮崎県（宮崎市）', slug: 'miyazaki', category: '移住ガイド' },
  { title: '鹿児島県（鹿児島市）', slug: 'kagoshima', category: '移住ガイド' },
  { title: '沖縄県（那覇市）', slug: 'okinawa-naha', category: '移住ガイド' },
  // 特集テーマ
  { title: 'リモートワーカーにおすすめの移住先5選', slug: 'remote-work-iju', category: 'テーマ特集' },
  { title: '子育て世帯が移住支援金を最大化する方法', slug: 'kosodate-shienkin', category: 'テーマ特集' },
  { title: '50代・60代シニア世代の地方移住ガイド', slug: 'senior-iju-guide', category: 'テーマ特集' },
  { title: '移住前に必ずやるべき準備チェックリスト', slug: 'iju-checklist', category: 'テーマ特集' },
  { title: '地方移住で後悔しないための5つの注意点', slug: 'iju-koukai-chui', category: 'テーマ特集' },
  { title: '農業・田舎暮らしを始める移住の手順', slug: 'noson-iju-guide', category: 'テーマ特集' },
]

function getExistingSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return new Set()
  return new Set(
    fs.readdirSync(CONTENT_DIR)
      .filter(f => f.endsWith('.md'))
      .map(f => {
        const match = f.match(/^\d{4}-\d{2}-\d{2}-(.+)\.md$/)
        return match ? match[1] : ''
      })
  )
}

async function generateArticle(topic) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY が設定されていません')

  const prompt = `あなたは地方移住に詳しいライターです。
以下のテーマで移住・生活情報サイト「くらし比較ナビ」向けのブログ記事をマークダウン形式で書いてください。

テーマ：「${topic.title}への移住完全ガイド」

【要件】
- 文字数：1200〜1800字
- 見出し（##）を3〜5個使う
- 生活費（家賃・食費・光熱費）の目安を東京と比較した表（マークダウンtable）を含める
- 移住支援金・補助金について言及する
- おすすめエリアや移住準備のポイントを含める
- 読者は東京圏からの移住を検討している30〜50代
- SEOを意識した自然な文章
- フロントマター（---...---）は不要、本文のみ

記事本文のみを出力してください。`

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2048,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`API エラー: ${response.status} ${err}`)
  }

  const data = await response.json()
  return data.content[0].text
}

async function main() {
  // 未生成のトピックを選ぶ
  const existingSlugs = getExistingSlugs()
  const remaining = TOPICS.filter(t => !existingSlugs.has(t.slug))

  if (remaining.length === 0) {
    console.log('全トピックの記事が生成済みです。')
    return
  }

  // 未生成からランダムに1件選択
  const topic = remaining[Math.floor(Math.random() * remaining.length)]
  console.log(`生成中: ${topic.title}`)

  const body = await generateArticle(topic)

  // 今日の日付でファイル名を決定
  const today = new Date().toISOString().slice(0, 10)
  const filename = `${today}-${topic.slug}.md`
  const filePath = path.join(CONTENT_DIR, filename)

  const frontmatter = `---
title: ${topic.title}への移住完全ガイド｜生活費・支援金・おすすめエリアまとめ
date: ${today}
description: ${topic.title}への移住を検討している方向けに、生活費・移住支援金・おすすめエリア・移住準備の手順を詳しく解説します。
category: ${topic.category}
---

`

  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true })
  fs.writeFileSync(filePath, frontmatter + body, 'utf8')
  console.log(`✅ 保存完了: ${filename}`)
}

main().catch(err => {
  console.error('エラー:', err.message)
  process.exit(1)
})
