import { useState, useRef } from 'react'
import { useToast } from '../components/Toast'

// ════════════════════════════════════════════
//  แก้ไขข้อมูลสรุปผลตรงนี้
// ════════════════════════════════════════════
const STATS = [
  { num: '7',  label: 'สัปดาห์' },
  { num: '40', label: 'วันทำงาน' },
  { num: '–',  label: 'โปรเจกต์' },   // ← จำนวนโปรเจกต์
  { num: '–',  label: 'ทักษะใหม่' },  // ← จำนวนทักษะ
]

function DocAttach() {
  const [files, setFiles] = useState([])
  const inputRef = useRef()
  const toast = useToast()

  function handleAdd(e) {
    const added = Array.from(e.target.files)
    if (!added.length) return
    setFiles(prev => [...prev, ...added.map(f => ({ name: f.name, size: f.size, url: URL.createObjectURL(f) }))])
    toast?.(`เพิ่ม ${added.length} ไฟล์สำเร็จ`, 'success')
    e.target.value = ''
  }

  function handleRemove(i) {
    setFiles(prev => prev.filter((_, idx) => idx !== i))
    toast?.('ลบไฟล์แล้ว', 'info')
  }

  function fmt(bytes) {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  return (
    <div>
      <div className="doc-attach-area" onClick={() => inputRef.current?.click()}>
        <input ref={inputRef} type="file" multiple accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.png,.jpg,.jpeg" onChange={handleAdd} />
        <div className="doc-attach-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gray-500)' }}>
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
          </svg>
        </div>
        <p className="doc-attach-text">คลิกเพื่อเลือกไฟล์ หรือลากมาวางที่นี่</p>
        <p className="doc-attach-hint">PDF, Word, PowerPoint, Excel, รูปภาพ — รองรับหลายไฟล์</p>
      </div>

      {files.length > 0 && (
        <div className="doc-file-list">
          {files.map((f, i) => (
            <div key={i} className="doc-file-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--gray-400)' }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <a href={f.url} target="_blank" rel="noreferrer" className="doc-file-name" style={{ color: 'var(--primary)', textDecoration: 'none' }}>{f.name}</a>
              <span className="doc-file-size">{fmt(f.size)}</span>
              <button className="doc-file-del" onClick={() => handleRemove(i)}>×</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function SummaryPage() {
  return (
    <div className="page-body">
      <div className="cover-hero animate-scale-in">
        <span className="cover-tag">สรุปผลการฝึกงาน</span>
        <h1 className="cover-title">สรุปผลการฝึกประสบการณ์<br/>วิชาชีพ</h1>
        <p className="cover-subtitle">บริษัท ศิริซอฟต์ จำกัด — ระยะเวลา 8 สัปดาห์</p>
        <div className="cover-divider"></div>
      </div>

      <div className="summary-stats animate-fade-up delay-100">
        {STATS.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="card animate-fade-up delay-200">
        <div className="card-header">
          <div>
            <div className="card-header-title">แนบเอกสารรายงาน</div>
            <div className="card-header-sub">อัปโหลดไฟล์รายงาน เอกสารประกอบ หรือรูปภาพ</div>
          </div>
        </div>
        <div className="card-body">
          <DocAttach />
        </div>
      </div>
    </div>
  )
}
