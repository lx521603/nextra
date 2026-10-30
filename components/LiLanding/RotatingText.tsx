'use client';

import { useState, useEffect } from 'react';
import { Text } from '@mantine/core';

export default function RotatingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // 开始淡出
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false); // 切换后淡入
      }, 300); // 等待淡出动画完成
    }, 3500); // 每 3.5 秒切换一次
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <Text
      span
      fw={700}
      // 👇 使用 className 替代无效的 dark:c 属性，nx- 前缀确保在 Nextra 中 100% 生效
      className="nx-text-blue-600 dark:nx-text-blue-400"
      style={{
        display: 'inline-block',
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'translateY(8px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {words[index]}
    </Text>
  );
}
