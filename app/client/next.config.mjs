import createNextIntlPlugin from "next-intl/plugin";

const remoteUrl = new URL(
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337",
);

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: remoteUrl.protocol.replace(":", ""),
        hostname: remoteUrl.hostname,
        port: remoteUrl.port,
      },
    ],
  },
};

export default withNextIntl(nextConfig);
