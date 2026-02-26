import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Разрешает любой домен
      },
      {
        protocol: 'http',
        hostname: '**', // Разрешает любой домен по http
      },
    ],
  },
};

export default nextConfig;