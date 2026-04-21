import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ScrollToTop from './components/ScrollToTop'
import SearchModal from './components/SearchModal'
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
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')
  const [searchOpen, setSearchOpen] = useState(false)

  const meta = PAGE_META[page] ?? PAGE_META.home

  // Apply dark mode to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  // Keyboard shortcut: Ctrl+K or Cmd+K to open search
  useEffect(() => {
    const onKey = e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(o => !o)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const el = document.querySelector('.main-content')
    if (!el) return
    const onScroll = () => setScrolled(el.scrollTop > 10)
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

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
              {/* Search */}
              <button
                className="topbar-icon-btn"
                onClick={() => setSearchOpen(true)}
                title="ค้นหาเนื้อหา (Ctrl+K)"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>

              {/* Dark mode toggle */}
              <button
                className="topbar-icon-btn"
                onClick={() => setDarkMode(d => !d)}
                title={darkMode ? 'เปลี่ยนเป็น Light Mode' : 'เปลี่ยนเป็น Dark Mode'}
              >
                {darkMode ? (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                ) : (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </button>

              {/* Print / Export PDF */}
              <button
                className="topbar-icon-btn"
                onClick={() => window.print()}
                title="พิมพ์ / Export PDF"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9"/>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                  <rect x="6" y="14" width="12" height="8"/>
                </svg>
              </button>

              <div className="company-badge">
                <div className="company-dot"></div>
                Sirisoft Co., Ltd.
              </div>
            </div>
          </header>

          <main key={page}>{renderPage()}</main>
        </div>

        <ScrollToTop />

        {searchOpen && (
          <SearchModal
            onNavigate={p => { setPage(p); setSearchOpen(false) }}
            onClose={() => setSearchOpen(false)}
          />
        )}
      </div>
    </ToastProvider>
  )
}

export default App
