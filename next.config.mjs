/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "http",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
         {
        hostname: "media.istockphoto.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
