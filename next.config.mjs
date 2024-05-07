import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "jjsxonvnqwdwhjqmqihm.supabase.co" }],
  },
};

export default nextConfig;
