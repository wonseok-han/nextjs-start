/** @type {import('next').NextConfig} */

const API_KEY = `api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
const API_HOST = process.env.NEXT_PUBLIC_APP_API_HOST;
const IMAGE_API_HOST = process.env.NEXT_PUBLIC_APP_IMAGE_API_HOST;

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${API_HOST}movie/popular/?${API_KEY}`,
      },
      {
        source: "/api/movies/posters/:path*",
        destination: `${IMAGE_API_HOST}/:path*?${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
