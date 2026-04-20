import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const main = document.querySelector('.main-content')
    if (!main) return
    const onScroll = () => setVisible(main.scrollTop > 300)
    main.addEventListener('scroll', onScroll, { passive: true })
    return () => main.removeEventListener('scroll', onScroll)
  }, [])

  function scrollUp() {
    document.querySelector('.main-content')?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scroll-top-btn${visible ? ' visible' : ''}`}
      onClick={scrollUp}
      aria-label="กลับด้านบน"
    >
      ↑
    </button>
  )
}
