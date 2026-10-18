'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import styles from './AutoBlogList.module.css'

const POSTS_PER_PAGE = 5

type Post = {
  slug: string
  title: string
  description: string
  image: string
  date: string | Date
  badge: string
}

export default function AutoBlogListClient({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  
  // 👇 防御性编程：防止 posts 为 undefined 导致报错
  const safePosts = posts || []
  const totalPages = Math.ceil(safePosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const currentPosts = safePosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  return (
    <>
      <div className={styles.grid}>
        {currentPosts.map((post, index) => {
          const isFeatured = index === 0 && currentPage === 1
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={`${styles.card} ${isFeatured ? styles.cardFeatured : ''}`}>
              <div className={`${styles.imageContainer} ${isFeatured ? styles.imageContainerFeatured : ''}`}>
                {post.image ? (
                  <img src={post.image} alt={post.title} loading={index === 0 ? "eager" : "lazy"} className={styles.image} />
                ) : (
                  <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%',color:'#9ca3af'}}>无图片</div>
                )}
                {post.badge && <span className={styles.badge}>{post.badge}</span>}
              </div>

              <div className={styles.content}>
                <time className={styles.date}>{new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <h3 className={`${styles.title} ${isFeatured ? styles.titleFeatured : styles.titleNormal}`}>{post.title}</h3>
                <p className={`${styles.description} ${isFeatured ? styles.descriptionFeatured : styles.descriptionNormal}`}>{post.description}</p>
                <div className={styles.readMore}>阅读全文 <span className={styles.readMoreArrow}>→</span></div>
              </div>
            </Link>
          )
        })}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <Link 
            href={`/blog?page=${currentPage - 1}`}
            className={`${styles.pageButton} ${currentPage === 1 ? styles.pageButtonDisabled : ''}`}
          >
            ← 上一页
          </Link>
          
          <span className={styles.pageInfo}>
            第 {currentPage} / {totalPages} 页
          </span>
          
          <Link 
            href={`/blog?page=${currentPage + 1}`}
            className={`${styles.pageButton} ${currentPage === totalPages ? styles.pageButtonDisabled : ''}`}
          >
            下一页 →
          </Link>
        </div>
      )}
    </>
  )
}