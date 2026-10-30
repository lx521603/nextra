'use client';

import { Text, Title, Button, Stack, Group, Container } from '@mantine/core';
import Hero from './Hero';
import GridAsymmetrical from '@/components/GridAsymmetrical';

export default function LiLanding() {
  return (
    <main
      style={{
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100dvw',
        overflowX: 'clip',
        background: 'var(--mantine-color-body)',
      }}
    >
      {/* Hero 区域：保持全套特效 */}
      <Hero />

      {/* 照片墙与图文拼图：使用 GridAsymmetrical 移植 */}
      <Container size="xl" pb="xl">
        <GridAsymmetrical
          items={[
            {
              title: '✨ 笃定的弧度',
              description: '那种笑不张扬，但你一眼就知道——她清楚自己值得所有的好。',
              imageUrl: '/landing/Q30A3553.webp',
              imageHeight: 400,
              desktopWidth: '30%',
            },
            {
              title: '每一次快门、每一段文字',
              description:
                '都是对时光的温柔收藏。这里记录着旅途中的风景、街角的偶遇、以及那些让人忍不住微笑的小确幸。',
              imageUrl: '/landing/Q30A0695.webp',
              imageHeight: 400,
              desktopWidth: '65%',
            },
            {
              title: '🚂 铁轨上的市井',
              description:
                '汽笛声起，遮阳棚如潮水般退去。火车贴着新鲜的蔬菜与鱼虾缓缓碾过，没有惊慌，只有习以为常的默契。车轮远去，摊位瞬间复原，仿佛什么都没发生过。这是铁轨与生活的奇妙共生。',
              imageUrl: '/landing/Q30A3643.webp',
              imageHeight: 400,
              desktopWidth: '45%',
            },
            {
              title: '转角遇见的未命名诗篇',
              description:
                '不预设构图，不等光线完美，只是用眼睛先于快门去生活。不预设构图，不等光线完美，只是用眼睛先于快门去生活。',
              imageUrl: '/landing/Q30A126.webp',
              imageHeight: 400,
              desktopWidth: '50%',
            },
            {
              title: '霓虹流淌的烟火人间',
              description:
                '华灯初上，步行街便成了一条流动的光河。放慢快门，让匆匆的人流化作柔光，定格这座城市的体温与呼吸。Canon 5d3 50mm f/1.2 全开。',
              imageUrl: '/landing/Q30A5015.webp',
              imageHeight: 554,
              desktopWidth: '95%',
            },
            {
              title: '烈日下的光影',
              description:
                '盛夏的光线是最奢侈的馈赠。正午的硬光切割出锋利的阴影，午后的斜阳把树影拉得修长。',
              imageUrl: '/landing/DSC00975.webp',
              imageHeight: 554,
              desktopWidth: '30%',
            },
            {
              title: '🤪 不设防的生动',
              description: '有时候，最动人的肖像，恰恰诞生于放弃“完美”的那一秒。',
              imageUrl: '/landing/Q30A3919.webp',
              imageHeight: 554,
              desktopWidth: '30%',
            },
            {
              title: '倾泻的快乐',
              description:
                '高举的花洒，四溅的水珠。最动人的快门，永远留给那些毫无保留、野蛮生长的瞬间。',
              imageUrl: '/landing/Xco1qkk.webp',
              imageHeight: 554,
              desktopWidth: '30%',
            },
            {
              title: '🙏 结缘',
              description:
                '殿外香火正旺，每个人都在求点什么。而这条绳，大概什么也保不了，只是让人在转身下山的那一刻，心里稍微踏实一点。',
              imageUrl: '/landing/Q30A5184.webp',
              imageHeight: 400,
              desktopWidth: '55%',
            },
            {
              title: '街角微光',
              description: '她不仅是屏幕那端的温暖陪伴，更是这座城市夜里最动人的微光。',
              imageUrl: '/landing/DSC00608.webp',
              imageHeight: 400,
              desktopWidth: '40%',
            },
            {
              title: '🔥 忘我时刻',
              description: '身体跟着节奏失控，灵魂在人群里找到自由。这一刻，不需要理由。',
              imageUrl: '/landing/Q30A4133.webp',
              imageHeight: 400,
              desktopWidth: '70%',
            },
            {
              title: '✨ 允许自己放空',
              description:
                '没有明确的终点，也不需要刻意的构图。只是贪恋车窗外那一抹微凉的夜风，和放空时最真实的自我。',
              imageUrl: '/landing/TfH0okk.webp',
              imageHeight: 400,
              desktopWidth: '25%',
            },
          ]}
        />
      </Container>
    </main>
  );
}
