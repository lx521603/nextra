import { 
  IconArrowUpRight, 
  IconLink,
  IconBrandCloudflare,
  IconBrandVercel,
  IconBrandAstro,
  IconBrandGithub,
  IconBrandNuxt,
  IconCloud,
  IconRocket,
  IconPigMoney,
  IconGlobe
} from '@tabler/icons-react'
import styles from './Card.module.css'

// 👇 核心：建立字符串到真实图标的映射表
const iconMap: Record<string, React.ElementType> = {
  cloudflare: IconBrandCloudflare,
  vercel: IconBrandVercel,
  astro: IconBrandAstro,
  github: IconBrandGithub,
  nuxt: IconBrandNuxt,
  cloud: IconCloud,       // 用于 Netlify
  rocket: IconRocket,     // 用于 Spaceship
  pigmoney: IconPigMoney, // 用于 Porkbun
  globe: IconGlobe,       // 用于 Dynadot
  default: IconLink
}

type CardProps = {
  title: string
  href: string
  iconName?: string // 👈 改为接收字符串，而不是组件
  children?: React.ReactNode
}

export function Card({ title, href, iconName = 'default', children }: CardProps) {
  // 👇 根据字符串安全地获取图标组件，找不到则使用 default (IconLink)
  const Icon = iconMap[iconName.toLowerCase()] || iconMap.default
  
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        {/* 图标容器 */}
        <div className={styles.iconBox}>
          <Icon style={{ height: '1.5rem', width: '1.5rem' }} />
        </div>
        
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* 标题 */}
            <span className={styles.title}>{title}</span>
            {/* 箭头 */}
            <IconArrowUpRight className={styles.arrow} />
          </div>
          {/* 描述文字 */}
          <div className={styles.desc}>{children}</div>
        </div>
      </div>
    </a>
  )
}

export function CardGroup({ children }: { children: React.ReactNode }) {
  return <div className={styles.grid}>{children}</div>
}