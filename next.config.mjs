/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'vveba.s3.eu-north-1.amazonaws.com',
    pathname: '/**', 
   },
    {
    protocol: 'https',
    hostname: 'lh5.googleusercontent.com',
    pathname: '/**',
   },
   {
    protocol: 'https',
    hostname: 'img.freepik.com',
    pathname: '/**',
   },
  ],
 },
};

export default nextConfig;
