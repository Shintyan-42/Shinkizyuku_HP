import './Comparison.css'

const comparisonRows = [
  { item: '管理力', shinki: '◎', video: '△', group: '×', individual: '△' },
  { item: '対面での熱量', shinki: '◎', video: '×', group: '△', individual: '◎' },
  { item: '家での学習習慣づくり', shinki: '◎', video: '△', group: '△', individual: '△' },
  { item: '進捗の可視化', shinki: '◎', video: '△', group: '×', individual: '△' },
]

export default function Comparison() {
  return (
    <section className="comparison" id="comparison" aria-labelledby="comparison-heading">
      <div className="comparison__container">
        <h2 id="comparison-heading" className="comparison__heading">他塾との比較</h2>
        <div className="comparison__grid">
          <div className="comparison__table-wrap">
            <table className="comparison__table">
              <thead>
                <tr>
                  <th scope="col">項目</th>
                  <th scope="col">信稀塾</th>
                  <th scope="col">映像授業</th>
                  <th scope="col">集団授業</th>
                  <th scope="col">ほかの個別指導</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.item}</td>
                    <td className="comparison__good">{row.shinki}</td>
                    <td>{row.video}</td>
                    <td>{row.group}</td>
                    <td>{row.individual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="comparison__target">
            <h3 className="comparison__target-heading">こんな方へ</h3>
            <p className="comparison__target-area">
              <strong>大阪公立大（中百舌鳥・杉本）周辺</strong>、<strong>熊本大（黒髪）周辺</strong>の高校生をはじめ、
              オンライン×対面で「管理」しながら伸ばしたい方をお待ちしています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
