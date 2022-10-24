const fse = require('fs-extra')

fse
  .mkdirp('./dist')
  .then(() => console.log('🌳 dist folder successfully created!'))
  .catch(error => console.error(error))

fse
  .copy('./doctorfree.css', './dist/doctorfree.css')
  .then(() => console.log('🌳 CSS file initialized successfully!'))
  .catch(error => console.error(error))
