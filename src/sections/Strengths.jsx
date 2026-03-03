import './Strengths.css'

const items = [
  {
    label: '【毎日】',
    title: '日々のタスクが分かる',
    desc: '目標から逆算して今日やるべきことを把握！迷う時間をゼロに。',
  },
  {
    label: '【毎週】',
    title: '毎週の振り返りを手伝ってもらえる',
    desc: '勉強の成果を確認して次の行動を改善！先輩たちの思考プロセスを授業で伝授。',
  },
  {
    label: '【毎月】',
    title: '月一回の対面授業×面談！',
    desc: '対面でみんなと一緒に授業を受けてやる気アップ！面談を通して計画の修正もバッチリ！',
  },
]

export default function Strengths() {
  return (
    <section className="strengths" id="strengths" aria-labelledby="strengths-heading">
      <div className="strengths__container">
        <h2 id="strengths-heading" className="strengths__heading">
          <mark>信稀塾なら、サボれない。だから伸びる。</mark>
        </h2>
        <p className="strengths__lead">信稀塾のいいところ</p>
        <ul className="strengths__list">
          {items.map((item, i) => (
            <li key={i} className="strengths__card">
              <span className="strengths__label">{item.label}</span>
              <h3 className="strengths__title">{item.title}</h3>
              <p className="strengths__desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
