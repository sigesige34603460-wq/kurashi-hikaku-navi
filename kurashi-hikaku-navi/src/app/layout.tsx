import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'くらし比較ナビ | 移住先の生活費・住みやすさを比較',
  description: '都市別の生活費・住みやすさを数値で比較。移住シミュレーターで月いくら節約できるかすぐわかります。総務省データ準拠。',
  keywords: '移住,生活費比較,住みやすさランキング,移住支援金,地方移住,引越し,節約',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FPH2D8JQF1"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FPH2D8JQF1');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
