import { LINE_URL } from '../config'
import './CtaLine.css'

export default function CtaLine() {
  return (
    <section className="cta-line" id="cta-line" aria-labelledby="cta-line-heading">
      <div className="cta-line__container">
        <h2 id="cta-line-heading" className="cta-line__heading">
          \ <mark>今だけ！LINE登録特典</mark> /
        </h2>
        <ul className="cta-line__offers">
          <li><mark>① 理系大学生の秘密の公式シート</mark></li>
          <li><mark>② 1週間 無料体験（アプリ・指導込）</mark></li>
        </ul>
        <div className="cta-line__actions">
          <div className="cta-line__qr-wrap">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-line__qr-link"
              aria-label="LINE友だち追加（QRコード）"
            >
              <img
                src="/line-qr.png"
                alt="LINE友だち追加QRコード"
                width={160}
                height={160}
                className="cta-line__qr"
              />
            </a>
            <p className="cta-line__qr-caption">QRコードで友だち追加</p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-line__url-caption">
              URLからも追加できます
            </a>
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-line__button"
          >
            まずは無料相談へ（LINE）
          </a>
        </div>
      </div>
    </section>
  )
}
