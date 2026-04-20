'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoMark}>
          <svg viewBox="0 0 16 16" fill="none" width="15" height="15">
            <circle cx="8" cy="7" r="3" stroke="#fff" strokeWidth="1.5" />
            <path d="M3 13c0-2 2.2-3.5 5-3.5s5 1.5 5 3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <span className={styles.logoName}>くらし<em>比較</em>ナビ</span>
      </Link>
      <nav className={styles.nav}>
        <Link href="/" className={pathname === '/' ? styles.active : ''}>比較する</Link>
        <Link href="/ranking" className={pathname === '/ranking' ? styles.active : ''}>ランキング</Link>
        <Link href="/subsidies" className={pathname === '/subsidies' ? styles.active : ''}>支援金</Link>
        <Link href="/blog" className={pathname?.startsWith('/blog') ? styles.active : ''}>コラム</Link>
      </nav>
    </header>
  )
}
