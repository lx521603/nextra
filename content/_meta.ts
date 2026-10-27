export default {
  '##': {
    type: 'separator',
  },
  '*': {
    theme: {
      layout: 'default',
    },
  },
  markdown: '',
  'inline-svg': 'Inline SVG',
  mantine: '',


  '###': {
    type: 'separator',
    // title: 'My Items', // Title is optional
  },

  'release-notes': '',
  test: {
    display: 'hidden',
    theme: {
      layout: 'full',
      navbar: true,      // 隐藏顶部导航
      sidebar: false,     // 隐藏左侧边栏
      toc: false,         // 隐藏右侧目录
      pagination: false,  // 隐藏上一篇/下一篇导航
      breadcrumb: false,  // 隐藏面包屑
      footer: true,      // 隐藏底部 footer（如果支持）
    }
  },
  'index': '简介',
  '1.getting-started': '快速开始',

  '3.online': '科学上网',
  '4.note': '折腾笔记',
   blog: {
     display: 'hidden',
     theme: {
       layout: 'default',
       navbar: true,      // 隐藏顶部导航
       sidebar: false,     // 隐藏左侧边栏
      
       toc: false,         // 隐藏右侧目录
       pagination: false,  // 隐藏上一篇/下一篇导航
       breadcrumb: false,  // 隐藏面包屑
       footer: true,      // 隐藏底部 footer（如果支持）
     }
   },
   contact: {
    display: 'hidden',
    theme: {
      layout: 'full',
      navbar: true,      // 隐藏顶部导航
      sidebar: false,     // 隐藏左侧边栏
      toc: false,         // 隐藏右侧目录
      pagination: false,  // 隐藏上一篇/下一篇导航
      breadcrumb: false,  // 隐藏面包屑
      footer: true,      // 隐藏底部 footer（如果支持）
    }
  },
     
};
