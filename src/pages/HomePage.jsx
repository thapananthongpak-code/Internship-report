import { SingleImageUpload } from '../components/ImageUpload'

export default function HomePage() {
  return (
    <div className="page-body">
      {/* Hero */}
      <div className="cover-hero animate-scale-in">
        <div className="cover-deco"></div>
        <span className="cover-tag">📝 รายงานผลการฝึกงาน</span>
        <h1 className="cover-title">รายงานการฝึกประสบการณ์<br/>วิชาชีพ</h1>
        <p className="cover-subtitle">บริษัท ศิริซอฟต์ จำกัด (Sirisoft Co., Ltd.)</p>
        <div className="cover-divider"></div>
        <div className="cover-info-grid">
          {[
            { label: 'นักศึกษา', value: '[ชื่อ-นามสกุล]' },
            { label: 'รหัสนักศึกษา', value: '[xxxxxxxx]' },
            { label: 'สาขาวิชา', value: '[สาขาวิชา]' },
            { label: 'คณะ', value: '[ชื่อคณะ]' },
            { label: 'ระยะเวลาฝึกงาน', value: '7 สัปดาห์' },
            { label: 'ช่วงเวลา', value: '[วันที่เริ่ม – วันสิ้นสุด]' },
          ].map((item, i) => (
            <div key={i} className="cover-info-item">
              <div className="cover-info-label">{item.label}</div>
              <div className="cover-info-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* รูปหน้าปก */}
      <div className="card animate-fade-up delay-100">
        <div className="card-header">
          <div className="card-header-icon">🖼️</div>
          <div>
            <div className="card-header-title">รูปภาพหน้าปก</div>
            <div className="card-header-sub">อัปโหลดรูปถ่ายหรือบรรยากาศการฝึกงาน</div>
          </div>
        </div>
        <div className="card-body">
          <SingleImageUpload label="คลิกหรือลากรูปหน้าปกมาวาง" />
        </div>
      </div>

      {/* ข้อมูลนักศึกษา */}
      <div className="card animate-fade-up delay-200">
        <div className="card-header">
          <div className="card-header-icon">👤</div>
          <div>
            <div className="card-header-title">ข้อมูลนักศึกษา</div>
            <div className="card-header-sub">ข้อมูลผู้จัดทำรายงาน</div>
          </div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            {[
              { label: 'ชื่อ-นามสกุล', ph: '[กรอกชื่อ-นามสกุล]' },
              { label: 'รหัสนักศึกษา', ph: '[กรอกรหัสนักศึกษา]' },
              { label: 'สาขาวิชา', ph: '[กรอกสาขาวิชา]' },
              { label: 'คณะ', ph: '[กรอกชื่อคณะ]' },
              { label: 'มหาวิทยาลัย', ph: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ', full: false },
              { label: 'อาจารย์ที่ปรึกษา', ph: '[กรอกชื่ออาจารย์]' },
              { label: 'ช่วงระยะเวลาฝึกงาน', ph: '[วัน/เดือน/ปี] – [วัน/เดือน/ปี] (7 สัปดาห์)', full: true },
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
          <div className="card-header-icon">🧑‍💼</div>
          <div>
            <div className="card-header-title">ข้อมูลพนักงานพี่เลี้ยง</div>
            <div className="card-header-sub">ผู้ดูแลนักศึกษาฝึกงาน</div>
          </div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            {[
              { label: 'ชื่อ-นามสกุล', ph: '[ชื่อพนักงานพี่เลี้ยง]' },
              { label: 'ตำแหน่ง', ph: '[ตำแหน่งงาน]' },
              { label: 'แผนก / ทีม', ph: '[แผนก/ทีม]' },
              { label: 'อีเมล', ph: '[อีเมลติดต่อ]' },
            ].map((f, i) => (
              <div key={i} className="info-field">
                <span className="field-label">{f.label}</span>
                <div className="field-value ph">{f.ph}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
