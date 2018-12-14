const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const sharp = require('sharp')

const DEFAULT_STRUCT = {
  date: '',
  location: '',
  type: '', // prod - tour - local
  spc: [],
}

const IMAGE_VALUES = {
  title: 1200,
  thumbnail: 200
}

const staticPath = path.join(__dirname, '..', '/static')
const dataPath = path.join(__dirname, '..', '/data')
const artistsPath = path.join(dataPath, '/artists')
const graph = {}

function processImages(currentPath, files) {
  files.forEach(file => {
    if(file === 'meta.yml') return
    const fileExtension = path.extname(file)
    const fileName = path.basename(file, fileExtension)
    const fileIsImage = ['.jpg', '.jpeg', '.png'].includes(fileExtension)
    if (!fileIsImage) return
    const inputFile = path.join(currentPath, '/', file)
    const outputFile = path.join(currentPath, `/_${fileName}${fileExtension}`)

    sharp(inputFile)
      .resize(IMAGE_VALUES[fileName] || IMAGE_VALUES.thumbnail)
      .toFile(outputFile);
  })
}

// TODO: Process Images for title image only and gallery images seperately

function processFolder(folder) {
  const currentPath = path.join(artistsPath, '/', folder)
  const metaFilePath = path.join(currentPath, '/meta.yml')
  fs.readdir(currentPath, (err, files) => {
    processImages(currentPath, files)
  })


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


