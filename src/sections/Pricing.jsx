import './Pricing.css'

const plans = [
  {
    name: 'プランA',
    price: '12,000',
    unit: '円/月',
    items: ['オンライン 4コマ'],
    note: null,
  },
  {
    name: 'プランB',
    price: '20,000',
    unit: '円/月',
    items: ['オンライン 4コマ', '月1回 集団対面', '進捗管理'],
    note: null,
  },
  {
    name: 'プランC',
    price: '28,000',
    unit: '円/月',
    items: ['オンライン 4コマ', '月2回 訪問対面', '進捗管理'],
    note: null,
  },
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-heading">
      <div className="pricing__container">
        <h2 id="pricing-heading" className="pricing__heading">コース・料金</h2>
        <p className="pricing__note">
          <a href="#footer-note" className="pricing__ref">※1</a>
        </p>
        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <article key={i} className="pricing__card">
              <h3 className="pricing__name">{plan.name}</h3>
              <p className="pricing__price">
                <span className="pricing__amount">{plan.price}</span>
                <span className="pricing__unit">{plan.unit}</span>
              </p>
              <ul className="pricing__items">
                {plan.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
