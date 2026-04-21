import { SingleImageUpload, GalleryUpload } from '../components/ImageUpload'
import WeekProgress from '../components/WeekProgress'
import { WEEK_DATES, DAILY_LOGS } from '../data/reportData'

// ════════════════════════════════════════════
//  แก้ชื่อหัวข้อแต่ละสัปดาห์ตรงนี้
// ════════════════════════════════════════════
const weekConfig = {
  week1: { num: 1, title: 'เริ่มต้นการฝึกงาน',        theme: 'ปรับตัวและเรียนรู้ระบบขององค์กร' },
  week2: { num: 2, title: 'เรียนรู้ระบบและเครื่องมือ', theme: 'ศึกษา Tech Stack และ Workflow ของทีม' },
  week3: { num: 3, title: 'ลงมือปฏิบัติงาน',          theme: 'เริ่มรับงานจริงจากพนักงานพี่เลี้ยง' },
  week4: { num: 4, title: 'พัฒนาทักษะการทำงาน',       theme: 'ฝึกทักษะเพิ่มเติมและแก้ปัญหาที่ซับซ้อนขึ้น' },
  week5: { num: 5, title: 'งานโปรเจกต์หลัก',          theme: 'ดำเนินงานโปรเจกต์ที่ได้รับมอบหมาย' },
  week6: { num: 6, title: 'ทดสอบและปรับปรุงงาน',       theme: 'QA, Testing และ Code Review' },
  week7: { num: 7, title: 'สรุปและส่งมอบงาน',          theme: 'ปิดงานและนำเสนอผลลัพธ์ต่อทีม' },
}

const DAY_COLOR = {
  'จันทร์':    '#fde68a',
  'อังคาร':   '#fca5a5',
  'พุธ':       '#86efac',
  'พฤหัสบดี': '#fcd34d',
  'ศุกร์':     '#93c5fd',
}
const DAY_SHORT = {
  'จันทร์': 'จ', 'อังคาร': 'อ', 'พุธ': 'พ', 'พฤหัสบดี': 'พฤ', 'ศุกร์': 'ศ',
}

export default function WeekPage({ weekId }) {
  const cfg   = weekConfig[weekId] ?? { num: 1, title: 'สัปดาห์การฝึกงาน', theme: '' }
  const daily = DAILY_LOGS[weekId] ?? []

  return (
    <div className="page-body">
      <WeekProgress currentWeek={cfg.num} />

      {/* ── Week Hero ── */}
      <div className="week-hero animate-fade-up">
        <div className="week-badge">
          <span className="wl">Week</span>
          <span className="wn">{cfg.num}</span>
        </div>
        <div className="week-info">
          <h1>สัปดาห์ที่ {cfg.num}: {cfg.title}</h1>
          <p>{cfg.theme}</p>
        </div>
        <div className="week-date-pill">
          <div className="dl">ช่วงเวลา</div>
          <div className="dv">{WEEK_DATES[weekId] ?? '–'}</div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          บันทึกรายวัน
      ══════════════════════════════════════════ */}
      <div className="card animate-fade-up delay-100">
        <div className="card-header">
          <div>
            <div className="card-header-title">บันทึกรายวัน</div>
            <div className="card-header-sub">รายละเอียดงานที่ทำในแต่ละวัน</div>
          </div>
        </div>
        <div className="card-body" style={{ padding: 0 }}>
          <div className="daily-log-list">
            {daily.map((entry, i) => (
              <div key={i} className="daily-log-row">
                {/* วัน badge */}
                <div
                  className="daily-day-badge"
                  style={{ background: DAY_COLOR[entry.day] ?? '#e5e7eb' }}
                >
                  <span className="daily-day-short">{DAY_SHORT[entry.day] ?? entry.day[0]}</span>
                  <span className="daily-day-full">{entry.day}</span>
                </div>

                {/* วันที่ */}
                <div className="daily-date">
                  <span className="daily-date-label">วันที่</span>
                  <span className="daily-date-val">{entry.date}</span>
                </div>

                {/* งานที่ทำ */}
                <div className="daily-tasks">
                  {entry.tasks}
                </div>

                {/* เวลา */}
                <div className="daily-time">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.5 }}>
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {entry.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── รูปภาพ ── */}
      <div className="card animate-fade-up delay-200">
        <div className="card-header">
          <div>
            <div className="card-header-title">รูปภาพประจำสัปดาห์ที่ {cfg.num}</div>
            <div className="card-header-sub">ลากรูปมาวางหรือคลิกเพื่อเลือกไฟล์</div>
          </div>
        </div>
        <div className="card-body">
          <SingleImageUpload label={`รูปหลักสัปดาห์ที่ ${cfg.num}`} />
          <div style={{ marginTop: '18px' }}>
            <p className="field-label" style={{ marginBottom: '8px' }}>รูปภาพกิจกรรม</p>
            <GalleryUpload label="เพิ่มรูป" />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ── สรุปรายสัปดาห์ ──
      ══════════════════════════════════════════ */}
      <div className="week-summary-divider animate-fade-up delay-200">
        <div className="week-summary-line" />
        <span className="week-summary-label">สรุปรายสัปดาห์</span>
        <div className="week-summary-line" />
      </div>

      {/* กิจกรรม */}
      <div className="card animate-fade-up delay-200">
        <div className="card-header">
          <div>
            <div className="card-header-title">กิจกรรมและงานที่ทำในสัปดาห์นี้</div>
            <div className="card-header-sub">ภาพรวมสิ่งที่ได้ดำเนินการตลอดสัปดาห์</div>
          </div>
        </div>
        <div className="card-body">
          <ul className="activity-list">
            {[
              /* ← แก้กิจกรรมสรุปสัปดาห์ตรงนี้ */
              '[กรอกกิจกรรมสรุปที่ 1]',
              '[กรอกกิจกรรมสรุปที่ 2]',
              '[กรอกกิจกรรมสรุปที่ 3]',
            ].map((text, i) => (
              <li key={i} className="activity-item">
                <div className="activity-bullet">{i + 1}</div>
                <div className="activity-text" style={{ color: 'var(--gray-400)', fontStyle: 'italic' }}>{text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ความรู้ */}
      <div className="card animate-fade-up delay-300">
        <div className="card-header">
          <div>
            <div className="card-header-title">ความรู้และทักษะที่ได้รับ</div>
            <div className="card-header-sub">สิ่งที่เรียนรู้จากการปฏิบัติงานในสัปดาห์นี้</div>
          </div>
        </div>
        <div className="card-body">
          <div className="activity-ph">[กรอกความรู้ ทักษะ และประสบการณ์ที่ได้รับในสัปดาห์นี้]</div>
          <div className="section-div"></div>
          <p className="field-label" style={{ marginBottom: '10px' }}>ทักษะที่ได้พัฒนา</p>
          <div className="skill-tags">
            {[
              /* ← แก้ทักษะตรงนี้ */
              '[ทักษะที่ 1]', '[ทักษะที่ 2]', '[ทักษะที่ 3]',
            ].map((s, i) => (
              <span key={i} className="skill-tag ph">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ปัญหา */}
      <div className="card animate-fade-up delay-300">
        <div className="card-header">
          <div><div className="card-header-title">ปัญหาที่พบและแนวทางแก้ไข</div></div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            <div className="info-field full">
              <span className="field-label">ปัญหาที่พบ</span>
              {/* ← แก้ปัญหาตรงนี้ */}
              <div className="field-value ph">[กรอกปัญหาหรืออุปสรรคที่พบในสัปดาห์นี้]</div>
            </div>
            <div className="info-field full">
              <span className="field-label">แนวทางการแก้ไข</span>
              {/* ← แก้วิธีแก้ตรงนี้ */}
              <div className="field-value ph">[กรอกวิธีแก้ไขและผลที่ได้รับ]</div>
            </div>
          </div>
        </div>
      </div>

      {/* งานที่ได้รับมอบหมาย */}
      <div className="card animate-fade-up delay-400">
        <div className="card-header">
          <div>
            <div className="card-header-title">งานที่ได้รับมอบหมาย</div>
            <div className="card-header-sub">รายการงานและสถานะ</div>
          </div>
        </div>
        <div className="card-body" style={{ padding: '0', overflowX: 'auto' }}>
          <table className="report-table">
            <thead>
              <tr>
                {['#', 'ชื่องาน / Task', 'สถานะ', 'หมายเหตุ'].map(h => <th key={h}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map(i => (
                <tr key={i}>
                  <td>{i}</td>
                  <td style={{ color: 'var(--gray-400)', fontStyle: 'italic' }}>[ชื่องาน]</td>
                  <td><span className="status-badge todo">รอดำเนินการ</span></td>
                  <td style={{ color: 'var(--gray-400)', fontStyle: 'italic' }}>[หมายเหตุ]</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ความประทับใจ */}
      <div className="card animate-fade-up delay-500">
        <div className="card-header">
          <div><div className="card-header-title">ความรู้สึกและความประทับใจ</div></div>
        </div>
        <div className="card-body">
          {/* ← แก้ความประทับใจตรงนี้ */}
          <div className="activity-ph">[กรอกความรู้สึก ความประทับใจ หรือสิ่งที่อยากบันทึกในสัปดาห์นี้]</div>
        </div>
      </div>
    </div>
  )
}
