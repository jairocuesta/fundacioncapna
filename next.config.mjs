/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [{
            protocol: 'https',
            hostname: 'capcana.agencia7am.com'
        }]
    }
};

export default nextConfig;
