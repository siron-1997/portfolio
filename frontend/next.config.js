/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // domains: [
    //   'stingray-app-ofyua.ondigitalocean.app',
    //   '127.0.0.1'
    // ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      }
    ]
  },
  env: {
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  }
}

module.exports = nextConfig
