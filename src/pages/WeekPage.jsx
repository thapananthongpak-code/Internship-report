import { SingleImageUpload, GalleryUpload } from '../components/ImageUpload'

const weekConfig = {
  week1: { num: 1, title: 'เริ่มต้นการฝึกงาน' },
  week2: { num: 2, title: 'เรียนรู้ระบบและเครื่องมือ' },
  week3: { num: 3, title: 'ลงมือปฏิบัติงาน' },
  week4: { num: 4, title: 'พัฒนาทักษะการทำงาน' },
  week5: { num: 5, title: 'งานโปรเจกต์หลัก' },
  week6: { num: 6, title: 'ทดสอบและปรับปรุงงาน' },
  week7: { num: 7, title: 'สรุปและส่งมอบงาน' },
}

const activityPlaceholders = [
  '[กรอกกิจกรรมที่ 1]',
  '[กรอกกิจกรรมที่ 2]',
  '[กรอกกิจกรรมที่ 3]',
]

export default function WeekPage({ weekId }) {
  const cfg = weekConfig[weekId] || { num: 1, title: 'สัปดาห์การฝึกงาน' }

  return (
    <div className="page-body">
      {/* Week Hero */}
      <div className="week-hero">
        <div className="week-badge">
          <span className="wl">Week</span>
          <span className="wn">{cfg.num}</span>
        </div>
        <div className="week-info">
          <h1>สัปดาห์ที่ {cfg.num}: {cfg.title}</h1>
          <p>บันทึกกิจกรรมและความรู้ที่ได้รับในสัปดาห์นี้</p>
        </div>
        <div className="week-date-pill">
          <div className="dl">ช่วงเวลา</div>
          <div className="dv">[วัน/เดือน/ปี]</div>
          <div className="dv">ถึง [วัน/เดือน/ปี]</div>
        </div>
      </div>

      {/* รูปภาพประจำสัปดาห์ */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">📸</div>
          <div>
            <div className="card-header-title">รูปภาพประจำสัปดาห์ที่ {cfg.num}</div>
            <div className="card-header-sub">บันทึกภาพกิจกรรม การทำงาน หรือบรรยากาศในสัปดาห์นี้</div>
          </div>
        </div>
        <div className="card-body">
          <SingleImageUpload label={`อัปโหลดรูปหลักสัปดาห์ที่ ${cfg.num}`} />
          <div style={{ marginTop: '16px' }}>
            <p className="field-label" style={{ marginBottom: '4px' }}>รูปภาพเพิ่มเติม</p>
            <GalleryUpload label="เพิ่มรูปกิจกรรม" />
          </div>
        </div>
      </div>

      {/* กิจกรรมที่ทำ */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">📋</div>
          <div>
            <div className="card-header-title">กิจกรรมที่ทำในสัปดาห์นี้</div>
            <div className="card-header-sub">สรุปงานและกิจกรรมที่ได้ดำเนินการ</div>
          </div>
        </div>
        <div className="card-body">
          <ul className="activity-list">
            {activityPlaceholders.map((text, i) => (
              <li key={i} className="activity-item">
                <div className="activity-bullet">{i + 1}</div>
                <div className="activity-text" style={{ color: 'var(--gray-400)', fontStyle: 'italic' }}>{text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ความรู้ที่ได้รับ */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">💡</div>
          <div>
            <div className="card-header-title">ความรู้และทักษะที่ได้รับ</div>
            <div className="card-header-sub">สิ่งที่เรียนรู้จากการปฏิบัติงานในสัปดาห์นี้</div>
          </div>
        </div>
        <div className="card-body">
          <div className="activity-ph">
            [กรอกความรู้ ทักษะ และประสบการณ์ที่ได้รับจากการทำงานในสัปดาห์นี้]
          </div>

          <div className="section-div"></div>
          <p className="field-label" style={{ marginBottom: '12px' }}>ทักษะที่ได้พัฒนา</p>
          <div className="skill-tags">
            <span className="skill-tag ph">[ทักษะที่ 1]</span>
            <span className="skill-tag ph">[ทักษะที่ 2]</span>
            <span className="skill-tag ph">[ทักษะที่ 3]</span>
          </div>
        </div>
      </div>

      {/* ปัญหาและการแก้ไข */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">🔧</div>
          <div>
            <div className="card-header-title">ปัญหาที่พบและแนวทางการแก้ไข</div>
          </div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            <div className="info-field full">
              <span className="field-label">ปัญหาที่พบ</span>
              <div className="field-value ph">[กรอกปัญหาหรืออุปสรรคที่พบในสัปดาห์นี้]</div>
            </div>
            <div className="info-field full">
              <span className="field-label">แนวทางการแก้ไข</span>
              <div className="field-value ph">[กรอกวิธีที่ใช้แก้ปัญหาและผลที่ได้รับ]</div>
            </div>
          </div>
        </div>
      </div>

      {/* งานที่มอบหมาย */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">📝</div>
          <div>
            <div className="card-header-title">งานที่ได้รับมอบหมาย</div>
            <div className="card-header-sub">รายการงานที่ได้รับและสถานะ</div>
          </div>
        </div>
        <div className="card-body">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'var(--gray-100)' }}>
                {['ลำดับ', 'ชื่องาน', 'สถานะ', 'หมายเหตุ'].map(h => (
                  <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '700', color: 'var(--primary)', border: '1px solid var(--gray-200)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map(i => (
                <tr key={i} style={{ borderBottom: '1px solid var(--gray-200)' }}>
                  <td style={{ padding: '10px 14px', border: '1px solid var(--gray-200)', textAlign: 'center', fontWeight: '600' }}>{i}</td>
                  <td style={{ padding: '10px 14px', border: '1px solid var(--gray-200)', color: 'var(--gray-400)', fontStyle: 'italic' }}>[ชื่องาน]</td>
                  <td style={{ padding: '10px 14px', border: '1px solid var(--gray-200)' }}>
                    <span style={{ background: 'var(--gray-100)', color: 'var(--gray-500)', padding: '2px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>รอดำเนินการ</span>
                  </td>
                  <td style={{ padding: '10px 14px', border: '1px solid var(--gray-200)', color: 'var(--gray-400)', fontStyle: 'italic' }}>[หมายเหตุ]</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ความรู้สึกและความประทับใจ */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">💬</div>
          <div>
            <div className="card-header-title">ความรู้สึกและความประทับใจ</div>
          </div>
        </div>
        <div className="card-body">
          <div className="activity-ph">
            [กรอกความรู้สึก ความประทับใจ หรือสิ่งที่อยากแชร์เกี่ยวกับสัปดาห์นี้]
          </div>
        </div>
      </div>
    </div>
  )
}
