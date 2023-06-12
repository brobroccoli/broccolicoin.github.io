 /** @type {import('next').NextConfig} */
 const nextConfig = {
   experimental: {
    // Remove the 'images' property or any other invalid experimental options
  },
  // Add the following line to enable static HTML export
  output: 'export',
}

module.exports = nextConfig
