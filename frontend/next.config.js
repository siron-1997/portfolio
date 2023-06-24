/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: process.env.STRAPI_PROTOCOL,
        hostname: process.env.STRAPI_HOSTNAME,
        port: process.env.STRAPI_PORT,
        pathname: '/uploads/**'
      }
    ]
  },
  env: {
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY
  }
}

module.exports = nextConfig
