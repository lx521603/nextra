'use client'

import { Card, Text, Title } from '@mantine/core'
import ThemeImage from '@/components/ThemeImage'

type LiCardProps = {
  title?: string
  description?: string
  light?: string
  dark?: string
  alt?: string
  imageHeight?: number
  desktopWidth?: string  // 桌面端宽度，如 "30%", "65%"
  children?: React.ReactNode
}

export default function LiCard({ 
  title, 
  description, 
  light, 
  dark, 
  alt = '', 
  imageHeight = 250,
  desktopWidth = '100%',
  children 
}: LiCardProps) {
  return (
    <Card 
      shadow="sm" 
      padding={children ? "lg" : "0"} 
      radius="md" 
      withBorder
      className="li-card"
      style={{ 
        '--desktop-width': desktopWidth,
        width: '100%',
        marginBottom: '1rem'
      } as React.CSSProperties}
    >
      {light && (
        <Card.Section>
          <ThemeImage 
            light={light} 
            dark={dark || light} 
            alt={alt} 
            width={800} 
            height={imageHeight} 
            style={{ width: '100%', height: imageHeight, objectFit: 'cover' }} 
          />
        </Card.Section>
      )}
      
      {(title || description || children) && (
        <Card.Section p="md">
          {title && <Title order={3} mb={5}>{title}</Title>}
          {description && <Text size="sm" c="dimmed">{description}</Text>}
          {children}
        </Card.Section>
      )}
    </Card>
  )
}