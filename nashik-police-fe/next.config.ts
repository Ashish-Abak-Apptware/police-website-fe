import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: isProd ? '/police-website-fe' : '',
    assetPrefix: isProd ? '/police-website-fe/' : '',
};

export default nextConfig;
