/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // The pricing post was folded into the prices page. `statusCode`
        // rather than `permanent: true`, which would send a 308.
        source: "/blog/tattoo-price-in-kolkata",
        destination: "/tattoo-prices-kolkata",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
