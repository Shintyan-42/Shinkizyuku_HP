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
            <Link to="/" className="layout-header__link">LP</Link>
            <Link to="/dashboard" className="layout-header__link">Dashboard</Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}
