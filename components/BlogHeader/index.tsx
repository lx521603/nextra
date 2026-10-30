'use client';

import { Title, Text } from '@mantine/core';
import { TextAnimate } from '@gfazioli/mantine-text-animate';
import styles from './BlogHeader.module.css';
import BlogBreadcrumbs from '@/components/BlogBreadcrumbs';

type Author = {
  name: string;
  to?: string;
  avatar?: { src: string };
};

export default function BlogHeader({
  title,
  description,
  date,
  badge,
  authors,
}: {
  title?: string;
  description?: string;
  date?: string | Date;
  badge?: { label?: string } | string;
  authors?: Author[];
}) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
    : null;

  const badgeLabel = typeof badge === 'string' ? badge : badge?.label;

  if (!title && !description && !date && !badgeLabel && !authors?.length) return null;

  return (
    <header className={styles.header}>
      <BlogBreadcrumbs title={title} />
      {/* 1. 顶部分类标签 */}
      {badgeLabel && (
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>{badgeLabel}</span>
        </div>
      )}

      {/* 2. 👇 完全复刻 Landing 页的大标题 + 字符动画 */}
      {title && (
        <Title className={styles.title} fz={{ base: 36, sm: 48, md: 56 }} lh={1.1}>
          <TextAnimate
            animate="in"
            by="character"
            inherit
            variant="gradient"
            component="span"
            segmentDelay={0.1}
            duration={1.5}
            animation="scale"
            animateProps={{ scaleAmount: 1.2 }}
            gradient={{ from: 'blue', to: 'cyan' }}
            style={{ display: 'inline-block' }}
          >
            {title}
          </TextAnimate>
        </Title>
      )}

      {/* 3. 作者与日期 Meta 信息 */}
      <div className={styles.meta}>
        {authors && authors.length > 0 && (
          <div className={styles.authors}>
            {authors.map((author, idx) => (
              <a
                key={idx}
                href={author.to || '#'}
                target={author.to ? '_blank' : '_self'}
                rel={author.to ? 'noopener noreferrer' : undefined}
                className={styles.author}
              >
                {author.avatar?.src && (
                  <img src={author.avatar.src} alt={author.name} className={styles.avatar} />
                )}
                <span className={styles.authorName}>{author.name}</span>
              </a>
            ))}
          </div>
        )}

        {authors && authors.length > 0 && formattedDate && (
          <span className={styles.separator}>•</span>
        )}

        {formattedDate && <time className={styles.date}>{formattedDate}</time>}
      </div>

      {/* 4. 文章描述/摘要 */}
      {description && (
        <Text className={styles.description} size="lg" c="dimmed">
          {description}
        </Text>
      )}
    </header>
  );
}
