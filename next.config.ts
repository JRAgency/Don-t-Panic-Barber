import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Don-t-Panic-Barber',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
