import { IconMoon, IconSun, IconDeviceDesktop } from '@tabler/icons-react';
import cx from 'clsx';
import { useTheme } from 'nextra-theme-docs';
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { HeaderControl } from './HeaderControl';
import classes from './ColorSchemeControl.module.css';

export function ColorSchemeControl() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const { setTheme } = useTheme();

  // 计算当前实际生效的颜色（处理完 auto 后的真实视觉状态：'light' 或 'dark'）
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const handleColorSchemeChange = () => {
    // 切换逻辑：light -> dark -> auto -> light
    // 我们用 Mantine 当前的原始设置（colorScheme）来判断下一个状态
    let nextScheme: 'light' | 'dark' | 'auto';
    let nextNextraTheme: 'light' | 'dark' | 'system';

    if (colorScheme === 'light') {
      nextScheme = 'dark';
      nextNextraTheme = 'dark';
    } else if (colorScheme === 'dark') {
      nextScheme = 'auto';
      nextNextraTheme = 'system';
    } else {
      nextScheme = 'light';
      nextNextraTheme = 'light';
    }

    setColorScheme(nextScheme);
    setTheme(nextNextraTheme);
  };

  // 根据当前的原始设置决定悬停提示和显示的图标
  const getTooltipText = () => {
    if (colorScheme === 'light') return '切换到暗黑模式';
    if (colorScheme === 'dark') return '切换到明亮模式';
    return 'Switch to Light mode';
  };

  return (
    <HeaderControl
      onClick={handleColorSchemeChange}
      tooltip={getTooltipText()}
      aria-label="Toggle color scheme"
    >
      {/* 
        如果处于 auto 状态，可以展示一个系统图标或默认根据计算值展示，
        这里保留你的 IconSun 和 IconMoon，它们通常通过 CSS 模块配合 Mantine 的 dark/light class 来自动显隐
      */}
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </HeaderControl>
  );
}