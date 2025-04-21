/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only use 'export' for non-Vercel environments
  ...(process.env.VERCEL ? {} : { output: 'export' }),
  images: {
    unoptimized: true,
  },
  // For GitHub Pages - only apply in production and not on Vercel
  ...(!process.env.VERCEL && process.env.NODE_ENV === 'production' && {
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
  }),
}

module.exports = nextConfig