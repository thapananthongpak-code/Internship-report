import { SingleImageUpload, GalleryUpload } from '../components/ImageUpload'

export default function CompanyPage() {
  return (
    <div className="page-body">
      {/* Company Hero */}
      <div className="company-hero">
        <div className="company-logo-box">SIRI<br/>SOFT</div>
        <div>
          <h2>บริษัท ศิริซอฟต์ จำกัด</h2>
          <p>
            Sirisoft Co., Ltd. — บริษัทพัฒนาซอฟต์แวร์และให้บริการด้านเทคโนโลยีสารสนเทศ
            ที่มีความเชี่ยวชาญด้านการพัฒนาระบบสำหรับองค์กร
          </p>
          <a href="https://sirisoft.co.th/" target="_blank" rel="noreferrer" className="company-url">
            🔗 sirisoft.co.th
          </a>
        </div>
      </div>

      {/* รูปภาพบริษัท */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">🏢</div>
          <div>
            <div className="card-header-title">รูปภาพบริษัท / สำนักงาน</div>
            <div className="card-header-sub">อัปโหลดรูปถ่ายภายในและภายนอกบริษัท</div>
          </div>
        </div>
        <div className="card-body">
          <SingleImageUpload label="อัปโหลดรูปภาพหลักของบริษัท" />
          <GalleryUpload label="เพิ่มรูปบริษัท" />
        </div>
      </div>

      {/* ข้อมูลทั่วไป */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">ℹ️</div>
          <div>
            <div className="card-header-title">ข้อมูลทั่วไปของบริษัท</div>
          </div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            <div className="info-field">
              <span className="field-label">ชื่อบริษัท (ไทย)</span>
              <div className="field-value">บริษัท ศิริซอฟต์ จำกัด</div>
            </div>
            <div className="info-field">
              <span className="field-label">ชื่อบริษัท (อังกฤษ)</span>
              <div className="field-value">Sirisoft Co., Ltd.</div>
            </div>
            <div className="info-field">
              <span className="field-label">ประเภทธุรกิจ</span>
              <div className="field-value ph">[กรอกประเภทธุรกิจ]</div>
            </div>
            <div className="info-field">
              <span className="field-label">จำนวนพนักงาน</span>
              <div className="field-value ph">[กรอกจำนวนพนักงาน]</div>
            </div>
            <div className="info-field full">
              <span className="field-label">ที่อยู่</span>
              <div className="field-value ph">[กรอกที่อยู่บริษัท]</div>
            </div>
            <div className="info-field">
              <span className="field-label">เบอร์โทรศัพท์</span>
              <div className="field-value ph">[กรอกเบอร์โทร]</div>
            </div>
            <div className="info-field">
              <span className="field-label">เว็บไซต์</span>
              <div className="field-value">sirisoft.co.th</div>
            </div>
            <div className="info-field full">
              <span className="field-label">แผนก / ทีมที่ฝึกงาน</span>
              <div className="field-value ph">[กรอกชื่อแผนก/ทีม]</div>
            </div>
          </div>
        </div>
      </div>

      {/* ประวัติบริษัท */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">📖</div>
          <div>
            <div className="card-header-title">ประวัติและความเป็นมาของบริษัท</div>
          </div>
        </div>
        <div className="card-body">
          <div className="activity-ph">
            [กรอกประวัติและความเป็นมาของบริษัท Sirisoft — วิสัยทัศน์ พันธกิจ และผลิตภัณฑ์/บริการหลัก]
          </div>
        </div>
      </div>

      {/* โครงสร้างองค์กร */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">🗂️</div>
          <div>
            <div className="card-header-title">โครงสร้างองค์กร</div>
            <div className="card-header-sub">อัปโหลดแผนผังองค์กรหรือโครงสร้างทีม</div>
          </div>
        </div>
        <div className="card-body">
          <SingleImageUpload label="อัปโหลดแผนผังโครงสร้างองค์กร" />
        </div>
      </div>

      {/* ผลิตภัณฑ์และบริการ */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">💡</div>
          <div>
            <div className="card-header-title">ผลิตภัณฑ์และบริการของบริษัท</div>
          </div>
        </div>
        <div className="card-body">
          <ul className="activity-list">
            {[
              '[กรอกชื่อผลิตภัณฑ์/บริการที่ 1]',
              '[กรอกชื่อผลิตภัณฑ์/บริการที่ 2]',
              '[กรอกชื่อผลิตภัณฑ์/บริการที่ 3]',
            ].map((text, i) => (
              <li key={i} className="activity-item">
                <div className="activity-bullet">{i + 1}</div>
                <div className="activity-text ph" style={{ color: 'var(--gray-400)', fontStyle: 'italic' }}>{text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
