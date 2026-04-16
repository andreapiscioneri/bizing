import type { Metadata, Viewport } from 'next';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://bizing.app';

// ─── SEO + GEO Metadata ──────────────────────────────────────────────────────

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1565FF',
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: 'Bizing',
  title: {
    default: 'Bizing – Business Attitude',
    template: '%s | Bizing',
  },
  description:
    'Bizing is the all-in-one business identity platform. Manage metal business cards, digital eCards, contacts and team analytics in one place.',
  keywords: [
    'Bizing',
    'business card',
    'metal card',
    'digital business card',
    'eCard',
    'NFC card',
    'networking',
    'business identity',
    'contact management',
    'professional card',
  ],
  authors: [{ name: 'Bizing', url: BASE_URL }],
  creator: 'Bizing',
  publisher: 'Bizing',
  category: 'Business & Productivity',
  referrer: 'origin-when-cross-origin',

  // ─── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ─── Canonical ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'it-IT': '/it-IT',
    },
  },

  // ─── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['it_IT'],
    url: BASE_URL,
    siteName: 'Bizing',
    title: 'Bizing – Business Attitude',
    description:
      'The smart platform to create and manage metal business cards, digital eCards and professional contacts. Elevate your business identity with Bizing.',
    images: [
      {
        url: '/images/logo-horizontal.png',
        width: 1200,
        height: 630,
        alt: 'Bizing – Business Attitude',
        type: 'image/png',
      },
    ],
  },

  // ─── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Bizing – Business Attitude',
    description:
      'Create and manage metal business cards, digital eCards and contacts. The all-in-one professional identity platform.',
    images: ['/images/logo-horizontal.png'],
    creator: '@bizing',
    site: '@bizing',
  },

  // ─── Icons / Favicon ───────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/images/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon.png', type: 'image/png' },
    ],
    shortcut: '/images/favicon.png',
  },

  // ─── GEO – Generative Engine Optimization ─────────────────────────────────
  // AI crawlers and LLM engines read these fields to understand the product.
  other: {
    // Explicit product classification for LLMs (ChatGPT, Perplexity, Gemini…)
    'product-name': 'Bizing',
    'product-category': 'Business Identity Platform',
    'product-features':
      'Metal business cards, Digital eCards, NFC cards, Contact management, Team analytics, Brand customization',
    'target-audience': 'Professionals, Entrepreneurs, Sales teams, Executives',
    'company-name': 'Bizing',
    'company-description':
      'Bizing provides physical and digital business identity solutions, enabling professionals to share contacts via NFC metal cards and branded digital eCards.',
    // Schema hint for AI agents
    'ai-summary':
      'Bizing is a SaaS platform that combines physical metal NFC business cards with a digital dashboard for managing eCards, contacts and analytics. Users can customise card designs, upload brand logos and share contact information seamlessly.',
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bizing',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo-horizontal.png`,
  description:
    'Bizing is the all-in-one business identity platform for metal NFC cards, digital eCards and contact management.',
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Bizing',
  url: BASE_URL,
  description: 'Business Attitude – manage your professional identity with Bizing.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/dashboard?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Bizing',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  description:
    'All-in-one dashboard to design metal business cards, create and share digital eCards, manage contacts and track analytics.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Free tier available. Paid plans from €9.99/month.',
  },
};

// ─── Root Layout ─────────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: '"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif' }}>
        {/* JSON-LD structured data for SEO + GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema).replace(/</g, '\\u003c'),
          }}
        />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
