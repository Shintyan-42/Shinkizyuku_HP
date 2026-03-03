import './WhyUs.css'

const items = [
  {
    title: '大学生ならではの距離感',
    description: '年齢が近いからこそ、悩みや不安に寄り添い、本音で話せる関係を築けます。',
  },
  {
    title: 'アプリによる徹底管理',
    description: '進捗・課題・スケジュールをアプリで一元管理。保護者様も進捗を把握しやすく、安心です。',
  },
  {
    title: 'オンライン×対面の効率',
    description: 'オンラインで継続的に学び、対面で密度の高い指導を受けるハイブリッド型で効率よく伸ばします。',
  },
]

export default function WhyUs() {
  return (
    <section className="whyus" id="whyus" aria-labelledby="whyus-heading">
      <div className="whyus__container">
        <h2 id="whyus-heading" className="whyus__heading">選ばれる理由</h2>
        <p className="whyus__lead">
          大学生×アプリ管理×ハイブリッド指導の3つの強みで、合格まで伴走します。
        </p>
        <ul className="whyus__list">
          {items.map((item, i) => (
            <li key={i} className="whyus__item">
              <h3 className="whyus__item-title">{item.title}</h3>
              <p className="whyus__item-desc">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
