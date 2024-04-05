// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  /* config options here */
};

export default {
  ...nextConfig,
  ...withVideos(),
};
