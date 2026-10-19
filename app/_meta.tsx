import { Group } from '@mantine/core';
import { IconCoffee, IconHeartFilled } from '@tabler/icons-react';

export default {
  index: {
    display: 'hidden',
  },
  docs: {
    type: 'page',
    title: '文档',
  },
  blog: {
    type: 'page',
    title: 'Blog',
    href: '/blog',
  },
  community: {
    title: '社区',
    type: 'menu',
    items: {
      blog: {
        title: 'Blog',
        href: '/blog',
      },
      medium: {
        title: 'Zaeth',
        href: 'https://zaeth.com',
      },
      contact: {
        title: '联系我',
        href: '/contact',
      },
    },
  },
 // about: {
 //   type: 'page',
  //  title: '关于',
  //  href: 'https://zaeth.com',
 // },
 // support: {
  //  title: '支持',
  //  type: 'menu',
  //  items: {
      // Navigates to the home-page Sponsors wall — internal anchor,
      // so Nextra shows no external arrow.
  //    sponsor: {
   //     title: (
   //       <Group component="span" gap={8} wrap="nowrap" align="center">
  //          <IconHeartFilled size={16} />
  //          文档
  //        </Group>
  //      ),
  //      href: '/docs',
  //    },
      // External donation link — Nextra keeps the ↗ external indicator.
    //  coffee: {
   //     title: (
   //       <Group component="span" gap={8} wrap="nowrap" align="center">
   //         <IconCoffee size={16} />
   //         x
  //        </Group>
  //      ),
  //      href: 'https://x.com',
   //   },
  //  },
 // },
};
