import { SingleImageUpload } from '../components/ImageUpload'

export default function HomePage() {
  return (
    <div className="page-body">
      <div className="cover-hero animate-scale-in">
        <div className="cover-deco"></div>
        <span className="cover-tag">รายงานผลการฝึกงาน</span>
        <h1 className="cover-title">รายงานการฝึกประสบการณ์<br/>วิชาชีพ</h1>
        <p className="cover-subtitle">บริษัท ศิริซอฟต์ จำกัด (Sirisoft Co., Ltd.)</p>
        <div className="cover-divider"></div>
        <div className="cover-info-grid">
          {[
            { label: 'นักศึกษา',        value: '[ชื่อ-นามสกุล]' },
            { label: 'รหัสนักศึกษา',    value: '[xxxxxxxx]' },
            { label: 'สาขาวิชา',        value: '[สาขาวิชา]' },
            { label: 'คณะ',             value: '[ชื่อคณะ]' },
            { label: 'ระยะเวลาฝึกงาน', value: '7 สัปดาห์' },
            { label: 'ช่วงเวลา',        value: '[วันที่เริ่ม – วันสิ้นสุด]' },
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
              { label: 'ชื่อ-นามสกุล',          ph: '[กรอกชื่อ-นามสกุล]' },
              { label: 'รหัสนักศึกษา',            ph: '[กรอกรหัสนักศึกษา]' },
              { label: 'สาขาวิชา',               ph: '[กรอกสาขาวิชา]' },
              { label: 'คณะ',                    ph: '[กรอกชื่อคณะ]' },
              { label: 'มหาวิทยาลัย',             ph: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ' },
              { label: 'อาจารย์ที่ปรึกษา',        ph: '[กรอกชื่ออาจารย์]' },
              { label: 'ช่วงระยะเวลาฝึกงาน',     ph: '[วัน/เดือน/ปี] – [วัน/เดือน/ปี] (7 สัปดาห์)', full: true },
            ].map((f, i) => (
              <div key={i} className={`info-field${f.full ? ' full' : ''}`}>
                <span className="field-label">{f.label}</span>
                <div className="field-value ph">{f.ph}</div>
              </div>
            ))}
          </div>

          <div className="section-div"></div>
          <p className="field-label" style={{ marginBottom: '10px' }}>รูปถ่ายนักศึกษา</p>
          <div style={{ maxWidth: '260px' }}>
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

          {/* โปรไฟล์พี่เลี้ยง */}
          <div className="mentor-profile">
            <div className="mentor-avatar-wrap">
              <SingleImageUpload label="รูปถ่ายพี่เลี้ยง" />
            </div>
            <div className="mentor-detail">
              <div className="info-grid">
                {[
                  { label: 'ชื่อ-นามสกุล',   ph: '[ชื่อพนักงานพี่เลี้ยง]' },
                  { label: 'ตำแหน่ง',         ph: '[ตำแหน่งงาน]' },
                  { label: 'แผนก / ทีม',      ph: '[แผนก/ทีม]' },
                  { label: 'อีเมล',            ph: '[อีเมลติดต่อ]' },
                  { label: 'เบอร์โทรศัพท์',   ph: '[เบอร์ติดต่อ]' },
                  { label: 'ประสบการณ์ทำงาน', ph: '[จำนวนปีที่ทำงาน]' },
                ].map((f, i) => (
                  <div key={i} className="info-field">
                    <span className="field-label">{f.label}</span>
                    <div className="field-value ph">{f.ph}</div>
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
                [กรอกข้อมูลแนะนำพนักงานพี่เลี้ยง เช่น ประวัติการทำงาน ความเชี่ยวชาญ บทบาทในการดูแลนักศึกษา รวมถึงสิ่งที่ได้เรียนรู้จากพี่เลี้ยงท่านนี้]
              </p>
            </div>
          </div>

          <div className="section-div"></div>

          {/* บทบาทและหน้าที่ */}
          <p className="field-label" style={{ marginBottom: '10px' }}>บทบาทและหน้าที่ในการดูแลนักศึกษา</p>
          <ul className="activity-list">
            {[
              '[กรอกบทบาทที่ 1 เช่น มอบหมายงานและให้คำแนะนำด้านวิชาการ]',
              '[กรอกบทบาทที่ 2 เช่น ตรวจสอบและประเมินผลงานรายสัปดาห์]',
              '[กรอกบทบาทที่ 3 เช่น ให้คำปรึกษาด้านการปรับตัวในสภาพแวดล้อมการทำงาน]',
            ].map((text, i) => (
              <li key={i} className="activity-item">
                <div className="activity-bullet">{i + 1}</div>
                <div className="activity-text" style={{ color: 'var(--gray-400)', fontStyle: 'italic' }}>{text}</div>
              </li>
            ))}
          </ul>

          <div className="section-div"></div>

          {/* ความประทับใจต่อพี่เลี้ยง */}
          <p className="field-label" style={{ marginBottom: '10px' }}>ความประทับใจและสิ่งที่ได้เรียนรู้จากพี่เลี้ยง</p>
          <div className="mentor-bio-box">
            <p className="mentor-bio-text ph">
              [กรอกความประทับใจ สิ่งที่เรียนรู้ และคำแนะนำที่มีประโยชน์ที่ได้รับจากพนักงานพี่เลี้ยง]
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
