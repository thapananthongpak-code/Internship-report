import { SingleImageUpload } from '../components/ImageUpload'

export default function HomePage() {
  return (
    <div className="page-body">
      {/* Hero */}
      <div className="cover-hero">
        <span className="cover-tag">📝 รายงานผลการฝึกงาน</span>
        <h1 className="cover-title">รายงานการฝึกประสบการณ์วิชาชีพ</h1>
        <p className="cover-subtitle">บริษัท ศิริซอฟต์ จำกัด (Sirisoft Co., Ltd.)</p>
        <div className="cover-divider"></div>
        <div className="cover-info-grid">
          <div className="cover-info-item">
            <div className="cover-info-label">นักศึกษา</div>
            <div className="cover-info-value">[ชื่อ-นามสกุล]</div>
          </div>
          <div className="cover-info-item">
            <div className="cover-info-label">รหัสนักศึกษา</div>
            <div className="cover-info-value">[xxxxxxxx]</div>
          </div>
          <div className="cover-info-item">
            <div className="cover-info-label">สาขาวิชา</div>
            <div className="cover-info-value">[สาขาวิชา]</div>
          </div>
          <div className="cover-info-item">
            <div className="cover-info-label">คณะ</div>
            <div className="cover-info-value">[ชื่อคณะ]</div>
          </div>
          <div className="cover-info-item">
            <div className="cover-info-label">ระยะเวลาฝึกงาน</div>
            <div className="cover-info-value">7 สัปดาห์</div>
          </div>
          <div className="cover-info-item">
            <div className="cover-info-label">ช่วงเวลา</div>
            <div className="cover-info-value">[วันที่เริ่ม – วันที่สิ้นสุด]</div>
          </div>
        </div>
      </div>

      {/* รูปหน้าปก */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">🖼️</div>
          <div>
            <div className="card-header-title">รูปภาพหน้าปก</div>
            <div className="card-header-sub">อัปโหลดรูปถ่ายหรือรูปบรรยากาศการฝึกงาน</div>
          </div>
        </div>
        <div className="card-body">
          <SingleImageUpload label="คลิกเพื่ออัปโหลดรูปภาพหน้าปก" />
        </div>
      </div>

      {/* ข้อมูลนักศึกษา */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">👤</div>
          <div>
            <div className="card-header-title">ข้อมูลนักศึกษา</div>
            <div className="card-header-sub">ข้อมูลผู้จัดทำรายงาน</div>
          </div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            <div className="info-field">
              <span className="field-label">ชื่อ-นามสกุล</span>
              <div className="field-value ph">[กรอกชื่อ-นามสกุล]</div>
            </div>
            <div className="info-field">
              <span className="field-label">รหัสนักศึกษา</span>
              <div className="field-value ph">[กรอกรหัสนักศึกษา]</div>
            </div>
            <div className="info-field">
              <span className="field-label">สาขาวิชา</span>
              <div className="field-value ph">[กรอกสาขาวิชา]</div>
            </div>
            <div className="info-field">
              <span className="field-label">คณะ</span>
              <div className="field-value ph">[กรอกชื่อคณะ]</div>
            </div>
            <div className="info-field">
              <span className="field-label">มหาวิทยาลัย</span>
              <div className="field-value ph">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</div>
            </div>
            <div className="info-field">
              <span className="field-label">อาจารย์ที่ปรึกษา</span>
              <div className="field-value ph">[กรอกชื่ออาจารย์]</div>
            </div>
            <div className="info-field full">
              <span className="field-label">ช่วงระยะเวลาฝึกงาน</span>
              <div className="field-value ph">[วัน/เดือน/ปี] – [วัน/เดือน/ปี] (7 สัปดาห์)</div>
            </div>
          </div>

          <div className="section-div"></div>

          {/* รูปนักศึกษา */}
          <p className="field-label" style={{ marginBottom: '12px' }}>รูปถ่ายนักศึกษา</p>
          <div style={{ maxWidth: '280px' }}>
            <SingleImageUpload label="อัปโหลดรูปถ่าย" />
          </div>
        </div>
      </div>

      {/* พนักงานพี่เลี้ยง */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">🧑‍💼</div>
          <div>
            <div className="card-header-title">ข้อมูลพนักงานพี่เลี้ยง</div>
            <div className="card-header-sub">ผู้ดูแลนักศึกษาฝึกงาน</div>
          </div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            <div className="info-field">
              <span className="field-label">ชื่อ-นามสกุล</span>
              <div className="field-value ph">[ชื่อพนักงานพี่เลี้ยง]</div>
            </div>
            <div className="info-field">
              <span className="field-label">ตำแหน่ง</span>
              <div className="field-value ph">[ตำแหน่งงาน]</div>
            </div>
            <div className="info-field">
              <span className="field-label">แผนก / ทีม</span>
              <div className="field-value ph">[แผนก/ทีม]</div>
            </div>
            <div className="info-field">
              <span className="field-label">อีเมล</span>
              <div className="field-value ph">[อีเมลติดต่อ]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
