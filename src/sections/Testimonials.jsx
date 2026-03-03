import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials__container">
        <h2 id="testimonials-heading" className="testimonials__heading">合格実績・体験談</h2>
        <p className="testimonials__lead">
          逆転合格の記録を、これからも積み重ねていきます。
        </p>
        <div className="testimonials__content">
          <p>
            講師自身の逆転体験（数学18点→42点、英語学年142位→1位など）をはじめ、
            信稀塾で学んだ生徒の合格実績や体験談を随時掲載予定です。
          </p>
        </div>
      </div>
    </section>
  )
}
