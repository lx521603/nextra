'use client'

import { useWindowScroll } from '@mantine/hooks'
import { ActionIcon, Affix, Transition, Tooltip } from '@mantine/core'
import { IconArrowUp } from '@tabler/icons-react'

export default function BackToTop() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Affix position={{ bottom: 32, right: 32 }} zIndex={100}>
      <Transition transition="slide-up" mounted={scroll.y > 250}>
        {(transitionStyles) => (
          <Tooltip label="返回顶部" position="left" withArrow>
            <ActionIcon
              size="xl"
              radius="xl"
              variant="filled"
              color="blue"
              style={{
                ...transitionStyles,
                boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              styles={{
                root: {
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 15px 30px -5px rgba(37, 99, 235, 0.6)',
                  },
                },
              }}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp size={22} stroke={2.5} />
            </ActionIcon>
          </Tooltip>
        )}
      </Transition>
    </Affix>
  )
}