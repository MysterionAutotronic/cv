/* eslint-env node */
const withNextTranslate = require('next-translate-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },

  webpack: (config) => {
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
    if (oneOfRule && Array.isArray(oneOfRule.oneOf)) {
      const tsRules = oneOfRule.oneOf.filter(
        (rule) => rule.test && rule.test.toString().includes('tsx|ts')
      );
      tsRules.forEach((rule) => {
        rule.include = undefined;
      });
    }
    return config;
  },

  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
  },
};

module.exports = withNextTranslate(nextConfig);
