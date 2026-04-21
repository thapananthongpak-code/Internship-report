import { SingleImageUpload } from '../components/ImageUpload'
import { STUDENT, MENTOR } from '../data/reportData'

export default function HomePage() {
  return (
    <div className="page-body">
      <div className="cover-hero animate-scale-in">
        <span className="cover-tag">รายงานผลการฝึกงาน</span>
        <h1 className="cover-title">รายงานการฝึกประสบการณ์<br/>วิชาชีพ</h1>
        <p className="cover-subtitle">บริษัท ศิริซอฟต์ จำกัด (Sirisoft Co., Ltd.)</p>
        <div className="cover-divider"></div>
        <div className="cover-info-grid">
          {[
            { label: 'นักศึกษา',        value: STUDENT.name },
            { label: 'รหัสนักศึกษา',    value: STUDENT.id },
            { label: 'สาขาวิชา',        value: STUDENT.major },
            { label: 'คณะ',             value: STUDENT.faculty },
            { label: 'ระยะเวลาฝึกงาน', value: '7 สัปดาห์' },
            { label: 'ช่วงเวลา',        value: `${STUDENT.startDate} – ${STUDENT.endDate}` },
          ].map((item, i) => (
            <div key={i} className="cover-info-item">
              <div className="cover-info-label">{item.label}</div>
              <div className="cover-info-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card animate-fade-up delay-100">
        <div className="card-header">
          <div>
            <div className="card-header-title">รูปภาพหน้าปก</div>
            <div className="card-header-sub">อัปโหลดรูปถ่ายหรือบรรยากาศการฝึกงาน</div>
          </div>
        </div>
        <div className="card-body">
          <SingleImageUpload label="คลิกหรือลากรูปหน้าปกมาวาง" />
        </div>
      </div>

      <div className="card animate-fade-up delay-200">
        <div className="card-header">
          <div>
            <div className="card-header-title">ข้อมูลนักศึกษา</div>
            <div className="card-header-sub">ข้อมูลผู้จัดทำรายงาน</div>
          </div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            {[
              { label: 'ชื่อ-นามสกุล',        value: STUDENT.name },
              { label: 'รหัสนักศึกษา',         value: STUDENT.id },
              { label: 'สาขาวิชา',             value: STUDENT.major },
              { label: 'คณะ',                  value: STUDENT.faculty },
              { label: 'มหาวิทยาลัย',          value: STUDENT.university, full: true },
              { label: 'อาจารย์ที่ปรึกษา',     value: STUDENT.advisor },
              { label: 'ช่วงระยะเวลาฝึกงาน',  value: `${STUDENT.startDate} – ${STUDENT.endDate} (7 สัปดาห์)`, full: true },
            ].map((f, i) => (
              <div key={i} className={`info-field${f.full ? ' full' : ''}`}>
                <span className="field-label">{f.label}</span>
                <div className="field-value">{f.value}</div>
              </div>
            ))}
          </div>

          <div className="section-div"></div>
          <p className="field-label" style={{ marginBottom: '10px' }}>รูปถ่ายนักศึกษา</p>
          <div style={{ maxWidth: '240px' }}>
            <SingleImageUpload label="อัปโหลดรูปถ่าย" />
          </div>
        </div>
      </div>

      {/* พนักงานพี่เลี้ยง */}
      <div className="card animate-fade-up delay-300">
        <div className="card-header">
          <div>
            <div className="card-header-title">ข้อมูลพนักงานพี่เลี้ยง</div>
            <div className="card-header-sub">ผู้ดูแลและให้คำปรึกษาตลอดระยะเวลาการฝึกงาน</div>
          </div>
        </div>
        <div className="card-body">

          <div className="mentor-profile">
            <div className="mentor-avatar-wrap">
              <SingleImageUpload label="รูปถ่ายพี่เลี้ยง" />
            </div>
            <div className="mentor-detail">
              <div className="info-grid">
                {[
                  { label: 'ชื่อ-นามสกุล',   value: MENTOR.name },
                  { label: 'ตำแหน่ง',         value: MENTOR.position },
                  { label: 'แผนก / ทีม',      value: MENTOR.department },
                  { label: 'อีเมล',            value: MENTOR.email },
                  { label: 'เบอร์โทรศัพท์',   value: MENTOR.phone },
                  { label: 'ประสบการณ์ทำงาน', value: MENTOR.experience },
                ].map((f, i) => (
                  <div key={i} className="info-field">
                    <span className="field-label">{f.label}</span>
                    <div className="field-value">{f.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-div"></div>

          {/* แนะนำพี่เลี้ยง */}
          <div className="mentor-bio-section">
            <p className="field-label" style={{ marginBottom: '10px' }}>แนะนำพนักงานพี่เลี้ยง</p>
            <div className="mentor-bio-box">
              <p className="mentor-bio-text ph">
                {/* ← แก้ข้อความแนะนำพี่เลี้ยงตรงนี้ */}
                [กรอกข้อมูลแนะนำพนักงานพี่เลี้ยง เช่น ประวัติการทำงาน ความเชี่ยวชาญ บทบาทในการดูแลนักศึกษา]
              </p>
            </div>
          </div>

          <div className="section-div"></div>

          <p className="field-label" style={{ marginBottom: '10px' }}>บทบาทและหน้าที่ในการดูแลนักศึกษา</p>
          <ul className="activity-list">
            {[
              /* ← แก้บทบาทพี่เลี้ยงตรงนี้ */
              '[บทบาทที่ 1 เช่น มอบหมายงานและให้คำแนะนำด้านวิชาการ]',
              '[บทบาทที่ 2 เช่น ตรวจสอบและประเมินผลงานรายสัปดาห์]',
              '[บทบาทที่ 3 เช่น ให้คำปรึกษาด้านการปรับตัวในสภาพแวดล้อมการทำงาน]',
            ].map((text, i) => (
              <li key={i} className="activity-item">
                <div className="activity-bullet">{i + 1}</div>
                <div className="activity-text" style={{ color: 'var(--gray-400)', fontStyle: 'italic' }}>{text}</div>
              </li>
            ))}
          </ul>

          <div className="section-div"></div>

          <p className="field-label" style={{ marginBottom: '10px' }}>ความประทับใจและสิ่งที่ได้เรียนรู้จากพี่เลี้ยง</p>
          <div className="mentor-bio-box">
            <p className="mentor-bio-text ph">
              {/* ← แก้ความประทับใจตรงนี้ */}
              [กรอกความประทับใจ สิ่งที่เรียนรู้ และคำแนะนำที่มีประโยชน์ที่ได้รับจากพนักงานพี่เลี้ยง]
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
