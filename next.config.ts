/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export statique
  distDir: 'out',
  images: {
    unoptimized: true // Nécessaire pour export statique
  }
}

module.exports = nextConfig