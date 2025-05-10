import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirect() {
    return [
      // Redirect www to non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.findluxuryvillas.com" }],
        destination: "https://findluxuryvillas.com/:path*",
        permanent: true,
      },
      // Redirect HTTP to HTTPS
      {
        source: "/:path*",
        has: [{ type: "host", value: "findluxuryvillas.com" }],
        destination: "https://findluxuryvillas.com/:path*",
        permanent: true,
      },
      // Redirect any case variations
      {
        source: "/:path*",
        has: [{ type: "host", value: /findluxuryVillas\.com/i }],
        destination: "https://findluxuryvillas.com/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**", // Allows all paths under images.pexels.com
      },
    ],
  },
};

export default nextConfig;
