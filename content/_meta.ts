export default {
  index: 'Introduction',
  '##': {
    type: 'separator',
  },
  markdown: '',
  'inline-svg': 'Inline SVG',
  mantine: '',
  api: '',

  '###': {
    type: 'separator',
    // title: 'My Items', // Title is optional
  },
  versioning: {
    theme: {
      toc: false,
    },
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
};
