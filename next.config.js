/** @type {import('next').NextConfig} */
const nextConfig = {
  // Netlify specific settings
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig 