import { useState, useRef } from 'react'
import { useToast } from './Toast'

/* ─── SingleImageUpload ───────────────────────────────
   รองรับ 3 วิธี:
   1. คลิกเลือกไฟล์จากเครื่อง
   2. Drag & drop
   3. ใส่ path รูปที่วางใน public/images/  เช่น /images/cover/photo.jpg
──────────────────────────────────────────────────────── */
export function SingleImageUpload({ label = 'คลิกหรือลากรูปภาพมาวางที่นี่', defaultSrc = '' }) {
  const [src, setSrc] = useState(defaultSrc || null)
  const [drag, setDrag] = useState(false)
  const [pathInput, setPathInput] = useState('')
  const [showPath, setShowPath] = useState(false)
  const inputRef = useRef()
  const toast = useToast()

  function processFile(file) {
    if (!file || !file.type.startsWith('image/')) {
      toast?.('กรุณาเลือกไฟล์รูปภาพเท่านั้น', 'error')
      return
    }
    setSrc(URL.createObjectURL(file))
    setShowPath(false)
    toast?.('อัปโหลดรูปภาพสำเร็จ', 'success')
  }

  function handleChange(e) { processFile(e.target.files[0]) }
  function handleDrop(e) {
    e.preventDefault(); setDrag(false)
    processFile(e.dataTransfer.files[0])
  }
  function handleRemove() {
    setSrc(null); setPathInput('')
    if (inputRef.current) inputRef.current.value = ''
    toast?.('ลบรูปภาพแล้ว', 'info')
  }
  function handlePathSubmit(e) {
    e.preventDefault()
    if (!pathInput.trim()) return
    setSrc(pathInput.trim())
    setShowPath(false)
    toast?.('โหลดรูปภาพสำเร็จ', 'success')
  }

  return (
    <div
      className={`upload-area${src ? ' filled' : ''}${drag ? ' drag-over' : ''}`}
      onDragOver={e => { e.preventDefault(); setDrag(true) }}
      onDragLeave={() => setDrag(false)}
      onDrop={handleDrop}
    >
      <input ref={inputRef} type="file" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />

      {src ? (
        <>
          <img src={src} alt="uploaded" className="upload-img"
            onError={() => { setSrc(null); toast?.('ไม่พบรูปภาพ กรุณาตรวจสอบ path', 'error') }} />
          <div className="upload-overlay">
            <button className="upload-overlay-btn" onClick={() => inputRef.current?.click()}>เปลี่ยนรูป</button>
            <button className="upload-overlay-btn danger" onClick={handleRemove}>ลบ</button>
          </div>
        </>
      ) : (
        <>
          <div className="upload-icon-wrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-light)' }}>
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
          <p className="upload-text">{label}</p>
          <p className="upload-hint">วางรูปใน public/images/ แล้วใส่ path หรือเลือกไฟล์จากเครื่อง</p>

          <div className="upload-actions-row">
            <button className="upload-btn-label" onClick={() => inputRef.current?.click()}>
              เลือกไฟล์
            </button>
            <button
              className="upload-btn-label secondary"
              onClick={() => setShowPath(v => !v)}
            >
              ใส่ Path รูป
            </button>
          </div>

          {showPath && (
            <form className="path-input-row" onSubmit={handlePathSubmit} onClick={e => e.stopPropagation()}>
              <input
                type="text"
                className="path-input"
                placeholder="/images/cover/photo.jpg"
                value={pathInput}
                onChange={e => setPathInput(e.target.value)}
                autoFocus
              />
              <button type="submit" className="path-submit-btn">ยืนยัน</button>
            </form>
          )}
        </>
      )}
    </div>
  )
}

/* ─── GalleryUpload ───────────────────────────────────
   รองรับทั้งเลือกไฟล์ และใส่ path หลายรูป
──────────────────────────────────────────────────────── */
export function GalleryUpload({ label = 'เพิ่มรูปภาพ' }) {
  const [images, setImages] = useState([])
  const [pathInput, setPathInput] = useState('')
  const [showPath, setShowPath] = useState(false)
  const toast = useToast()

  function handleAdd(e) {
    const files = Array.from(e.target.files).filter(f => f.type.startsWith('image/'))
    if (!files.length) return
    setImages(prev => [...prev, ...files.map(f => URL.createObjectURL(f))])
    toast?.(`เพิ่ม ${files.length} รูปสำเร็จ`, 'success')
    e.target.value = ''
  }

  function handlePathAdd(e) {
    e.preventDefault()
    const paths = pathInput.split('\n').map(p => p.trim()).filter(Boolean)
    if (!paths.length) return
    setImages(prev => [...prev, ...paths])
    setPathInput(''); setShowPath(false)
    toast?.(`เพิ่ม ${paths.length} รูปสำเร็จ`, 'success')
  }

  function handleRemove(idx) {
    setImages(prev => prev.filter((_, i) => i !== idx))
    toast?.('ลบรูปภาพแล้ว', 'info')
  }

  return (
    <div>
      <div className="img-grid">
        {images.map((src, i) => (
          <div key={i} className="img-tile">
            <img src={src} alt={`รูปที่ ${i + 1}`}
              onError={e => { e.target.style.opacity = '0.3'; e.target.alt = 'ไม่พบรูป' }} />
            <div className="img-tile-overlay">
              <button className="img-tile-del" onClick={() => handleRemove(i)}>ลบ</button>
            </div>
          </div>
        ))}

        <label className="add-tile">
          <input type="file" accept="image/*" multiple onChange={handleAdd} />
          <span className="add-tile-icon">+</span>
          <span className="add-tile-text">{label}</span>
        </label>
      </div>

      <div style={{ marginTop: '10px' }}>
        <button
          className="path-toggle-btn"
          onClick={() => setShowPath(v => !v)}
        >
          {showPath ? 'ซ่อน' : '+ ใส่ Path รูปหลายรูป'}
        </button>

        {showPath && (
          <form className="path-input-row" style={{ marginTop: '8px', alignItems: 'flex-start' }} onSubmit={handlePathAdd}>
            <textarea
              className="path-input"
              rows={3}
              placeholder={'/images/week1/photo1.jpg\n/images/week1/photo2.jpg'}
              value={pathInput}
              onChange={e => setPathInput(e.target.value)}
              style={{ resize: 'vertical', fontFamily: 'monospace', fontSize: '13px' }}
            />
            <button type="submit" className="path-submit-btn" style={{ alignSelf: 'flex-start' }}>ยืนยัน</button>
          </form>
        )}
      </div>
    </div>
  )
}
