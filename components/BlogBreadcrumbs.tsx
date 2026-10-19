'use client'

import { Breadcrumbs, Anchor, Text } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export type BreadcrumbItem = {
  title: string
  href?: string
}

interface BlogBreadcrumbsProps {
  items?: BreadcrumbItem[]
  title?: string // 🌟 允许直接传入当前文章/页面的 title
}

export default function BlogBreadcrumbs({ items, title }: BlogBreadcrumbsProps) {
  const pathname = usePathname()

  let breadcrumbItems: BreadcrumbItem[] = []

  // 1. 如果父组件显式传了 items（例如联系页），直接用传进来的
  if (items && items.length > 0) {
    breadcrumbItems = items
  } else {
    // 2. 没有传 items 时，根据 URL 和 title 动态构建路径
    breadcrumbItems = [
      { title: '主页', href: '/' }
    ]

    // 处理 /blog 及其子页面路径
    if (pathname === '/blog' || pathname.startsWith('/blog/')) {
      const isPostPage = pathname !== '/blog'

      // 如果在具体的文章页，/blog（博客列表）是可以点击回退的链接！
      if (isPostPage) {
        breadcrumbItems.push({ title: 'Blog', href: '/blog' })
        // 最后一级：当前文章的完整 Title（灰色不可点击）
        breadcrumbItems.push({ title: title || '文章详情' })
      } else {
        // 如果就在 /blog 列表页本身，最后一级就是“博客”（灰色不可点击）
        breadcrumbItems.push({ title: 'Blog' })
      }
    } else if (title) {
      // 兜底：其他没有写在 /blog 路径下的自定义页面
      breadcrumbItems.push({ title })
    }
  }

  const breadcrumbElements = breadcrumbItems.map((item, index) => {
    const isLast = index === breadcrumbItems.length - 1

    // 最后一项（当前页面）始终渲染为灰色不可点击的 Text
    if (isLast || !item.href) {
      return (
        <Text key={index} size="sm" c="dimmed" fw={isLast ? 500 : 400}>
          {item.title}
        </Text>
      )
    }

    // 前面的层级全都是蓝色可点击的 Anchor 链接
    return (
      <Anchor key={index} component={Link} href={item.href} size="sm">
        {item.title}
      </Anchor>
    )
  })

  return (
    <Breadcrumbs separator="/" separatorMargin="sm" mb="md">
      {breadcrumbElements}
    </Breadcrumbs>
  )
}