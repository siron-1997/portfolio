/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**'
      }
    ]
  },
  env: {
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY
  }
}

module.exports = nextConfig
