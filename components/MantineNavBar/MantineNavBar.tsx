'use client';

import { Navbar } from 'nextra-theme-docs';
import { DiscordIcon } from 'nextra/icons';
import { Group, Text } from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons-react';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import AsuraLogo from '@/components/AsuraLogo';
import { MantineNextraThemeObserver } from '../MantineNextraThemeObserver/MantineNextraThemeObserver';

/**
 * Custom Nextra NavBar component.
 * @since 1.0.0
 */
export const MantineNavBar = () => {
  return (
    <>
      <MantineNextraThemeObserver />
      <Navbar
        logo={
          <Group align="center" gap={8} wrap="nowrap">
            <AsuraLogo />
            <Text size="xl" fw={800} ff="heading" visibleFrom="2xl">
              <Text span inherit c="blue" ml={4}>
                Studio
              </Text>
            </Text>
          </Group>
        }
        // 社区 Discord 链接
        chatLink="https://go.91.pt/discord"
        chatIcon={<DiscordIcon width="24" aria-label="Mantine Discord server" />}

        // 社交/项目链接：Instagram
        projectLink="https://go.91.pt/instagram"
        projectIcon={<IconBrandInstagram size={24} aria-label="Instagram profile" />}
      >
        <ColorSchemeControl />
      </Navbar>
    </>
  );
};
