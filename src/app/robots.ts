import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://bizing.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers: allow everything except private dashboard routes
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/dashboard/',
          '/api/',
          '/_next/',
        ],
      },
      // Let AI/LLM crawlers index the marketing/public pages
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Claude-Web',
          'anthropic-ai',
          'Googlebot-Extended',
          'Bingbot',
          'CCBot',
        ],
        allow: ['/'],
        disallow: [
          '/dashboard/',
          '/api/',
          '/_next/',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
