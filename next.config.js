/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Keep any other settings you already had here (e.g. reactStrictMode, redirects, etc.)
  // — this file only adds the `images` block needed to fix the next/image error.
};

module.exports = nextConfig;