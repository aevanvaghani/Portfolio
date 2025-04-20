/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only use 'export' for production builds
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  images: {
    unoptimized: true,
  },
  // For GitHub Pages - only apply in production
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
  }),
}

module.exports = nextConfig