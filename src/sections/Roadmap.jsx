import './Roadmap.css'

export default function Roadmap() {
  return (
    <section className="roadmap" id="roadmap" aria-labelledby="roadmap-heading">
      <div className="roadmap__container">
        <h2 id="roadmap-heading" className="roadmap__heading">合格ロードマップ</h2>
        <p className="roadmap__lead">
          入塾金10,000円には、<strong>個別具体的な学習進度設計（ロードマップ作成）</strong>が含まれています。
        </p>
        <div className="roadmap__content">
          <p>
            志望校や現状に合わせて、いつまでに何をどれだけやるかを可視化。合格までの道筋を一緒に設計し、迷いなく勉強に集中できる環境を整えます。
          </p>
          <p className="roadmap__note">
            ※ ロードマップは入塾金（10,000円）に含まれるサービスです。
          </p>
        </div>
      </div>
    </section>
  )
}
