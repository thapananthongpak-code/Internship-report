import { SingleImageUpload, GalleryUpload } from '../components/ImageUpload'

export default function SummaryPage() {
  return (
    <div className="page-body">
      {/* Hero */}
      <div className="cover-hero animate-scale-in">
        <div className="cover-deco"></div>
        <span className="cover-tag">📊 สรุปผลการฝึกงาน</span>
        <h1 className="cover-title">สรุปผลการฝึกประสบการณ์<br/>วิชาชีพ</h1>
        <p className="cover-subtitle">บริษัท ศิริซอฟต์ จำกัด — ระยะเวลา 7 สัปดาห์</p>
        <div className="cover-divider"></div>
      </div>

      {/* Stats */}
      <div className="summary-stats animate-fade-up delay-100">
        {[
          { num: '7', label: 'สัปดาห์', cls: '' },
          { num: '35', label: 'วันทำงาน', cls: '' },
          { num: '–', label: 'โปรเจกต์', cls: 'orange' },
          { num: '–', label: 'ทักษะใหม่', cls: 'green' },
        ].map((s, i) => (
          <div key={i} className={`stat-card${s.cls ? ` ${s.cls}` : ''}`}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* รูปภาพสรุป */}
      <div className="card animate-fade-up delay-200">
        <div className="card-header">
          <div className="card-header-icon">🖼️</div>
          <div>
            <div className="card-header-title">รูปภาพสรุป / รูปหมู่</div>
            <div className="card-header-sub">รูปถ่ายร่วมกับทีมหรือบรรยากาศวันสุดท้าย</div>
          </div>
        </div>
        <div className="card-body">
          <SingleImageUpload label="อัปโหลดรูปภาพสรุปการฝึกงาน" />
          <div style={{ marginTop: '18px' }}>
            <p className="field-label" style={{ marginBottom: '8px' }}>รูปภาพเพิ่มเติม</p>
            <GalleryUpload label="เพิ่มรูปภาพ" />
          </div>
        </div>
      </div>

      {/* สรุปกิจกรรม */}
      <div className="card animate-fade-up delay-200">
        <div className="card-header">
          <div className="card-header-icon">📋</div>
          <div>
            <div className="card-header-title">สรุปกิจกรรมตลอดการฝึกงาน</div>
          </div>
        </div>
        <div className="card-body">
          <div className="activity-ph">[กรอกสรุปภาพรวมของกิจกรรมและงานที่ทำตลอด 7 สัปดาห์]</div>
        </div>
      </div>

      {/* ทักษะที่ได้รับ */}
      <div className="card animate-fade-up delay-300">
        <div className="card-header">
          <div className="card-header-icon">💡</div>
          <div>
            <div className="card-header-title">ทักษะและความรู้ที่ได้รับ</div>
          </div>
        </div>
        <div className="card-body">
          <p className="field-label" style={{ marginBottom: '10px' }}>ทักษะด้านเทคนิค (Technical Skills)</p>
          <div className="skill-tags" style={{ marginBottom: '20px' }}>
            {['[ทักษะ 1]','[ทักษะ 2]','[ทักษะ 3]','[ทักษะ 4]'].map((s,i) => (
              <span key={i} className="skill-tag blue">{s}</span>
            ))}
          </div>
          <p className="field-label" style={{ marginBottom: '10px' }}>ทักษะการทำงาน (Soft Skills)</p>
          <div className="skill-tags">
            {['[ทักษะ 1]','[ทักษะ 2]','[ทักษะ 3]'].map((s,i) => (
              <span key={i} className="skill-tag soft">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ปัญหาและบทเรียน */}
      <div className="card animate-fade-up delay-300">
        <div className="card-header">
          <div className="card-header-icon">🔧</div>
          <div><div className="card-header-title">ปัญหาที่พบและบทเรียน</div></div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            {[
              { label: 'ปัญหาและอุปสรรคหลัก', ph: '[กรอกปัญหาหลักที่พบตลอดการฝึกงาน]' },
              { label: 'วิธีการแก้ไขและบทเรียน', ph: '[กรอกวิธีแก้ไขและสิ่งที่เรียนรู้]' },
            ].map((f, i) => (
              <div key={i} className="info-field full">
                <span className="field-label">{f.label}</span>
                <div className="field-value ph">{f.ph}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ความประทับใจ */}
      <div className="card animate-fade-up delay-400">
        <div className="card-header">
          <div className="card-header-icon">❤️</div>
          <div><div className="card-header-title">ความประทับใจและข้อเสนอแนะ</div></div>
        </div>
        <div className="card-body">
          <div className="info-grid">
            {[
              { label: 'ความประทับใจในการฝึกงาน', ph: '[กรอกความรู้สึกและความประทับใจโดยรวม]' },
              { label: 'ข้อเสนอแนะต่อองค์กร', ph: '[กรอกข้อเสนอแนะที่เป็นประโยชน์ต่อบริษัท]' },
              { label: 'ข้อเสนอแนะต่อสถาบันการศึกษา', ph: '[กรอกข้อเสนอแนะต่อมหาวิทยาลัย]' },
            ].map((f, i) => (
              <div key={i} className="info-field full">
                <span className="field-label">{f.label}</span>
                <div className="field-value ph">{f.ph}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* บทสรุป */}
      <div className="card animate-fade-up delay-400">
        <div className="card-header">
          <div className="card-header-icon">🎓</div>
          <div><div className="card-header-title">บทสรุป</div></div>
        </div>
        <div className="card-body">
          <div className="activity-ph">[กรอกบทสรุปประสบการณ์การฝึกงานโดยรวม สิ่งที่จะนำไปใช้ในการทำงานจริง]</div>
        </div>
      </div>

      {/* Thank you */}
      <div className="thankyou-banner animate-fade-up delay-500">
        <span className="thankyou-icon">🙏</span>
        <div className="thankyou-title">ขอบคุณ Sirisoft Co., Ltd.</div>
        <p className="thankyou-desc">
          ขอขอบพระคุณทีมงานทุกท่านที่ให้โอกาสและช่วยเหลือตลอดระยะเวลาการฝึกงาน<br/>
          ประสบการณ์ที่ได้รับจะเป็นพื้นฐานสำคัญในการประกอบวิชาชีพในอนาคต
        </p>
      </div>
    </div>
  )
}
