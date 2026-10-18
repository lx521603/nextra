'use client' // 👈 必须放在文件第一行，声明这是客户端组件

type PictureProps = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function Picture({ src, alt, width = 500, height = 1800, className = '' }: PictureProps) {
  return (
    <div className={`nx-rounded-lg nx-overflow-hidden nx-shadow-sm hover:nx-shadow-lg nx-transition-all nx-duration-300 nx-bg-gray-100 dark:nx-bg-gray-800 ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="nx-w-full nx-h-auto nx-object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          if (target.parentElement) {
            target.parentElement.innerHTML = `<div class="nx-flex nx-items-center nx-justify-center nx-h-64 nx-text-gray-400">图片加载失败</div>`;
          }
        }}
      />
    </div>
  )
}

type PicturesProps = {
  children: React.ReactNode
  className?: string
}

export function Pictures({ children, className = '' }: PicturesProps) {
  return (
    <div className={`nx-grid nx-grid-cols-1 sm:nx-grid-cols-2 nx-gap-6 nx-my-8 ${className}`}>
      {children}
    </div>
  )
}