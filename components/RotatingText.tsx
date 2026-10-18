'use client'

import { useState, useEffect } from 'react'

export default function RotatingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2500) // 每 2.5 秒切换一次
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span className="inline-block text-primary-600 dark:text-primary-400 transition-opacity duration-500 ease-in-out">
      {words[index]}
    </span>
  )
}