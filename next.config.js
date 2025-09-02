/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true }, // servimos /public directo, nada de _next/image
  reactStrictMode: true,
};
module.exports = nextConfig;
