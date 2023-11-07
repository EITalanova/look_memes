/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// const withImages = require('next-images')
// module.exports = withImages();

const withImages = require('next-images')
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "svg", "gif"],
  webpack(config, options) {
    return config
  }
})

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//         // for webpack 5 use
//         // { and: [/\.(js|ts)x?$/] }
//       },

//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
// };

module.exports = nextConfig;
