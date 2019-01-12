const fs = require('fs').promises
const yaml = require('js-yaml')

async function processYamlFile(filePath, defaultStruct = {}) {
  let data
  try {
    const fileStream = await fs.readFile(filePath, 'utf8')
    const doc = yaml.safeLoad(fileStream);
    data = Object.assign({}, defaultStruct, doc)
  } catch (err) {
    if (err.code === 'ENOENT')
      return console.log(`${filePath} is no valid file!`, '\n')
    console.error(err)
  }
  return data
}

module.exports = {
  processYamlFile
}
