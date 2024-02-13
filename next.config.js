/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "devwp.smarthost.pl",
        // port: "",
        // pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
