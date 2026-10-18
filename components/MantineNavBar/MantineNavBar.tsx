'use client';

import { Navbar } from 'nextra-theme-docs';
import { DiscordIcon } from 'nextra/icons';
import { Group, Text } from '@mantine/core';
import { IconCoffee, IconHeartFilled } from '@tabler/icons-react';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import { HeaderControl } from '../ColorSchemeControl/HeaderControl';
import AsuraLogo from '@/components/AsuraLogo' // 👈 确保这行存在且路径正确
import { MantineNextraThemeObserver } from '../MantineNextraThemeObserver/MantineNextraThemeObserver';

/**
 * You can customize the Nextra NavBar component.
 * Don't forget to use the MantineProvider and MantineNextraThemeObserver components.
 *
 * @since 1.0.0
 *
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
              {' '}
              <Text span inherit c="blue">
                Studio
              </Text>
            </Text>
          </Group>
        }
        // Mantine discord server
        chatLink="https://go.91.pt/discord"
        chatIcon={<DiscordIcon width="24" aria-label="Mantine Discord server" />}
        projectLink="https://github.com"
      >
       
      </Navbar>
    </>
  );
};