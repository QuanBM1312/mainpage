/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure images for external sources
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.builder.io',
        port: '',
        pathname: '/**',
      },
    ],
    // Optionally configure image formats
    formats: ['image/avif', 'image/webp'],
  },
  // Enable React Strict Mode
  reactStrictMode: true,
}

module.exports = nextConfig
