/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
];

const nextConfig = {
  // Keep the public Vet Guide canonical URL format slashless.
  trailingSlash: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return {
      // Local files/routes win first (notably /vet-guide/sitemap.xml),
      // then the remaining Vet Guide paths are proxied to the guide project.
      afterFiles: [
        {
          source: '/vet-guide',
          destination: 'https://furkid-vet-guide.vercel.app/vet-guide',
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
