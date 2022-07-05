/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "logodownload.org",
      "cdn-icons-png.flaticon.com",
      "avatars.dicebear.com",
    ],
  },
};

module.exports = nextConfig;
