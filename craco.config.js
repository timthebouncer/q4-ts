const path = require(`path`);
autoprefixer = require('autoprefixer')
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./",
        tsConfigPath: "./tsconfig.paths.json"
      }
    }
  ],
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  // webpack: {
  //     alias: {
  //       '@': path.resolve(__dirname, './src/')
  //     }
  // }
}
