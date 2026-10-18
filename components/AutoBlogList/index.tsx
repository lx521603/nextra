import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import AutoBlogListClient from './AutoBlogListClient'

export default async function AutoBlogList() {
  const dir = path.join(process.cwd(), 'content/blog')
  
  if (!fs.existsSync(dir)) {
    return <p style={{padding: '2rem', textAlign: 'center', color: '#6b7280'}}>暂无内容</p>
  }

  const allFiles = fs.readdirSync(dir)
  const files = allFiles.filter(f => (f.endsWith('.md') || f.endsWith('.mdx')) && f !== 'index.mdx' && f !== 'index.md')
  
  const posts = files.map(file => {
    const filePath = path.join(dir, file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    const slug = file.replace(/\.(md|mdx)$/, '')
    
    return {
      slug,
      title: data.title || '无标题',
      description: data.description || '无描述',
      image: data.cover || (data.image ? data.image.src : '') || '',
      date: data.date ? new Date(data.date) : new Date(),
      badge: data.badge?.label || '',
    }
  }).sort((a, b) => b.date.getTime() - a.date.getTime())

  // 👇 将读取到的数据传递给客户端组件，由它来处理分页和 URL 响应
  return <AutoBlogListClient posts={posts} />
}