import bundleAnalyzer from '@next/bundle-analyzer';
import nextra from 'nextra';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/docs',
})

export default withNextra(
  withBundleAnalyzer({
    output: 'standalone',
    reactStrictMode: false,
    cleanDistDir: true,
    agentRules: false, 
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'gallery.zaeth.com',
        },
      ],
      dangerouslyAllowLocalIP: true,
    },
    
    allowedDevOrigins: ['192.168.8.102'],
    
    async rewrites() {
      return [
        {
          source: '/blog',
          destination: '/docs/blog',
        },
        {
          source: '/blog/:path*',
          destination: '/docs/blog/:path*',
        },
      ]
    },

    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
    turbopack: {
      rules: {
        '*.svg': {
          loaders: ['turbopack-inline-svg-loader'],
          condition: {
            content: /^[\s\S]{0,4000}$/, 
          },
          as: '*.js',
        },
      },
    },
  })
);