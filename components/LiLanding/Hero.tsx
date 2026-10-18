'use client'

import { Text, Title, Button, Stack, Group, Anchor, Code, Container } from '@mantine/core'
import { TextAnimate } from '@gfazioli/mantine-text-animate'
import { IconExternalLink, IconBrandGithub, IconSparkles } from '@tabler/icons-react'
import RotatingText from './RotatingText'
import classes from './Hero.module.css'


export default function Hero() {
  return (
    <Container size="xl" className={classes.container}>
      {/* 背景光晕 */}
      <div className={classes.glowA} aria-hidden />
      <div className={classes.glowB} aria-hidden />

      <Stack align="center" ta="center" gap="lg" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* 顶部 Badge */}
        <a href="https://zaeth.com" target="_blank" rel="noopener noreferrer" className={classes.badge}>
          <IconSparkles size={16} />
          v2.0 刚刚发布，佛系更新中
        </a>

        {/* 主标题：静态高级渐变 + 动态跳动字 */}
        <Title 
          ta="center" 
          fz={{ base: 42, sm: 56, md: 64 }} 
          lh={1.1}
          className={classes.headline}
          data-mantine-color-scheme="light" // 强制亮色渐变，或通过 CSS 变量控制
        >
          <span className={classes.headlineDark}>老李游记</span>
          <TextAnimate
            animate="in"
            by="character"
            inherit
            variant="gradient"
            component="span"
            segmentDelay={0.15}
            duration={2}
            animation="scale"
            animateProps={{ scaleAmount: 1.3 }}
            gradient={{ from: 'pink', to: 'yellow' }}
            style={{ marginLeft: '0.15em', display: 'inline-block' }}
          >
            记录沿途的风景
          </TextAnimate>
        </Title>

        {/* 副标题：包含平滑轮转词 */}
        <Text c="dimmed" ta="center" size="xl" maw={650} mx="auto" lh={1.6}>
          在这里，每一次快门、每一段文字，都是{' '}
          <RotatingText words={[
            "对时光的温柔收藏",
            "技术的深度探索",
            "生活的真实点滴",
            "光影的极致追求"
          ]} />
          。探索 <Anchor href="https://91.pt" target="_blank" underline="never" fw={600}>技术的边界</Anchor>，
          感受 <Code fz="lg" variant="filled">生活</Code> 的温度。
        </Text>

        {/* CTA 按钮组 */}
        <Group gap="md" mt="md">
          <Button
            component="a"
            href="/docs"
            rightSection={<IconExternalLink size={18} />}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            px={32}
            radius={100}
            size="lg"
            styles={{
              root: {
                boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px 0 rgba(37, 99, 235, 0.4)',
                }
              }
            }}
          >
            开始阅读
          </Button>
          
          <Button
            component="a"
            href="https://github.com"
            target="_blank"
            leftSection={<IconBrandGithub size={18} />}
            variant="default"
            px={32}
            radius={100}
            size="lg"
          >
            Github
          </Button>
        </Group>

      </Stack>
    </Container>
  )
}