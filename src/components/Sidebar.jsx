const navItems = [
  { id: 'home',    icon: '🏠', label: 'หน้าปก' },
  { id: 'company', icon: '🏢', label: 'ข้อมูลบริษัท' },
]

const weeks = Array.from({ length: 7 }, (_, i) => ({
  id: `week${i + 1}`,
  label: `สัปดาห์ที่ ${i + 1}`,
  num: i + 1,
}))

export default function Sidebar({ current, onNavigate, isOpen, onClose }) {
  return (
    <aside className={`sidebar${isOpen ? ' open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">SS</div>
          <div>
            <div className="sidebar-logo-text">รายงานฝึกงาน</div>
            <div className="sidebar-logo-sub">Sirisoft Co., Ltd.</div>
          </div>
        </div>
        <div className="sidebar-student">
          <p><strong>นักศึกษา:</strong> [ชื่อ-นามสกุล]</p>
          <p><strong>รหัส:</strong> [รหัสนักศึกษา]</p>
          <p><strong>สาขา:</strong> [สาขาวิชา]</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">เมนูหลัก</div>
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-link${current === item.id ? ' active' : ''}`}
            onClick={() => { onNavigate(item.id); onClose(); }}
          >
            <span className="nav-link-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}

        <div className="nav-section-label">บันทึกรายสัปดาห์</div>
        {weeks.map(w => (
          <button
            key={w.id}
            className={`nav-link${current === w.id ? ' active' : ''}`}
            onClick={() => { onNavigate(w.id); onClose(); }}
          >
            <span className="nav-link-icon">📋</span>
            {w.label}
            <span className="nav-badge">{w.num}</span>
          </button>
        ))}

        <div className="nav-section-label">สรุป</div>
        <button
          className={`nav-link${current === 'summary' ? ' active' : ''}`}
          onClick={() => { onNavigate('summary'); onClose(); }}
        >
          <span className="nav-link-icon">📊</span>
          สรุปผลการฝึกงาน
        </button>
      </nav>

      <div className="sidebar-footer">
        ระยะเวลาฝึกงาน 7 สัปดาห์<br />
        <a href="https://sirisoft.co.th/" target="_blank" rel="noreferrer">sirisoft.co.th</a>
      </div>
    </aside>
  )
}
