import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ScrollToTop from './components/ScrollToTop'
import { ToastProvider } from './components/Toast'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import WeekPage from './pages/WeekPage'
import SummaryPage from './pages/SummaryPage'

const PAGE_META = {
  home:    { title: 'หน้าปก', subtitle: 'รายงานการฝึกประสบการณ์วิชาชีพ' },
  company: { title: 'ข้อมูลบริษัท', subtitle: 'Sirisoft Co., Ltd.' },
  week1:   { title: 'สัปดาห์ที่ 1', subtitle: 'บันทึกการฝึกงาน' },
  week2:   { title: 'สัปดาห์ที่ 2', subtitle: 'บันทึกการฝึกงาน' },
  week3:   { title: 'สัปดาห์ที่ 3', subtitle: 'บันทึกการฝึกงาน' },
  week4:   { title: 'สัปดาห์ที่ 4', subtitle: 'บันทึกการฝึกงาน' },
  week5:   { title: 'สัปดาห์ที่ 5', subtitle: 'บันทึกการฝึกงาน' },
  week6:   { title: 'สัปดาห์ที่ 6', subtitle: 'บันทึกการฝึกงาน' },
  week7:   { title: 'สัปดาห์ที่ 7', subtitle: 'บันทึกการฝึกงาน' },
  summary: { title: 'สรุปผลการฝึกงาน', subtitle: 'ภาพรวมและข้อเสนอแนะ' },
}

function App() {
  const [page, setPage] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const meta = PAGE_META[page] ?? PAGE_META.home

  useEffect(() => {
    const el = document.querySelector('.main-content')
    if (!el) return
    const onScroll = () => setScrolled(el.scrollTop > 10)
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  // scroll to top on page change
  useEffect(() => {
    document.querySelector('.main-content')?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  function renderPage() {
    if (page === 'home')    return <HomePage />
    if (page === 'company') return <CompanyPage />
    if (page === 'summary') return <SummaryPage />
    if (page.startsWith('week')) return <WeekPage weekId={page} />
    return <HomePage />
  }

  return (
    <ToastProvider>
      <div className="app-wrapper">
        {/* Mobile overlay */}
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
          <header className={`topbar${scrolled ? ' scrolled' : ''}`}>
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
            <div className="topbar-right">
              <div className="company-badge">
                <div className="company-dot"></div>
                Sirisoft Co., Ltd.
              </div>
            </div>
          </header>

          <main key={page}>{renderPage()}</main>
        </div>

        <ScrollToTop />
      </div>
    </ToastProvider>
  )
}

export default App
