import path from 'path'

module.exports = {
  build: {
    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name == 'style.css') {
            return 'doctorfree.css'
          } else {
            return '[name].[ext]'
          }
        }
      }
    },
    lib: {
      entry: path.resolve(__dirname, 'theme/doctorfree.scss'),
      filename: 'doctorfree',
      name: 'Doctorfree'
    }
  }
}
