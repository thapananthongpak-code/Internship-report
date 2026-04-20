import { SingleImageUpload, GalleryUpload } from '../components/ImageUpload'

export default function SummaryPage() {
  return (
    <div className="page-body">
      {/* Hero */}
      <div className="cover-hero">
        <span className="cover-tag">📊 สรุปผลการฝึกงาน</span>
        <h1 className="cover-title">สรุปผลการฝึกประสบการณ์วิชาชีพ</h1>
        <p className="cover-subtitle">บริษัท ศิริซอฟต์ จำกัด — ระยะเวลา 7 สัปดาห์</p>
        <div className="cover-divider"></div>
      </div>

      {/* Stats */}
      <div className="summary-stats">
        <div className="stat-card">
          <div className="stat-num">7</div>
          <div className="stat-label">สัปดาห์</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">35</div>
          <div className="stat-label">วันทำงาน</div>
        </div>
        <div className="stat-card orange">
          <div className="stat-num">–</div>
          <div className="stat-label">โปรเจกต์ที่ทำ</div>
        </div>
        <div className="stat-card orange">
          <div className="stat-num">–</div>
          <div className="stat-label">ทักษะที่พัฒนา</div>
        </div>
      </div>

      {/* รูปภาพสรุป */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">🖼️</div>
          <div>
            <div className="card-header-title">รูปภาพสรุป / รูปหมู่</div>
            <div className="card-header-sub">อัปโหลดรูปถ่ายร่วมกับทีมหรือบรรยากาศวันสุดท้าย</div>
          </div>
        </div>
        <div className="card-body">
          <SingleImageUpload label="อัปโหลดรูปภาพสรุปการฝึกงาน" />
          <GalleryUpload label="เพิ่มรูปภาพ" />
        </div>
      </div>

      {/* สรุปกิจกรรมตลอดการฝึกงาน */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">📋</div>
          <div>
            <div className="card-header-title">สรุปกิจกรรมตลอดการฝึกงาน</div>
          </div>
        </div>
        <div className="card-body">
          <div className="activity-ph">
            [กรอกสรุปภาพรวมของกิจกรรมและงานที่ทำตลอดระยะเวลาการฝึกงาน 7 สัปดาห์]
          </div>
        </div>
      </div>

      {/* ทักษะที่ได้รับ */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">💡</div>
          <div>
            <div className="card-header-title">ทักษะและความรู้ที่ได้รับ</div>
          </div>
        </div>
        <div className="card-body">
          <p className="field-label" style={{ marginBottom: '12px' }}>ทักษะด้านเทคนิค (Technical Skills)</p>
          <div className="skill-tags" style={{ marginBottom: '20px' }}>
            {['[ทักษะที่ 1]','[ทักษะที่ 2]','[ทักษะที่ 3]','[ทักษะที่ 4]'].map((s,i) => (
              <span key={i} className="skill-tag blue">{s}</span>
            ))}
          </div>

          <p className="field-label" style={{ marginBottom: '12px' }}>ทักษะด้านการทำงาน (Soft Skills)</p>
          <div className="skill-tags">
            {['[ทักษะที่ 1]','[ทักษะที่ 2]','[ทักษะที่ 3]'].map((s,i) => (
              <span key={i} className="skill-tag soft">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ปัญหาและบทเรียน */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">🔧</div>
          <div>
            <div className="card-header-title">ปัญหาที่พบและบทเรียนที่ได้รับ</div>
          </div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            <div className="info-field full">
              <span className="field-label">ปัญหาและอุปสรรคหลัก</span>
              <div className="field-value ph">[กรอกปัญหาหลักที่พบตลอดการฝึกงาน]</div>
            </div>
            <div className="info-field full">
              <span className="field-label">วิธีการแก้ไขและบทเรียน</span>
              <div className="field-value ph">[กรอกวิธีแก้ไขและสิ่งที่เรียนรู้จากปัญหาเหล่านั้น]</div>
            </div>
          </div>
        </div>
      </div>

      {/* ความประทับใจ */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">❤️</div>
          <div>
            <div className="card-header-title">ความประทับใจและข้อเสนอแนะ</div>
          </div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            <div className="info-field full">
              <span className="field-label">ความประทับใจในการฝึกงาน</span>
              <div className="field-value ph">[กรอกความรู้สึกและความประทับใจโดยรวม]</div>
            </div>
            <div className="info-field full">
              <span className="field-label">ข้อเสนอแนะต่อองค์กร</span>
              <div className="field-value ph">[กรอกข้อเสนอแนะที่เป็นประโยชน์ต่อบริษัท]</div>
            </div>
            <div className="info-field full">
              <span className="field-label">ข้อเสนอแนะต่อสถาบันการศึกษา</span>
              <div className="field-value ph">[กรอกข้อเสนอแนะต่อมหาวิทยาลัย/คณะ]</div>
            </div>
          </div>
        </div>
      </div>

      {/* บทสรุป */}
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">🎓</div>
          <div>
            <div className="card-header-title">บทสรุป</div>
          </div>
        </div>
        <div className="card-body">
          <div className="activity-ph">
            [กรอกบทสรุปโดยรวมของประสบการณ์การฝึกงาน ทั้งในด้านวิชาชีพและการพัฒนาตนเอง
            รวมถึงสิ่งที่จะนำไปใช้ในการทำงานจริงในอนาคต]
          </div>
        </div>
      </div>

      {/* ขอบคุณ */}
      <div style={{ background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-light))', borderRadius: 'var(--radius)', padding: '32px', textAlign: 'center', color: 'white', marginBottom: '24px' }}>
        <div style={{ fontSize: '36px', marginBottom: '12px' }}>🙏</div>
        <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>ขอบคุณ Sirisoft Co., Ltd.</h2>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', maxWidth: '480px', margin: '0 auto' }}>
          ขอขอบพระคุณทีมงานทุกท่านที่ให้โอกาสและช่วยเหลือตลอดระยะเวลาการฝึกงาน
          ประสบการณ์ที่ได้รับจะเป็นพื้นฐานสำคัญในการประกอบวิชาชีพในอนาคต
        </p>
      </div>
    </div>
  )
}
