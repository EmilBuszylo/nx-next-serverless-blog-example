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
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
    images: {
      domains: ['picsum.photos']
    },
  },
};

module.exports = withNx(nextConfig);
