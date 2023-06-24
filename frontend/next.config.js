/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'junpei-oue-strapi-2g4m9.ondigitalocean.app',
      '127.0.0.1'
    ],
  },
  env: {
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL
  }
}

module.exports = nextConfig
