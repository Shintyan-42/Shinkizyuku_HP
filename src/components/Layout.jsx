import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return (
    <>
      <header className="layout-header">
        <div className="layout-header__inner">
          <Link to="/" className="layout-header__logo">
            <img src="/logo.png" alt="信稀塾" className="layout-header__logo-img" />
            <span className="layout-header__logo-sub">～オンライン×対面式～</span>
          </Link>
          <nav className="layout-header__nav">
            <Link to="/" className="layout-header__link">トップ</Link>
            <a href="/#strengths" className="layout-header__link">特徴</a>
            <a href="/#instructors" className="layout-header__link">講師紹介</a>
            <a href="/#pricing" className="layout-header__link">コース・料金</a>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}
