import './Instructors.css'

const instructors = [
  {
    name: '北川',
    photo: 'https://placehold.co/280x320/1e3a5f/e2e8f0?text=北川',
    achievements: ['推薦でGLC合格', '英数偏差値70超', '合格率100%'],
    story: '受験を戦い抜いた経験を、次世代に伝えます。',
    history: '沿革があればここに記載します。',
  },
  {
    name: '丸田',
    photo: 'https://placehold.co/280x320/1e3a5f/e2e8f0?text=丸田',
    achievements: ['数学 18点→42点へ向上', '共通テスト英語 学年142位→1位へ逆転'],
    story: '自分自身の逆転体験を活かし、同じ悩みを持つ生徒を支えます。',
    history: '沿革があればここに記載します。',
  },
]

export default function Instructors() {
  return (
    <section className="instructors" id="instructors" aria-labelledby="instructors-heading">
      <div className="instructors__container">
        <h2 id="instructors-heading" className="instructors__heading">講師紹介</h2>
        <p className="instructors__lead">
          大阪公立大・熊本大の現役生が、合格まで伴走します。
        </p>
        <ul className="instructors__list">
          {instructors.map((instructor, i) => (
            <li key={i} className="instructors__card">
              <div className="instructors__photo-wrap">
                <img
                  src={instructor.photo}
                  alt={`講師 ${instructor.name}`}
                  width={280}
                  height={320}
                  className="instructors__photo"
                />
              </div>
              <div className="instructors__body">
                <h3 className="instructors__name">{instructor.name}</h3>
                <ul className="instructors__achievements">
                  {instructor.achievements.map((a, j) => (
                    <li key={j}>{a}</li>
                  ))}
                </ul>
                <p className="instructors__story">{instructor.story}</p>
                {instructor.history && (
                  <p className="instructors__history">{instructor.history}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
