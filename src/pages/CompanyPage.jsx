import { SingleImageUpload, GalleryUpload } from '../components/ImageUpload'

export default function CompanyPage() {
  return (
    <div className="page-body">
      {/* Company Hero */}
      <div className="company-hero animate-scale-in">
        <div className="company-logo-box">SIRI<br/>SOFT</div>
        <div>
          <h2>บริษัท ศิริซอฟต์ จำกัด</h2>
          <p>บริษัทพัฒนาซอฟต์แวร์และให้บริการด้านเทคโนโลยีสารสนเทศ ที่มีความเชี่ยวชาญด้านการพัฒนาระบบสำหรับองค์กร</p>
          <a href="https://sirisoft.co.th/" target="_blank" rel="noreferrer" className="company-url">
            🔗 sirisoft.co.th
          </a>
        </div>
      </div>

      {/* รูปภาพบริษัท */}
      <div className="card animate-fade-up delay-100">
        <div className="card-header">
          <div className="card-header-icon">🏢</div>
          <div>
            <div className="card-header-title">รูปภาพบริษัท / สำนักงาน</div>
            <div className="card-header-sub">ลากรูปมาวางหรือคลิกเพื่อเลือกไฟล์</div>
          </div>
        </div>
        <div className="card-body">
          <SingleImageUpload label="รูปหลักของบริษัท" />
          <div style={{ marginTop: '18px' }}>
            <p className="field-label" style={{ marginBottom: '8px' }}>รูปภาพเพิ่มเติม</p>
            <GalleryUpload label="เพิ่มรูปบริษัท" />
          </div>
        </div>
      </div>

      {/* ข้อมูลทั่วไป */}
      <div className="card animate-fade-up delay-200">
        <div className="card-header">
          <div className="card-header-icon">ℹ️</div>
          <div><div className="card-header-title">ข้อมูลทั่วไปของบริษัท</div></div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            {[
              { label: 'ชื่อบริษัท (ไทย)', ph: 'บริษัท ศิริซอฟต์ จำกัด', cls: '' },
              { label: 'ชื่อบริษัท (อังกฤษ)', ph: 'Sirisoft Co., Ltd.', cls: '' },
              { label: 'ประเภทธุรกิจ', ph: '[กรอกประเภทธุรกิจ]', cls: '' },
              { label: 'จำนวนพนักงาน', ph: '[กรอกจำนวนพนักงาน]', cls: '' },
              { label: 'ที่อยู่', ph: '[กรอกที่อยู่บริษัท]', full: true },
              { label: 'เบอร์โทรศัพท์', ph: '[กรอกเบอร์โทร]', cls: '' },
              { label: 'เว็บไซต์', ph: 'sirisoft.co.th', cls: '' },
              { label: 'แผนก / ทีมที่ฝึกงาน', ph: '[กรอกชื่อแผนก/ทีม]', full: true },
            ].map((f, i) => (
              <div key={i} className={`info-field${f.full ? ' full' : ''}`}>
                <span className="field-label">{f.label}</span>
                <div className="field-value ph">{f.ph}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ประวัติบริษัท */}
      <div className="card animate-fade-up delay-200">
        <div className="card-header">
          <div className="card-header-icon">📖</div>
          <div><div className="card-header-title">ประวัติและความเป็นมา</div></div>
        </div>
        <div className="card-body">
          <div className="activity-ph">[กรอกประวัติบริษัท วิสัยทัศน์ พันธกิจ และผลิตภัณฑ์/บริการหลัก]</div>
        </div>
      </div>

      {/* โครงสร้างองค์กร */}
      <div className="card animate-fade-up delay-300">
        <div className="card-header">
          <div className="card-header-icon">🗂️</div>
          <div>
            <div className="card-header-title">โครงสร้างองค์กร</div>
            <div className="card-header-sub">แผนผังโครงสร้างหรือทีมงาน</div>
          </div>
        </div>
        <div className="card-body">
          <SingleImageUpload label="อัปโหลดแผนผังโครงสร้างองค์กร" />
        </div>
      </div>

      {/* ผลิตภัณฑ์ */}
      <div className="card animate-fade-up delay-300">
        <div className="card-header">
          <div className="card-header-icon">💡</div>
          <div><div className="card-header-title">ผลิตภัณฑ์และบริการของบริษัท</div></div>
        </div>
        <div className="card-body">
          <ul className="activity-list">
            {['[ผลิตภัณฑ์/บริการที่ 1]','[ผลิตภัณฑ์/บริการที่ 2]','[ผลิตภัณฑ์/บริการที่ 3]'].map((text, i) => (
              <li key={i} className="activity-item">
                <div className="activity-bullet">{i + 1}</div>
                <div className="activity-text" style={{ color: 'var(--gray-400)', fontStyle: 'italic' }}>{text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
