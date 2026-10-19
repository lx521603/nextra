import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../../mdx-components'
import BlogHeader from '@/components/BlogHeader'
import { Suspense } from 'react'
export const generateStaticParams = generateStaticParamsFor('mdxPath')
export const revalidate = false

export async function generateMetadata(props: any) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath || [])
  return metadata
}

export default async function Page(props: any) {
  const params = await props.params
  const mdxPathArray = params.mdxPath || []
  
  try {
    const result = await importPage(mdxPathArray)
    const { default: MDXContent, toc, metadata } = result

    const pathString = mdxPathArray.join('/')
    const isBlogPage = pathString.includes('blog')
    const isBlogIndex = pathString === 'blog' || pathString === 'blog/index' || mdxPathArray.length === 0
   
    // 你想要的全局宽度（列表页和文章页都可以自由调大，比如 1360px 或 1400px）
    const targetMaxWidth = isBlogIndex ? '1300px' : '1200px' // 如果文章页也想很宽，可以把后面也改大

    if (isBlogPage) {
      return (
        <div className="w-full py-8">
          <div 
            style={{
              maxWidth: targetMaxWidth,
              width: '100%',
              margin: '0 auto',
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              boxSizing: 'border-box'
            }}
          >
            {/* Header 区域：用一个子容器包裹并控制对齐，防止文字乱跑 */}
            <div style={{ width: '100%', maxWidth: isBlogIndex ? '100%' : '1300px', margin: isBlogIndex ? '0' : '0 auto' }}>
              
              <BlogHeader 
                 title={metadata?.title ?? undefined}
                 description={metadata?.description ?? undefined}
                 date={(metadata as any)?.date}
                 badge={(metadata as any)?.badge}
                 authors={((Array.isArray(metadata?.authors) ? metadata.authors : metadata?.authors ? [metadata.authors] : undefined)) as any}
              />
              
              {/* 正文区域 */}
              <Suspense fallback={<div className="nx-py-8 nx-text-center">加载中...</div>}>
                <article 
                  className="nx-prose dark:nx-prose-invert w-full max-w-none"
                  style={{
                    maxWidth: isBlogIndex ? '100%' : '1200px',
                    margin: isBlogIndex ? '0' : '0 auto'
                  }}
                >
                  <MDXContent {...props} params={params} />
                </article>
              </Suspense>
          </div>{/* <--- 补上了对应最内层 div 的闭合 */}
         </div>{/* <--- 对应中间层 div 的闭合 */}
       </div> // <--- 对应最外层 div 的闭合
     )
  }

    // 非 Blog 页面，保持 Nextra 默认行为
    const components = useMDXComponents()
    const Wrapper = components.wrapper || (({ children }: any) => <>{children}</>)
    const customToc = [...(toc || []), ...((metadata as any)?.toc || [])]

    return (
      <Wrapper toc={customToc} metadata={metadata}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    )

  } catch (error) {
    console.error('Page load error:', error)
    return <div className="nx-p-8 nx-text-center">页面加载失败</div>
  }
}