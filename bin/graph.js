const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const DEFAULT_STRUCT = {
  date: '',
  location: '',
  type: '', // prod - tour - local
  spc: [],
}

const staticPath = path.join(__dirname, '..', '/static')
const artistsPath = path.join(staticPath, '/artists')
const graph = {}

function processFolder(folder) {
  const metaFilePath = path.join(artistsPath, '/', folder, '/meta.yml')

  try {
    const metaFileStream = fs.readFileSync(metaFilePath, 'utf8')
    const doc = yaml.safeLoad(metaFileStream);
    graph[folder] = Object.assign({}, DEFAULT_STRUCT, doc)
  } catch (e) {
    if(e.code === 'ENOENT') return console.log(`Folder "${folder}" has no valid "meta.yml"!`, '\n')
    console.log(e)
  }
}



fs.readdir(artistsPath, (err, folders) => {
  if (err) return console.log('Unable to scan directory: ' + err)

  folders.forEach(processFolder)

  fs.writeFile(`${staticPath}/graph.json`, JSON.stringify(graph), function (err) {
    if (err) return console.log(err)
    console.log("Graph file generated!");
  });
})


