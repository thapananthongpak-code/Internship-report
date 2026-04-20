import { useState, useRef } from 'react'

export function SingleImageUpload({ label = 'คลิกหรือลากรูปภาพมาวางที่นี่' }) {
  const [src, setSrc] = useState(null)
  const inputRef = useRef()

  function handleChange(e) {
    const file = e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setSrc(url)
  }

  function handleRemove(e) {
    e.stopPropagation()
    setSrc(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className={`upload-area${src ? ' filled' : ''}`}>
      <input ref={inputRef} type="file" accept="image/*" onChange={handleChange} />
      {src ? (
        <>
          <img src={src} alt="uploaded" className="upload-img" />
          <div className="upload-actions">
            <button className="upload-btn" onClick={handleRemove}>✕ ลบ</button>
            <button className="upload-btn" onClick={() => inputRef.current?.click()}>เปลี่ยน</button>
          </div>
        </>
      ) : (
        <>
          <span className="upload-icon">🖼️</span>
          <p className="upload-text">{label}</p>
          <p className="upload-hint">PNG, JPG, WEBP ขนาดไม่เกิน 10MB</p>
        </>
      )}
    </div>
  )
}

export function GalleryUpload({ label = 'เพิ่มรูปภาพ' }) {
  const [images, setImages] = useState([])

  function handleAdd(e) {
    const files = Array.from(e.target.files)
    const urls = files.map(f => URL.createObjectURL(f))
    setImages(prev => [...prev, ...urls])
    e.target.value = ''
  }

  function handleRemove(idx) {
    setImages(prev => prev.filter((_, i) => i !== idx))
  }

  return (
    <div className="img-grid">
      {images.map((src, i) => (
        <div key={i} className="img-tile">
          <img src={src} alt={`รูปที่ ${i + 1}`} />
          <button className="upload-btn" onClick={() => handleRemove(i)}>✕</button>
        </div>
      ))}
      <label className="add-tile">
        <input type="file" accept="image/*" multiple onChange={handleAdd} />
        <span className="add-tile-icon">➕</span>
        <span className="add-tile-text">{label}</span>
      </label>
    </div>
  )
}
