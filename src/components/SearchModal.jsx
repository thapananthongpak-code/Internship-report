import { useState, useEffect, useRef } from 'react'

const SEARCH_INDEX = [
  { page: 'home',    label: 'หน้าปก',                    keywords: 'หน้าปก รายงาน นักศึกษา ชื่อ รหัส สาขา คณะ มหาวิทยาลัย พี่เลี้ยง mentor' },
  { page: 'company', label: 'ข้อมูลบริษัท',              keywords: 'บริษัท sirisoft ศิริซอฟต์ ประวัติ ผลิตภัณฑ์ โครงสร้าง องค์กร' },
  { page: 'week1',   label: 'สัปดาห์ที่ 1',              keywords: 'สัปดาห์ 1 week กิจกรรม งาน ความรู้ ปัญหา' },
  { page: 'week2',   label: 'สัปดาห์ที่ 2',              keywords: 'สัปดาห์ 2 week กิจกรรม งาน ความรู้ ปัญหา' },
  { page: 'week3',   label: 'สัปดาห์ที่ 3',              keywords: 'สัปดาห์ 3 week กิจกรรม งาน ความรู้ ปัญหา' },
  { page: 'week4',   label: 'สัปดาห์ที่ 4',              keywords: 'สัปดาห์ 4 week กิจกรรม งาน ความรู้ ปัญหา' },
  { page: 'week5',   label: 'สัปดาห์ที่ 5',              keywords: 'สัปดาห์ 5 week กิจกรรม งาน ความรู้ ปัญหา' },
  { page: 'week6',   label: 'สัปดาห์ที่ 6',              keywords: 'สัปดาห์ 6 week กิจกรรม งาน ความรู้ ปัญหา' },
  { page: 'week7',   label: 'สัปดาห์ที่ 7',              keywords: 'สัปดาห์ 7 week กิจกรรม งาน ความรู้ ปัญหา' },
  { page: 'week8',   label: 'สัปดาห์ที่ 8',              keywords: 'สัปดาห์ 8 week กิจกรรม งาน ความรู้ ปัญหา' },
  { page: 'summary', label: 'สรุปผลการฝึกงาน',           keywords: 'สรุป ผล ทักษะ ความประทับใจ ข้อเสนอแนะ บทสรุป' },
]

export default function SearchModal({ onNavigate, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const q = query.trim().toLowerCase()
  const results = q
    ? SEARCH_INDEX.filter(item =>
        item.label.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q)
      )
    : SEARCH_INDEX

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon-svg">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            ref={inputRef}
            className="search-input"
            type="text"
            placeholder="ค้นหาหน้า เช่น สัปดาห์, บริษัท, สรุป..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button className="search-clear-btn" onClick={() => setQuery('')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
        </div>
        <div className="search-results">
          {results.length === 0 && (
            <div className="search-empty">ไม่พบหน้าที่ตรงกับ "{query}"</div>
          )}
          {results.map(item => (
            <button
              key={item.page}
              className="search-result-item"
              onClick={() => { onNavigate(item.page); onClose() }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.45 }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <span className="search-result-label">{item.label}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 'auto', flexShrink: 0, opacity: 0.3 }}>
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          ))}
        </div>
        <div className="search-hint-bar">กด Esc เพื่อปิด</div>
      </div>
    </div>
  )
}
