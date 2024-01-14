const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminPngquant = require('imagemin-pngquant');

module.exports = function override(config, env) {
  // Add ImageminPlugin for image compression
  config.plugins.push(
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8], // Adjust the quality as needed
          speed: 4, // Adjust the speed as needed
        }),
      ],
    })
  );

  return config;
};
