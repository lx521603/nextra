import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Content } from '@/components/Content/Content';

import LiLanding from '@/components/LiLanding'
import EntryCard from '@/components/EntryCard'


export default function HomePage() {
  return (
    <Container component="main" mih="calc(100vh - 328px)">
      <LiLanding />
      <EntryCard />
    </Container>
  );
}
