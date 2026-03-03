import './About.css'

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about__container">
        <h2 id="about-heading" className="about__heading">信稀塾とは</h2>
        <p className="about__concept">
          受験を「戦争」と捉え、その戦いを勝ち抜いた者だけが持つノウハウがあります。
          信稀塾は、その戦いを乗り越えた現役大学生が、<strong>戦士の思考法</strong>と実践的な学び方を伝授する塾です。
        </p>
        <ul className="about__points">
          <li>現役大学生による指導</li>
          <li>アプリ管理型の進捗把握</li>
          <li>オンラインと対面のハイブリッド指導</li>
        </ul>
      </div>
    </section>
  )
}
