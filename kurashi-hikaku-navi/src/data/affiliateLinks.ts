/**
 * アフィリエイトリンク管理ファイル
 *
 * A8.net で各プログラムが承認されたら、url をA8トラッキングURLに差し替えてください。
 * このファイルだけ更新すれば全ページに反映されます。
 *
 * A8トラッキングURLの形式:
 *   https://px.a8.net/svt/ejp?a8mat=【発行されたコード】&a8ejpredirect=【遷移先URL】
 *
 * 申請推奨プログラム（A8.net）:
 *   引越し見積もり: 引越し侍 / アート引越センター / 引越し革命
 *   賃貸・不動産:  LIFULL HOME'S / ニフティ不動産
 *   電気・ガス:    エネチェンジ / 電力比較サイト
 *   ネット回線:    GMO とくとくBB / NTT フレッツ光
 */
const RAKUTEN_ID = '5292f972.ad60ecfa.5292f973.8e92b317'

/** 楽天アフィリエイトリンク生成ヘルパー */
function rakuten(targetUrl: string) {
  return `https://hb.afl.rakuten.co.jp/hgc/${RAKUTEN_ID}/?pc=${encodeURIComponent(targetUrl)}`
}

export const AFFILIATE = {
  /** 引越し一括見積もり（A8/もしも承認後に差し替え） */
  hikkoshi: 'https://hikkoshi.suumo.jp/',
  /** 賃貸物件検索（A8/もしも承認後に差し替え） */
  chintai: 'https://suumo.jp/chintai/',
  /** 電気・ガス一括切り替え比較（A8/もしも承認後に差し替え） */
  denki: 'https://enechange.jp/',
  /** ネット回線比較・申し込み（A8/もしも承認後に差し替え） */
  net: 'https://gmobb.jp/',

  /** 楽天：引越し用ダンボール・梱包資材 */
  rakutenHikkoshi: rakuten('https://search.rakuten.co.jp/search/mall/引越し+ダンボール+セット/'),
  /** 楽天：新生活家電セット */
  rakutenKaden: rakuten('https://search.rakuten.co.jp/search/mall/新生活+家電+セット/'),
  /** 楽天：収納グッズ・整理用品 */
  rakutenShuuno: rakuten('https://search.rakuten.co.jp/search/mall/収納+ボックス+引越し/'),
} as const
