/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "attackontitan.fandom.com",
      },
      {
        protocol: "https",
        hostname: "static1.cbrimages.com",
      },
      {
        protocol: "https",
        hostname: "www.drawing123.com",
      },
      {
        protocol: "https",
        hostname: "wallpapercave.com",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.themobileindian.com",
      },
      {
        protocol: "https",
        hostname: "www.technocratng.com",
      },
    ],
  },
};

export default nextConfig;
