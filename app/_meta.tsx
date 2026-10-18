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
  community: {
    title: '社区',
    type: 'menu',
    items: {
      blog: {
        title: 'Blog',
        href: 'https://undolog.com/',
      },
      medium: {
        title: 'Medium',
        href: 'https://medium.com/@giovambattista.fazioli',
      },
    },
  },
  about: {
    type: 'page',
    title: '关于',
    href: 'https://gfazioli.github.io/',
  },
  support: {
    title: '支持',
    type: 'menu',
    items: {
      // Navigates to the home-page Sponsors wall — internal anchor,
      // so Nextra shows no external arrow.
      sponsor: {
        title: (
          <Group component="span" gap={8} wrap="nowrap" align="center">
            <IconHeartFilled size={16} />
            Sponsor
          </Group>
        ),
        href: '/#sponsors',
      },
      // External donation link — Nextra keeps the ↗ external indicator.
      coffee: {
        title: (
          <Group component="span" gap={8} wrap="nowrap" align="center">
            <IconCoffee size={16} />
            Buy me a coffee
          </Group>
        ),
        href: 'https://donate.stripe.com/fZu4gy4Tn3b1dgudGx0co00',
      },
    },
  },
};
