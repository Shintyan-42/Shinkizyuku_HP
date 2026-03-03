import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h1 className="dashboard__title">Dashboard</h1>
        <p className="dashboard__lead">
          信稀塾の管理用ダッシュボードです。
        </p>
        <div className="dashboard__grid">
          <section className="dashboard__card">
            <h2 className="dashboard__card-title">お問い合わせ</h2>
            <p className="dashboard__card-value">0</p>
            <p className="dashboard__card-label">件（今月）</p>
          </section>
          <section className="dashboard__card">
            <h2 className="dashboard__card-title">無料相談申込</h2>
            <p className="dashboard__card-value">0</p>
            <p className="dashboard__card-label">件（今月）</p>
          </section>
          <section className="dashboard__card">
            <h2 className="dashboard__card-title">ロードマップ作成依頼</h2>
            <p className="dashboard__card-value">0</p>
            <p className="dashboard__card-label">件（今月）</p>
          </section>
        </div>
        <div className="dashboard__section">
          <h2 className="dashboard__section-title">直近のアクション</h2>
          <p className="dashboard__empty">
            まだデータがありません。フォーム送信と連携するとここに表示されます。
          </p>
        </div>
      </div>
    </div>
  )
}
