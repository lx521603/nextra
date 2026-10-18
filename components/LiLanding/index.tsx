'use client'

import { Text, Title, Button, Stack, Group, Container } from '@mantine/core'
import { Tabs, Callout } from 'nextra/components'
import Hero from './Hero'
import LiCard from '@/components/LiCard'
import AsuraLogo from '@/components/AsuraLogo'

export default function LiLanding() {
  return (
    <main style={{ 
      position: 'relative', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      width: '100dvw', 
      overflowX: 'clip',
      background: 'var(--mantine-color-body)'
    }}>
      
      <Hero />

      <Container size="xl" pb="xl">
        <style dangerouslySetInnerHTML={{
          __html: `
            /* ================= 流式布局核心 ================= */
            .li-grid {
              display: flex;
              flex-wrap: wrap; /* 允许自动换行补位 */
              gap: 1rem;
            }
            @media (min-width: 769px) {
              .li-card {
                width: var(--desktop-width) !important;
              }
            }
            
            /* ================= ✨ 高级悬停特效 ✨ ================= */
            .li-card {
              transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                          box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                          border-color 0.3s ease;
              overflow: hidden; 
              cursor: pointer;
            }
            /* 悬停上浮 + 阴影加深 */
            .li-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 20px 30px -15px rgba(0, 0, 0, 0.12);
              border-color: var(--mantine-color-blue-6) !important;
            }
            html.dark .li-card:hover {
              box-shadow: 0 20px 30px -15px rgba(0, 0, 0, 0.6);
              border-color: var(--mantine-color-blue-4) !important;
            }
            /* 内部图片微放大 */
            .li-card img {
              transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .li-card:hover img {
              transform: scale(1.06);
            }
            /* 标题变色 */
            .li-card h3 {
              transition: color 0.3s ease;
            }
            .li-card:hover h3 {
              color: var(--mantine-color-blue-6) !important;
            }
            html.dark .li-card:hover h3 {
              color: var(--mantine-color-blue-4) !important;
            }
          `
        }} />

        {/* 👇 统一的 Flex 容器，所有卡片放在这里，自动计算换行补位 */}
        <div className="li-grid">
          
          <LiCard 
            title="✨ 笃定的弧度" 
            description="那种笑不张扬，但你一眼就知道——她清楚自己值得所有的好。" 
            light="/landing/Q30A3553.webp" 
            imageHeight={400} 
            desktopWidth="30%" 
          />
          <LiCard 
            title="每一次快门、每一段文字" 
            description="都是对时光的温柔收藏。这里记录着旅途中的风景、街角的偶遇、以及那些让人忍不住微笑的小确幸。" 
            light="/landing/Q30A0695.webp" 
            imageHeight={400} 
            desktopWidth="65%" 
          />
          
          <LiCard title="用镜头记录生活" desktopWidth="60%">
            <Text size="sm" c="dimmed" mb="md">部分设备</Text>
            <Tabs items={['📷 装备']}>
              <Tabs.Tab>
                <Stack gap="sm" mt="sm">
                  <Callout emoji="💡">Canon 5D Mark III、Canon EOS R8、Sony A7C II、iPhone 16</Callout>
                  <Callout emoji="✅">Canon EF 50mm f/1.2L、EF 35mm f/2 IS、EF 135mm f/2L、EF 24-105mm f/4L</Callout>
                  <Callout emoji="⚠️">Sigma MC-11、JCC EF-EOSR</Callout>
                  <Callout emoji="🔋">Godox V860III、Godox V520、Godox V480</Callout>
                </Stack>
              </Tabs.Tab>
            </Tabs>
          </LiCard>

          <LiCard 
            title="🚂 铁轨上的市井" 
            description="汽笛声起，遮阳棚如潮水般退去。火车贴着新鲜的蔬菜与鱼虾缓缓碾过，没有惊慌，只有习以为常的默契。车轮远去，摊位瞬间复原，仿佛什么都没发生过。这是铁轨与生活的奇妙共生。" 
            light="/landing/Q30A3643.webp" 
            imageHeight={350} 
            desktopWidth="35%" 
          />
          <LiCard 
            title="烈日下的光影" 
            description="盛夏的光线是最奢侈的馈赠。正午的硬光切割出锋利的阴影，午后的斜阳把树影拉得修长。" 
            light="/landing/DSC00975.webp" 
            imageHeight={570} 
            desktopWidth="30%" 
          />

          <LiCard 
            title="霓虹流淌的烟火人间" 
            description="华灯初上，步行街便成了一条流动的光河。放慢快门，让匆匆的人流化作柔光，定格这座城市的体温与呼吸。Canon 5d3 50mm f/1.2 全开。" 
            light="/landing/Q30A5015.webp" 
            imageHeight={554} 
            desktopWidth="65%" 
          />

          <LiCard 
            title="街角微光" 
            description="她不仅是屏幕那端的温暖陪伴，更是这座城市夜里最动人的微光。" 
            light="/landing/DSC00608.webp" 
            imageHeight={400} 
            desktopWidth="70%" 
          />

          <LiCard 
            title="🤪 不设防的生动" 
            description="有时候，最动人的肖像，恰恰诞生于放弃“完美”的那一秒。" 
            light="/landing/Q30A3919.webp" 
            imageHeight={400} 
            desktopWidth="25%" 
          />
          <LiCard 
            title="转角遇见的未命名诗篇" 
            description="不预设构图，不等光线完美，只是用眼睛先于快门去生活。不预设构图，不等光线完美，只是用眼睛先于快门去生活。" 
            light="/landing/Q30A126.webp" 
            imageHeight={525} 
            desktopWidth="30%" 
          />

          <LiCard 
            title="🙏 结缘" 
            description="殿外香火正旺，每个人都在求点什么。而这条绳，大概什么也保不了，只是让人在转身下山的那一刻，心里稍微踏实一点。" 
            light="/landing/Q30A5184.webp" 
            imageHeight={554} 
            desktopWidth="65%" 
          />

          <LiCard 
            title="🔥 忘我时刻" 
            description="身体跟着节奏失控，灵魂在人群里找到自由。这一刻，不需要理由。" 
            light="/landing/Q30A4133.webp" 
            imageHeight={459} 
            desktopWidth="70%" 
          />

          <LiCard title="联系我?" desktopWidth="25%">
            <Stack gap="md" align="center" ta="center" style={{ width: '100%' }}>
              <Title order={2}><Text span c="blue">联系</Text> 我?</Title>
              <Text c="dimmed">请点击下方按钮联系我！</Text>
              <Group gap="md" justify="center" wrap="wrap" style={{ width: '100%', maxWidth: '24rem' }}>
                <Button component="a" href="https://zaeth.com" size="md" fullWidth>访问 Zaeth.com →</Button>
                <Button component="a" href="https://mirai.st" target="_blank" variant="default" size="md" fullWidth>Mirai Studio</Button>
                <Button component="a" href="https://go.91.pt/instagram" target="_blank" variant="default" size="md" fullWidth>📷 Instagram</Button>
              </Group>
            </Stack>
          </LiCard>

        </div>
      </Container>
    </main>
  )
}