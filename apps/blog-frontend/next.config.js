//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {withNx} = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  images: {
    domains: ['picsum.photos']
  },
  env: {
    BLOG_API_URL: process.env.BLOG_API_URL
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  nx: {
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
