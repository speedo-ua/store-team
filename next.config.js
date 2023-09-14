/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      }
    )
    return config
  },
  
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.svg$/i,
  //       issuer: /\.[jt]sx?$/,
  //       use: ['@svgr/webpack'],
  //     },
  //   ],
  // },
 
  // images: {
  //   dangerouslyAllowSVG: true,
  //   contentDispositionType: 'attachment',
  //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  // },
}