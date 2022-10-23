import path from 'path'

module.exports = {
  build: {
    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name == 'style.css') {
            return 'obsidian.css'
          } else {
            return '[name].[ext]'
          }
        }
      }
    },
    lib: {
      entry: path.resolve(__dirname, 'theme/obsidian.scss'),
      filename: 'doctorfree',
      name: 'Doctorfree'
    }
  }
}
