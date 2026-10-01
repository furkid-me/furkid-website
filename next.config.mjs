/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/vet-guide',
          destination: 'https://furkid-vet-guide.vercel.app/vet-guide/',
        },
        {
          source: '/vet-guide/:path*',
          destination: 'https://furkid-vet-guide.vercel.app/vet-guide/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
