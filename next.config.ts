import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  output: 'standalone' as const,
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
    ],
    unoptimized: true,
  },
  /**
   * Canonical host consolidation: `www.presernovtrg.com` and `presernovtrg.com`
   * were both being crawled and ranked, which splits signals between two
   * duplicates. Whenever both hosts point at this deployment, every www URL is
   * answered with a permanent redirect to the non-www canonical version.
   * (Please also add a Bulk Redirect / Page Rule at the DNS-edge level.)
   */
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host' as const, value: 'www.presernovtrg.com' }],
        destination: 'https://presernovtrg.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
