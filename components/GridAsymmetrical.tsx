'use client'

import { Container, Flex, Card, Title, Text, Stack, Box, Skeleton, Badge } from '@mantine/core'
import { ReactNode, CSSProperties } from 'react'
import Link from 'next/link'
import ThemeImage from './ThemeImage'

const defaultSkeleton = <Skeleton height="100%" radius="md" animate={false} />

export interface GridItemConfig {
  title?: string
  description?: string
  content?: ReactNode
  imageUrl?: string | { light: string; dark: string }
  imageAlt?: string
  desktopWidth?: string
  imageHeight?: number
  objectPosition?: CSSProperties['objectPosition']
  href?: string
  badge?: string
  date?: string
  isHorizontal?: boolean
}

interface GridAsymmetricalProps {
  items?: GridItemConfig[]
  gap?: string | number
}

export default function GridAsymmetrical({ items = [], gap = '1rem' }: GridAsymmetricalProps) {
  return (
    <Container size="xl" my="md" p={0}>
      <style dangerouslySetInnerHTML={{
        __html: `
          .asym-responsive-card {
            width: 100% !important;
            flex: 1 1 100% !important;
            max-width: 100% !important;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                        box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                        border-color 0.3s ease;
            overflow: hidden;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
            display: block;
          }
          @media (min-width: 769px) {
            .asym-responsive-card {
              width: var(--desktop-width) !important;
              flex: 0 0 var(--desktop-width) !important; /* 👈 改为 0 0，防止末尾单张卡片拉伸 */
              max-width: var(--desktop-width) !important;
            }
            .asym-card-horizontal {
              width: 100% !important;
              flex: 1 1 100% !important;
              max-width: 100% !important;
              display: flex !important;
              flex-direction: row !important;
              align-items: stretch !important;
            }
            .asym-card-horizontal .asym-image-wrapper {
              width: 50% !important;
              height: auto !important;
              min-height: 100% !important;
              flex-shrink: 0 !important;
            }
            .asym-card-horizontal .asym-content-wrapper {
              width: 50% !important;
              display: flex !important;
              flex-direction: column !important;
              justify-content: center !important;
              padding: 2rem !important;
            }
          }
          .asym-responsive-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 30px -15px rgba(0, 0, 0, 0.15);
            border-color: var(--mantine-color-blue-6) !important;
          }
        `
      }} />

      <Flex wrap="wrap" gap={gap} align="stretch">
        {items.map((item, index) => {
          const lightImg = typeof item.imageUrl === 'object' ? item.imageUrl.light : item.imageUrl
          const darkImg = typeof item.imageUrl === 'object' ? item.imageUrl.dark : item.imageUrl

          const defaultWidths = ['30%', '65%', '35%', '60%', '65%', '30%', '65%', '30%']
          const desktopWidth = item.desktopWidth || defaultWidths[index % defaultWidths.length]
          const imageHeight = item.imageHeight || 400

          const CardWrapper = item.href ? Link : Box

          return (
            <Card
              key={index}
              component={CardWrapper as any}
              {...(item.href ? { href: item.href } : {})}
              shadow="sm"
              padding="0"
              radius="md"
              withBorder
              className={`asym-responsive-card ${item.isHorizontal ? 'asym-card-horizontal' : ''}`}
              style={{
                '--desktop-width': desktopWidth,
              } as React.CSSProperties}
            >
              {lightImg ? (
                <>
                  <Box pos="relative" className="asym-image-wrapper">
                    {item.badge && (
                      <Badge
                        pos="absolute"
                        top={12}
                        left={12}
                        style={{ zIndex: 10 }}
                        color="blue"
                        variant="filled"
                        radius="xl"
                      >
                        {item.badge}
                      </Badge>
                    )}

                    <Box pos="relative" w="100%" h={imageHeight} style={{ overflow: 'hidden', height: '100%' }}>
                      <ThemeImage
                        light={lightImg}
                        dark={darkImg || lightImg}
                        alt={item.imageAlt || item.title || `Image ${index + 1}`}
                        width={1200}
                        height={800}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: item.objectPosition || 'center',
                          display: 'block',
                          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                    </Box>
                  </Box>

                  {(item.title || item.description || item.date) && (
                    <Stack gap="xs" p="md" className="asym-content-wrapper">
                      {item.date && (
                        <Text size="xs" c="dimmed">
                          {item.date}
                        </Text>
                      )}
                      {item.title && (
                        <Title order={item.isHorizontal ? 3 : 4} style={{ transition: 'color 0.3s ease' }}>
                          {item.title}
                        </Title>
                      )}
                      {item.description && (
                        <Text size={item.isHorizontal ? 'md' : 'sm'} c="dimmed" lh={1.6}>
                          {item.description}
                        </Text>
                      )}
                    </Stack>
                  )}
                </>
              ) : item.content ? (
                <Box p="md" h="100%" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.content}
                </Box>
              ) : (
                defaultSkeleton
              )}
            </Card>
          )
        })}
      </Flex>
    </Container>
  )
}