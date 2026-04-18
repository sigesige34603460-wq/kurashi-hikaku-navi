'use client'
import { AFFILIATE } from '@/data/affiliateLinks'

type Props = {
  heading?: string
}

export default function AffiliateBlock({ heading = '移住の準備をはじめよう' }: Props) {
  return (
    <div>
      <p style={{ fontSize: 13, color: '#888', textAlign: 'center', marginBottom: 12 }}>
        {heading}
      </p>
      <a
        href={AFFILIATE.hikkoshi}
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={{
          display: 'block',
          background: 'linear-gradient(135deg,#E8F5E9,#F1F8E9)',
          border: '1.5px solid #81C784',
          borderRadius: 10,
          padding: '16px 18px',
          marginBottom: 10,
          textDecoration: 'none',
        }}
      >
        <div style={{ fontSize: 11, color: '#2E7D32', fontWeight: 700, marginBottom: 3 }}>PR</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#1B5E20', marginBottom: 4 }}>
          引越し費用を最大50%節約！
        </div>
        <div style={{ fontSize: 12, color: '#388E3C', marginBottom: 10 }}>
          最大10社から一括見積もり。地方移住の引越しに実績あり。
        </div>
        <div style={{
          fontSize: 13, fontWeight: 700, color: '#fff',
          background: '#2E7D32', display: 'inline-block',
          padding: '8px 20px', borderRadius: 8,
        }}>
          無料で見積もりを比較する →
        </div>
      </a>
      <a
        href={AFFILIATE.chintai}
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={{
          display: 'block',
          background: 'linear-gradient(135deg,#E3F2FD,#E8EAF6)',
          border: '1.5px solid #90CAF9',
          borderRadius: 10,
          padding: '16px 18px',
          marginBottom: 10,
          textDecoration: 'none',
        }}
      >
        <div style={{ fontSize: 11, color: '#1565C0', fontWeight: 700, marginBottom: 3 }}>PR</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#0D47A1', marginBottom: 4 }}>
          移住先の賃貸物件を探す
        </div>
        <div style={{ fontSize: 12, color: '#1976D2', marginBottom: 10 }}>
          全国の賃貸物件を一括検索。地方の格安物件も充実。
        </div>
        <div style={{
          fontSize: 13, fontWeight: 700, color: '#fff',
          background: '#1565C0', display: 'inline-block',
          padding: '8px 20px', borderRadius: 8,
        }}>
          賃貸物件を検索する →
        </div>
      </a>
      <a
        href={AFFILIATE.denki}
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={{
          display: 'block',
          background: 'linear-gradient(135deg,#FFFDE7,#FFF8E1)',
          border: '1.5px solid #FFD54F',
          borderRadius: 10,
          padding: '16px 18px',
          textDecoration: 'none',
        }}
      >
        <div style={{ fontSize: 11, color: '#F57F17', fontWeight: 700, marginBottom: 3 }}>PR</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#E65100', marginBottom: 4 }}>
          引越し後の電気・ガスをまとめて切り替え
        </div>
        <div style={{ fontSize: 12, color: '#BF360C', marginBottom: 10 }}>
          料金プランを一括比較。移住先でお得な電力会社が見つかります。
        </div>
        <div style={{
          fontSize: 13, fontWeight: 700, color: '#fff',
          background: '#F57F17', display: 'inline-block',
          padding: '8px 20px', borderRadius: 8,
        }}>
          電気・ガスを比較する →
        </div>
      </a>
    </div>
  )
}
