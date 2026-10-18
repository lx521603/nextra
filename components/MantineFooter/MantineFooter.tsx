'use client';

import {
  Anchor,
  Container,
  Divider,
  Group,
  Text,
} from '@mantine/core';
import {
  IconBrandMantine,
  IconBrandVercel,
} from '@tabler/icons-react';
import packageJson from '../../package.json';
import classes from './MantineFooter.module.css';

export const MantineFooter = () => {
  return (
    <div className={classes.contentFooter}>
      <Container className={classes.footer} size="lg">
        <Group justify="flex-end">
          <Group justify="right">
            <Text fz={12} inline>
              Made with ❤️ by{' '}
              <Anchor fz={13} href="https://gfazioli.github.io/">
                Undolog
              </Anchor>
            </Text>
            <Divider orientation="vertical" />
            <Text fz={12} inline>
              <Group gap={4} component="span">
                Hosted on{' '}
                <Anchor fz={13} href="https://vercel.com/">
                  <Group gap={4} component="span">
                    <IconBrandVercel size={16} /> Vercel.com
                  </Group>
                </Anchor>
              </Group>
            </Text>
            <Divider orientation="vertical" />
            <Text fz={12} inline>
              <Group gap={4} component="span" justify="flex-start">
                Built with{' '}
                <Anchor fz={13} href="https://mantine.dev/">
                  <Group gap={4} component="span">
                    <IconBrandMantine size={16} /> Mantine v
                    {packageJson.dependencies['@mantine/core']}
                  </Group>
                </Anchor>
              </Group>
            </Text>
          </Group>
        </Group>
      </Container>
    </div>
  );
};