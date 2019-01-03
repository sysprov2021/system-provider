const fs = require('fs').promises
const yaml = require('js-yaml')

const DEFAULT_STRUCT = {
  date: '',
  location: '',
  type: '', // prod - tour - local
  spc: [],
}

async function processMetaFile(metaFilePath) {
  let data
  try {
    const metaFileStream = await fs.readFile(metaFilePath, 'utf8')
    const doc = yaml.safeLoad(metaFileStream);
    data = Object.assign({}, DEFAULT_STRUCT, doc)
  } catch (err) {
    if (err.code === 'ENOENT')
      return console.log(`Folder "${folder}" has no valid "meta.yml"!`, '\n')
    console.error(err)
  }
  return data
}

module.exports = {
  processMetaFile
}
