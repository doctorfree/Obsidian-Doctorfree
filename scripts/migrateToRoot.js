const fse = require('fs-extra')

fse
  .copy('./dist/doctorfree.css', './theme.css')
  .then(() => console.log('🌳 CSS build file copied successfully to root!'))
  .catch(error => console.error(error))
