import Image from 'next/image'

export default function ThemeImage({ 
  light, 
  dark, 
  alt, 
  width = 800, 
  height = 600, 
  style,      // 👈 新增 style 支持
  className 
}: { 
  light: string; 
  dark: string; 
  alt: string; 
  width?: number;
  height?: number;
  style?: React.CSSProperties; // 👈 新增类型
  className?: string;
}) {
  if (light === dark) {
    return (
      <Image 
        src={light} 
        alt={alt} 
        width={width} 
        height={height} 
        style={style} 
        className={className} 
      />
    )
  }

  return (
    <>
      <Image 
        src={light} 
        alt={alt} 
        width={width} 
        height={height} 
        style={style} 
        className={`${className || ''} block dark:hidden`} 
      />
      <Image 
        src={dark} 
        alt={alt} 
        width={width} 
        height={height} 
        style={style} 
        className={`${className || ''} hidden dark:block`} 
      />
    </>
  )
}