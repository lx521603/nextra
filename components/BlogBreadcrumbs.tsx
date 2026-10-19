'use client'

import { Breadcrumbs, Anchor, Text, Box } from '@mantine/core'
import Link from 'next/link'

interface BlogBreadcrumbsProps {
  title?: string
}

export default function BlogBreadcrumbs({ title }: BlogBreadcrumbsProps) {
  const items = [
    { title: '首页', href: '/' },
    { title: 'Blog', href: '/blog' },
  ].map((item, index) => (
    <Anchor
      component={Link}
      href={item.href}
      key={index}
      size="sm"
      c="dimmed"
      style={{ transition: 'color 0.2s ease' }}
    >
      {item.title}
    </Anchor>
  ))

  return (
    <Box mb="lg">
      <Breadcrumbs separator="/" separatorMargin="xs">
        {items}
        {title && (
          <Text size="sm" c="blue" fw={500} lineClamp={1} style={{ maxWidth: 300 }}>
            {title}
          </Text>
        )}
      </Breadcrumbs>
    </Box>
  )
}