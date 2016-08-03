module.exports = {
  output: {
    library: 'parsePrice',
    libraryTarget: 'umd',
    path: './dist',
    filename: 'parse-price.js'
  },
  entry: {
    library: './src/index.js'
  }
}
