import './Concept.css'

export default function Concept() {
  return (
    <section className="concept" id="concept" aria-labelledby="concept-heading">
      <div className="concept__container">
        <h2 id="concept-heading" className="concept__heading">なぜオンライン×対面なのか？</h2>
        <div className="concept__body">
          <div className="concept__text">
            <p>
              塾に行って頑張っている子にありがちなことが、「家での学習習慣が無い」「塾から帰ると勉強できない」。
              自習時間がとても重要な大学受験、<mark>「家での学習習慣の定着」</mark>と<mark>「対面による強制力」</mark>を両立させ、難関大学を目指そう！
            </p>
          </div>
          <div className="concept__visual">
            <img
              src="https://placehold.co/480x320/1e3a5f/e2e8f0?text=オンライン×対面"
              alt="オンラインと対面のハイブリッド学習"
              width={480}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
