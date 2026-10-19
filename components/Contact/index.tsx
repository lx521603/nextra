import GridAsymmetrical from '@/components/GridAsymmetrical'
import ContactForm from './ContactForm'
import { Title, Text, Stack } from '@mantine/core'

export default function Contact() {
  return (
    <GridAsymmetrical
      items={[
        {
          desktopWidth: '55%',
          content: <ContactForm />,
        },
        {
          desktopWidth: '40%',
          content: (
            <Stack p="xl" justify="center" h="100%">
              <Title order={3}>关于联系</Title>
              <Text size="sm" c="dimmed" lh={1.6}>
                如果有任何前端、后端、或部署相关的问题，或者想探讨技术合作，欢迎随时给我留言。
              </Text>
              <Text size="sm" c="dimmed">
                通常会在 24 小时内回复。
              </Text>
            </Stack>
          ),
        },
      ]}
    />
  )
}