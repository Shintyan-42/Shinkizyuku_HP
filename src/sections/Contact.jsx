import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact__container">
        <h2 id="contact-heading" className="contact__heading">お問い合わせ</h2>
        <p className="contact__lead">
          無料相談・ロードマップ作成のご依頼は、下記フォームからお送りください。
        </p>
        {submitted ? (
          <div className="contact__thanks">
            <p>送信ありがとうございます。内容を確認のうえ、ご連絡いたします。</p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="contact-name">お名前（必須）</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="例：山田 太郎"
                autoComplete="name"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email">メールアドレス（必須）</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                placeholder="例：example@email.com"
                autoComplete="email"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-tel">電話番号</label>
              <input
                id="contact-tel"
                type="tel"
                name="tel"
                placeholder="例：090-1234-5678"
                autoComplete="tel"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message">ご相談・ご質問内容</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="無料相談希望 / ロードマップ作成依頼 など"
              />
            </div>
            <button type="submit" className="contact__submit">
              送信する
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
