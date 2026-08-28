import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['sl', 'zh', 'en'],
  defaultLocale: 'sl',
  localePrefix: {
    mode: 'as-needed',
  },
  pathnames: {
    '/': '/',
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
  },
});

export type Locale = (typeof routing.locales)[number];
