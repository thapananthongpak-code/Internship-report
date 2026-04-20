import { useState } from 'react'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import WeekPage from './pages/WeekPage'
import SummaryPage from './pages/SummaryPage'

const PAGE_META = {
  home:    { title: 'หน้าปก', subtitle: 'รายงานการฝึกประสบการณ์วิชาชีพ' },
  company: { title: 'ข้อมูลบริษัท', subtitle: 'บริษัท ศิริซอฟต์ จำกัด' },
  week1:   { title: 'สัปดาห์ที่ 1', subtitle: 'บันทึกการฝึกงานประจำสัปดาห์' },
  week2:   { title: 'สัปดาห์ที่ 2', subtitle: 'บันทึกการฝึกงานประจำสัปดาห์' },
  week3:   { title: 'สัปดาห์ที่ 3', subtitle: 'บันทึกการฝึกงานประจำสัปดาห์' },
  week4:   { title: 'สัปดาห์ที่ 4', subtitle: 'บันทึกการฝึกงานประจำสัปดาห์' },
  week5:   { title: 'สัปดาห์ที่ 5', subtitle: 'บันทึกการฝึกงานประจำสัปดาห์' },
  week6:   { title: 'สัปดาห์ที่ 6', subtitle: 'บันทึกการฝึกงานประจำสัปดาห์' },
  week7:   { title: 'สัปดาห์ที่ 7', subtitle: 'บันทึกการฝึกงานประจำสัปดาห์' },
  summary: { title: 'สรุปผลการฝึกงาน', subtitle: 'ภาพรวมและข้อเสนอแนะ' },
}

function App() {
  const [page, setPage] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const meta = PAGE_META[page] ?? PAGE_META.home

  function renderPage() {
    if (page === 'home') return <HomePage />
    if (page === 'company') return <CompanyPage />
    if (page === 'summary') return <SummaryPage />
    if (page.startsWith('week')) return <WeekPage weekId={page} />
    return <HomePage />
  }

  return (
    <div className="app-wrapper">
      <div
        className={`overlay${sidebarOpen ? ' open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      <Sidebar
        current={page}
        onNavigate={setPage}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="hamburger"
              onClick={() => setSidebarOpen(o => !o)}
              aria-label="เปิด/ปิดเมนู"
            >
              ☰
            </button>
            <div>
              <div className="topbar-title">{meta.title}</div>
              <div className="topbar-subtitle">{meta.subtitle}</div>
            </div>
          </div>
          <div className="company-badge">
            <div className="company-dot"></div>
            Sirisoft Co., Ltd.
          </div>
        </header>

        <main>{renderPage()}</main>
      </div>
    </div>
  )
}

export default App
