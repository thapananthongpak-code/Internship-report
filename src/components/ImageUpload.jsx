import { useState, useRef } from 'react'
import { useToast } from './Toast'

export function SingleImageUpload({ label = 'คลิกหรือลากรูปภาพมาวางที่นี่' }) {
  const [src, setSrc] = useState(null)
  const [drag, setDrag] = useState(false)
  const inputRef = useRef()
  const toast = useToast()

  function processFile(file) {
    if (!file || !file.type.startsWith('image/')) {
      toast?.('กรุณาเลือกไฟล์รูปภาพเท่านั้น', 'error')
      return
    }
    setSrc(URL.createObjectURL(file))
    toast?.('อัปโหลดรูปภาพสำเร็จ', 'success')
  }

  function handleChange(e) { processFile(e.target.files[0]) }
  function handleDrop(e) {
    e.preventDefault(); setDrag(false)
    processFile(e.dataTransfer.files[0])
  }
  function handleRemove() {
    setSrc(null)
    if (inputRef.current) inputRef.current.value = ''
    toast?.('ลบรูปภาพแล้ว', 'info')
  }

  return (
    <div
      className={`upload-area${src ? ' filled' : ''}${drag ? ' drag-over' : ''}`}
      onDragOver={e => { e.preventDefault(); setDrag(true) }}
      onDragLeave={() => setDrag(false)}
      onDrop={handleDrop}
    >
      <input ref={inputRef} type="file" accept="image/*" onChange={handleChange} />
      {src ? (
        <>
          <img src={src} alt="uploaded" className="upload-img" />
          <div className="upload-overlay">
            <button className="upload-overlay-btn" onClick={() => inputRef.current?.click()}>เปลี่ยนรูป</button>
            <button className="upload-overlay-btn danger" onClick={handleRemove}>ลบ</button>
          </div>
        </>
      ) : (
        <>
          <div className="upload-icon-wrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-light)' }}>
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
          <p className="upload-text">{label}</p>
          <p className="upload-hint">PNG, JPG, WEBP · ลากรูปมาวางได้เลย</p>
          <span className="upload-btn-label">เลือกไฟล์</span>
        </>
      )}
    </div>
  )
}

export function GalleryUpload({ label = 'เพิ่มรูปภาพ' }) {
  const [images, setImages] = useState([])
  const toast = useToast()

  function handleAdd(e) {
    const files = Array.from(e.target.files).filter(f => f.type.startsWith('image/'))
    if (!files.length) return
    setImages(prev => [...prev, ...files.map(f => URL.createObjectURL(f))])
    toast?.(`เพิ่ม ${files.length} รูปสำเร็จ`, 'success')
    e.target.value = ''
  }

  function handleRemove(idx) {
    setImages(prev => prev.filter((_, i) => i !== idx))
    toast?.('ลบรูปภาพแล้ว', 'info')
  }

  return (
    <div className="img-grid">
      {images.map((src, i) => (
        <div key={i} className="img-tile">
          <img src={src} alt={`รูปที่ ${i + 1}`} />
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
  )
}
