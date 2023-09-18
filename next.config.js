/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: [
            'i.pinimg.com',
            'i.ibb.co'
        ]
    }
};
module.exports = nextConfig;