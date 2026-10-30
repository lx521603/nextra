'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Box, Group, Pagination } from '@mantine/core';
import GridAsymmetrical, { GridItemConfig } from '@/components/GridAsymmetrical';

type Post = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string | Date;
  badge: string;
};

export default function AutoBlogListClient({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

  const POSTS_PER_PAGE = 5;
  const safePosts = posts || [];
  const totalPages = Math.ceil(safePosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = safePosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const gridItems: GridItemConfig[] = currentPosts.map((post, index) => {
    // 👈 正确：把判断逻辑放在 map 内部，这样每循环到一个卡片时，index 才是对的
    const isFirstPageHero = currentPage === 1 && index === 0;

    return {
      title: post.title,
      description: post.description,
      imageUrl: post.image || '/placeholder.jpg',
      badge: post.badge,
      date: new Date(post.date).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      href: `/blog/${post.slug}`,

      // 只有第一页的第一张为 100% 宽度，其余全部平分 50%
      desktopWidth: isFirstPageHero ? '100%' : 'calc(50% - 0.625rem)',
      imageHeight: isFirstPageHero ? 380 : 320,

      // 只有第一页的第一张启用横向“左图右文”
      isHorizontal: isFirstPageHero,
    };
  });

  const handlePageChange = (page: number) => {
    if (page === 1) {
      router.push('/blog');
    } else {
      router.push(`/blog?page=${page}`);
    }
  };

  return (
    <Box my="lg">
      <GridAsymmetrical items={gridItems} gap="1.25rem" />

      {totalPages > 1 && (
        <Group justify="center" mt="xl">
          <Pagination
            total={totalPages}
            value={currentPage}
            onChange={handlePageChange}
            siblings={1}
            boundaries={1}
            radius="md"
            withControls
          />
        </Group>
      )}
    </Box>
  );
}
