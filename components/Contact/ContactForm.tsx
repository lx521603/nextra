'use client'

import { useState } from 'react'
import {
  Button,
  Group,
  Notification,
  Text,
  Textarea,
  TextInput,
  Title,
  Box,
} from '@mantine/core'
import { hasLength, isEmail, useForm } from '@mantine/form'

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<'success' | 'error' | null>(null)

  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: hasLength({ min: 2 }, '姓名至少需要 2 个字符'),
      email: isEmail('请输入有效的邮箱地址'),
      subject: hasLength({ min: 2 }, '主题至少需要 2 个字符'),
      message: hasLength({ min: 5 }, '留言内容至少需要 5 个字符'),
    },
  })

  const handleSubmit = async (values: FormValues) => {
    setSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/mwlvjqlo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Box p="xl" w="100%">
      <Title order={2} mb="xs">
        发送留言
      </Title>
      <Text size="sm" c="dimmed" mb="xl">
        如果有任何问题、建议或合作意向，欢迎填写下方表单与我联系。
      </Text>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Group grow>
            <TextInput
              label="姓名"
              placeholder="您的姓名"
              required
              {...form.getInputProps('name')}
              key={form.key('name')}
            />
            <TextInput
              label="邮箱"
              placeholder="your@email.com"
              required
              {...form.getInputProps('email')}
              key={form.key('email')}
            />
          </Group>

          <TextInput
            label="主题"
            placeholder="邮件主题"
            required
            {...form.getInputProps('subject')}
            key={form.key('subject')}
          />

          <Textarea
            label="留言内容"
            placeholder="请详细描述您的需求或意见..."
            required
            minRows={5}
            {...form.getInputProps('message')}
            key={form.key('message')}
          />

          {status === 'success' && (
            <Notification color="green" title="发送成功" onClose={() => setStatus(null)}>
              感谢您的留言！我会尽快回复您。
            </Notification>
          )}

          {status === 'error' && (
            <Notification color="red" title="发送失败" onClose={() => setStatus(null)}>
              提交过程中出了点问题，请稍后重试或检查网络状态。
            </Notification>
          )}

          <Group justify="flex-end" mt="md">
            <Button type="submit" loading={submitting} radius="md">
              发送邮件
            </Button>
          </Group>
        </Box>
      </form>
    </Box>
  )
}