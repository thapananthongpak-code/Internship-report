const weeks = ['สัปดาห์ 1','สัปดาห์ 2','สัปดาห์ 3','สัปดาห์ 4','สัปดาห์ 5','สัปดาห์ 6','สัปดาห์ 7','สัปดาห์ 8']

export default function WeekProgress({ currentWeek }) {
  const pct = Math.round((currentWeek / 8) * 100)
  return (
    <div className="week-progress animate-fade-in">
      <span className="week-progress-label">ความคืบหน้า</span>
      <div className="week-progress-steps">
        {weeks.map((w, i) => (
          <div
            key={i}
            className={`week-step${i < currentWeek - 1 ? ' done' : i === currentWeek - 1 ? ' current' : ''}`}
            title={w}
          >
            <span className="week-step-tooltip">{w}</span>
          </div>
        ))}
      </div>
      <span className="week-progress-pct">{pct}%</span>
    </div>
  )
}
