const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  workboxOptions: {
    disableDevLogs: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
}

module.exports = withPWA(nextConfig)