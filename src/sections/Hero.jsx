import { LINE_URL } from '../config'
import './Hero.css'

export default function Hero() {
  return (
    <header className="hero" id="hero" role="banner">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__hook">サボりがちな自分、先輩と一緒に変えようぜ！</p>
          <h1 className="hero__name">
            <img src="/logo.png" alt="信稀塾" className="hero__logo" />
            <span className="hero__name-sub">～オンライン×対面式学習塾～</span>
          </h1>
          <p className="hero__main">
            大阪公立大・熊本大生 直伝。<mark>「管理」で伸ばす塾。</mark>
          </p>
          <p className="hero__sub">毎週のオンライン授業 × 月1回の対面指導</p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta"
          >
            まずは無料相談へ（LINE）
          </a>
        </div>
      </div>
    </header>
  )
}
