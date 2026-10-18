'use client';

import { TextAnimate } from '@gfazioli/mantine-text-animate';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Anchor, Button, Center, Code, Paper, Text, Title } from '@mantine/core';
import pack from '../../content/welcome.json';

import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Center my={20}>
        
      </Center>
      <Title maw="90w" mx="auto" className={classes.title} ta="center" fz={64}>
        薇薇的美妆站
        <TextAnimate
          animate="in"
          by="character"
          inherit
          variant="gradient"
          component="span"
          segmentDelay={0.2}
          duration={2}
          animation="scale"
          animateProps={{
            scaleAmount: 3,
          }}
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          Dopi
        </TextAnimate>
         不脱妆粉底液
      </Title>

      <Text c="dimmed" ta="center" size="xl" maw={580} mx="auto" mt="sm">
        你身边, 懂你的美妆专家{' '}
        <Anchor href="https://mantine.dev/guides/next/">联系我</Anchor> 获取{' '}
        <Code fz="xl">专属</Code> 优惠
      </Text>

      <Center>
        <Button
          href="https://mirai.st"
          component="a"
          rightSection={<IconExternalLink />}
          leftSection={<IconBrandGithub />}
          variant="outline"
          px={32}
          radius={256}
          size="lg"
          mx="auto"
          mt="xl"
        >
          获取联系方式
        </Button>
      </Center>

      
    </>
  );
}
