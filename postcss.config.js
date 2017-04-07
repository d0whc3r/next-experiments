module.exports = {
  plugins: [
    require('postcss-easy-import')({ prefix: '_' }), // keep this first
    require('autoprefixer')({ browsers: '> 1%' }) // so imports are auto-prefixed too
  ]
};
