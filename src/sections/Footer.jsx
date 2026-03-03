import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <p id="footer-note" className="footer__note">
          <span className="footer__ref">※1</span>{' '}
          <mark>すべてのプランに入塾金10,000円（ロードマップ作成費）が別途必要です。</mark>
        </p>
      </div>
    </footer>
  )
}
