'use client'

import { useState, useEffect } from 'react'

export default function AsuraLogo({ white = false }: { white?: boolean }) {
  const [isHovering, setIsHovering] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    const blinkTimer = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 180)
    }, 5000)
    return () => clearInterval(blinkTimer)
  }, [])

  const shouldBlink = isBlinking || (isHovering && !isTouchDevice)
  const color = white ? '#ffffff' : 'currentColor' // 直接使用颜色值

  return (
    // 👇 纯内联样式，强制水平排列，绝对不换行
    <span 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '8px',
        color: color,
        whiteSpace: 'nowrap' // 强制不换行
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // 👇 强制指定宽高和 display，防止被父容器压缩为 0
        style={{ width: '36px', height: '36px', display: 'block', flexShrink: 0 }}
      >
        {shouldBlink ? (
          <path fillRule="evenodd" clipRule="evenodd" d="M16.0752 0C7.21095 0 0 7.18587 0 16.0501V30.3853C0 31.2771 0.722918 32 1.61468 32H16.1002C24.9367 32 32.1002 24.8366 32.1002 16C32.1002 7.16344 24.9117 0 16.0752 0ZM24.802 16.0501C26.697 16.0501 28.2332 17.8658 28.2332 15.9708C28.2332 15.9708 26.697 15 24.802 15C22.907 15 21.3708 15.9708 21.3708 15.9708C21.3708 17.8658 22.907 16.0501 24.802 16.0501ZM14.6182 16.0501C16.5133 16.0501 18.0494 17.866 18.0494 15.971C18.0494 15.971 16.395 15 14.5 15C12.605 15 11.1871 15.971 11.1871 15.971C11.1871 17.866 12.7233 16.0501 14.6182 16.0501Z" fill="currentColor" />
        ) : (
          <path fillRule="evenodd" clipRule="evenodd" d="M16.0752 0C7.21095 0 0 7.18587 0 16.0501V30.3853C0 31.2771 0.722918 32 1.61468 32H16.1002C24.9367 32 32.1002 24.8366 32.1002 16C32.1002 7.16344 24.9117 0 16.0752 0ZM24.802 19.402C26.697 19.402 28.2332 17.8658 28.2332 15.9708C28.2332 14.0758 26.697 12.5396 24.802 12.5396C22.907 12.5396 21.3708 14.0758 21.3708 15.9708C21.3708 17.8658 22.907 19.402 24.802 19.402ZM14.6182 19.4022C16.5133 19.4022 18.0494 17.866 18.0494 15.971C18.0494 14.076 16.5133 12.5398 14.6182 12.5398C12.7233 12.5398 11.1871 14.076 11.1871 15.971C11.1871 17.866 12.7233 19.4022 14.6182 19.4022Z" fill="currentColor" />
        )}
      </svg>
      <span style={{ fontWeight: 'bold', fontSize: '20px', lineHeight: 1 }}>Mirai</span>
    </span>
  )
}