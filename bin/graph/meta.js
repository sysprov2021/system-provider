const fs = require('fs')
const yaml = require('js-yaml')

const DEFAULT_STRUCT = {
  date: '',
  location: '',
  type: '', // prod - tour - local
  spc: [],
}


function processMetaFile(metaFilePath) {
  let data
  try {
    const metaFileStream = fs.readFileSync(metaFilePath, 'utf8')
    const doc = yaml.safeLoad(metaFileStream);
    data = Object.assign({}, DEFAULT_STRUCT, doc)
  } catch (e) {
    if (e.code === 'ENOENT') return console.log(`Folder "${folder}" has no valid "meta.yml"!`, '\n')
    console.log(e)
  }
  return data
}

module.exports = {
  processMetaFile
}
