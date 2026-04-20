import { SingleImageUpload, GalleryUpload } from '../components/ImageUpload'
import WeekProgress from '../components/WeekProgress'

const weekConfig = {
  week1: { num: 1, title: 'เริ่มต้นการฝึกงาน',         theme: 'ปรับตัวและเรียนรู้ระบบขององค์กร' },
  week2: { num: 2, title: 'เรียนรู้ระบบและเครื่องมือ',  theme: 'ศึกษา tech stack และ workflow ของทีม' },
  week3: { num: 3, title: 'ลงมือปฏิบัติงาน',           theme: 'เริ่มรับงานจริงจากพี่เลี้ยง' },
  week4: { num: 4, title: 'พัฒนาทักษะการทำงาน',        theme: 'ฝึกทักษะเพิ่มเติมและแก้ปัญหาที่ซับซ้อนขึ้น' },
  week5: { num: 5, title: 'งานโปรเจกต์หลัก',           theme: 'ดำเนินงานโปรเจกต์ที่ได้รับมอบหมาย' },
  week6: { num: 6, title: 'ทดสอบและปรับปรุงงาน',        theme: 'QA, testing และ code review' },
  week7: { num: 7, title: 'สรุปและส่งมอบงาน',           theme: 'ปิดงานและนำเสนอผลลัพธ์ต่อทีม' },
}

export default function WeekPage({ weekId }) {
  const cfg = weekConfig[weekId] ?? { num: 1, title: 'สัปดาห์การฝึกงาน', theme: '' }

  return (
    <div className="page-body">
      <WeekProgress currentWeek={cfg.num} />

      {/* Week Hero */}
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
          <div className="dv">[วัน/เดือน/ปี]</div>
          <div className="dv" style={{ marginTop: '2px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>ถึง [วัน/เดือน/ปี]</div>
        </div>
      </div>

      {/* รูปภาพ */}
      <div className="card animate-fade-up delay-100">
        <div className="card-header">
          <div className="card-header-icon">📸</div>
          <div>
            <div className="card-header-title">รูปภาพประจำสัปดาห์ที่ {cfg.num}</div>
            <div className="card-header-sub">ลากรูปมาวางหรือคลิกเพื่อเลือกไฟล์</div>
          </div>
        </div>
        <div className="card-body">
          <SingleImageUpload label={`รูปหลักสัปดาห์ที่ ${cfg.num}`} />
          <div style={{ marginTop: '18px' }}>
            <p className="field-label" style={{ marginBottom: '8px' }}>รูปภาพกิจกรรม (หลายรูป)</p>
            <GalleryUpload label="เพิ่มรูป" />
          </div>
        </div>
      </div>

      {/* กิจกรรม */}
      <div className="card animate-fade-up delay-200">
        <div className="card-header">
          <div className="card-header-icon">📋</div>
          <div>
            <div className="card-header-title">กิจกรรมที่ทำในสัปดาห์นี้</div>
            <div className="card-header-sub">สรุปงานและกิจกรรมที่ได้ดำเนินการ</div>
          </div>
        </div>
        <div className="card-body">
          <ul className="activity-list">
            {['[กรอกกิจกรรมที่ 1]','[กรอกกิจกรรมที่ 2]','[กรอกกิจกรรมที่ 3]'].map((text, i) => (
              <li key={i} className="activity-item">
                <div className="activity-bullet">{i + 1}</div>
                <div className="activity-text" style={{ color: 'var(--gray-400)', fontStyle: 'italic' }}>{text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ความรู้ที่ได้รับ */}
      <div className="card animate-fade-up delay-300">
        <div className="card-header">
          <div className="card-header-icon">💡</div>
          <div>
            <div className="card-header-title">ความรู้และทักษะที่ได้รับ</div>
            <div className="card-header-sub">สิ่งที่เรียนรู้จากการปฏิบัติงาน</div>
          </div>
        </div>
        <div className="card-body">
          <div className="activity-ph">[กรอกความรู้ ทักษะ และประสบการณ์ที่ได้รับในสัปดาห์นี้]</div>
          <div className="section-div"></div>
          <p className="field-label" style={{ marginBottom: '10px' }}>ทักษะที่ได้พัฒนา</p>
          <div className="skill-tags">
            {['[ทักษะที่ 1]','[ทักษะที่ 2]','[ทักษะที่ 3]'].map((s, i) => (
              <span key={i} className="skill-tag ph">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ปัญหาและแก้ไข */}
      <div className="card animate-fade-up delay-300">
        <div className="card-header">
          <div className="card-header-icon">🔧</div>
          <div>
            <div className="card-header-title">ปัญหาที่พบและแนวทางแก้ไข</div>
          </div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            <div className="info-field full">
              <span className="field-label">ปัญหาที่พบ</span>
              <div className="field-value ph">[กรอกปัญหาหรืออุปสรรคที่พบ]</div>
            </div>
            <div className="info-field full">
              <span className="field-label">แนวทางการแก้ไข</span>
              <div className="field-value ph">[กรอกวิธีแก้ไขและผลที่ได้รับ]</div>
            </div>
          </div>
        </div>
      </div>

      {/* ตารางงาน */}
      <div className="card animate-fade-up delay-400">
        <div className="card-header">
          <div className="card-header-icon">📝</div>
          <div>
            <div className="card-header-title">งานที่ได้รับมอบหมาย</div>
            <div className="card-header-sub">รายการงานและสถานะ</div>
          </div>
        </div>
        <div className="card-body" style={{ padding: '0', overflowX: 'auto' }}>
          <table className="report-table">
            <thead>
              <tr>
                {['#','ชื่องาน / Task','สถานะ','หมายเหตุ'].map(h => <th key={h}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[1,2,3].map(i => (
                <tr key={i}>
                  <td>{i}</td>
                  <td style={{ color: 'var(--gray-400)', fontStyle: 'italic' }}>[ชื่องาน]</td>
                  <td><span className="status-badge todo">⏳ รอดำเนินการ</span></td>
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
          <div className="card-header-icon">💬</div>
          <div>
            <div className="card-header-title">ความรู้สึกและความประทับใจ</div>
          </div>
        </div>
        <div className="card-body">
          <div className="activity-ph">[กรอกความรู้สึก ความประทับใจ หรือสิ่งที่อยากแชร์ในสัปดาห์นี้]</div>
        </div>
      </div>
    </div>
  )
}
