import BlogBreadcrumbs, { BreadcrumbItem } from '@/components/BlogBreadcrumbs';
import GridAsymmetrical from '@/components/GridAsymmetrical';
import ContactForm from './ContactForm';
import { Title, Text, Stack, Box } from '@mantine/core';

export default function Contact() {
  const contactBreadcrumbs: BreadcrumbItem[] = [{ title: '主页', href: '/' }, { title: '联系我' }];

  return (
    <Box>
      <BlogBreadcrumbs items={contactBreadcrumbs} />

      <Title order={1} mt="md" mb="xs">
        联系我
      </Title>
      <Text size="md" c="dimmed" mb="xl">
        如果您有任何想法、建议，或者想探讨合作，欢迎给我发送邮件！
      </Text>

      <GridAsymmetrical
        items={[
          {
            desktopWidth: '65%',
            content: <ContactForm />,
          },
          {
            desktopWidth: 'calc(35% - 1.25rem)', // 适配 GridAsymmetrical 的 gap 间距
            // 🌟 核心修改：去掉外层的 <Card>，直接用带内边距和高度撑满的纯净 <Box>
            content: (
              <Box
                p="xl"
                h="100%"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <Stack gap="md">
                  <Title order={3}>关于联系</Title>
                  <Text size="sm" c="dimmed" lh={1.6}>
                    如果有任何前端、后端、或部署相关的问题，或者想探讨技术合作，欢迎随时给我留言。
                  </Text>
                  <Text size="sm" c="dimmed">
                    通常会在 24 小时内回复。
                  </Text>
                </Stack>
              </Box>
            ),
          },
        ]}
      />
    </Box>
  );
}
