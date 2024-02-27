/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [{
            protocol: 'https',
            hostname: 'capcana.agencia7am.com'
        }]
    }
};

export default nextConfig;
