'use client';

import { IconArrowUpRight } from '@tabler/icons-react';

export default function EntryCard() {
  return (
    <div
      style={{
        position: 'relative',
        zIndex: 2,
        margin: '1rem auto 2rem',
        width: '100%',
        maxWidth: '64rem',
        padding: '0 0rem',
      }}
    >
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '1rem',
          border: '1px solid var(--card-border, rgba(226, 232, 240, 0.8))',
          backgroundColor: 'var(--card-bg, rgba(255, 255, 255, 0.88))',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: '1.25rem 1.5rem',
          boxShadow: '0 16px 34px -26px rgba(15, 23, 42, 0.75)',
        }}
        className="dark:[--card-border:rgba(51,65,85,0.8)] dark:[--card-bg:rgba(15,23,42,0.75)]"
      >
        {/* 左上角蓝色光晕 */}
        <div
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            left: '-4rem',
            top: '-4rem',
            height: '10rem',
            width: '10rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(37, 99, 235, 0.12)',
            filter: 'blur(48px)',
            WebkitFilter: 'blur(48px)',
          }}
          aria-hidden
        />
        {/* 右下角绿色光晕 */}
        <div
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            bottom: '-5rem',
            right: 0,
            height: '11rem',
            width: '11rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(34, 197, 94, 0.10)',
            filter: 'blur(48px)',
            WebkitFilter: 'blur(48px)',
          }}
          aria-hidden
        />

        {/* 强制 Flex 左右双列分流：左侧自适应铺满，右侧按钮固定在最右边 */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div style={{ position: 'relative', flex: '1 1 300px' }}>
            {/* 胶囊 Label */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '9999px',
                border: '1px solid rgba(191, 219, 254, 0.7)',
                backgroundColor: 'rgba(239, 246, 255, 0.8)',
                padding: '0.25rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: '#1d4ed8',
              }}
            >
              <span
                style={{
                  height: '0.375rem',
                  width: '0.375rem',
                  borderRadius: '9999px',
                  backgroundColor: '#22C55E',
                }}
                aria-hidden
              />
              Landing Reference
            </span>

            {/* 标题 */}
            <h2
              style={{
                margin: '0.35rem 0 0 0',
                fontSize: '1.25rem',
                fontWeight: 600,
                letterSpacing: '-0.025em',
                lineHeight: '1.75rem',
                color: 'var(--mantine-color-text, #0f172a)',
              }}
            >
              参考案例： 产品落地页
            </h2>

            {/* 描述文案一 */}
            <p
              style={{
                margin: '0.4rem 0 0 0',
                fontSize: '0.875rem',
                lineHeight: '1.5rem',
                color: 'var(--mantine-color-dimmed, #334155)',
              }}
            >
              这是一个专门设计的落地页参考页，用来展示此模板可实现的页面结构、文案节奏与响应式效果。
            </p>

            {/* 描述文案二 */}
            <p
              style={{
                margin: '0.25rem 0 0 0',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                color: '#64748b',
              }}
            >
              老李的测试页
            </p>
          </div>

          {/* 右侧精致按钮：右对齐 + 不拉伸 */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', flexShrink: 0 }}>
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.375rem',
                borderRadius: '0.75rem',
                backgroundImage: 'linear-gradient(to right, #2563EB, #1D4ED8)',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#ffffff',
                textDecoration: 'none',
                boxShadow: '0 10px 22px -12px rgba(37, 99, 235, 0.95)',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
            >
              联系我
              <IconArrowUpRight style={{ width: '0.95rem', height: '0.95rem' }} aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
