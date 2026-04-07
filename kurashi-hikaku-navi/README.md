# くらし比較ナビ

都市別の生活費・住みやすさを比較できる移住ガイドサイトです。

## ページ構成

| ページ | URL | 内容 |
|---|---|---|
| トップ | `/` | 移住シミュレーター・節約額計算 |
| ランキング | `/ranking` | 住みやすさランキング（重み調整可） |
| 支援制度 | `/subsidies` | 国・都道府県・市区町村の補助金一覧 |

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules**
- **Vercel** でホスティング

---

## セットアップ手順

### 1. GitHubにリポジトリ作成

```bash
# GitHubで新規リポジトリ（例: kurashi-hikaku-navi）を作成後
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/あなたのID/kurashi-hikaku-navi.git
git push -u origin main
```

### 2. Vercelにデプロイ

1. [vercel.com](https://vercel.com) にログイン
2. 「Add New Project」→ GitHubリポジトリを選択
3. Framework Preset: **Next.js**（自動検出）
4. 「Deploy」ボタンを押すだけ

### 3. ローカルで動作確認する場合

```bash
npm install
npm run dev
# → http://localhost:3000 で確認
```

---

## データの更新方法

### 都市データ・住みやすさの理由
`src/data/cities.ts` を編集

### 補助金・支援制度データ
`src/data/subsidies.ts` を編集

---

## 今後の追加予定

- [ ] Google Analytics 設置
- [ ] AdSense 設置
- [ ] アフィリエイトリンク（不動産・引越し系）
- [ ] 都市ページ（各都市の詳細ページ）
- [ ] SEO用メタデータの充実
- [ ] サイトマップ生成

---

データ出典：総務省「消費者物価地域差指数」「家計調査」· 国土交通省「都市構造評価」· 内閣府地方創生推進事務局
