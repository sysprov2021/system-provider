const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')
const { processFolder }= require('./graph/folders')
const { PATHS } = require('./graph/constants')


async function createGraphFromFolder(inputPath) {
  const graph = {}

  // Cleanup the existing Images Path to avoid
  if(fs.existsSync(PATHS.IMG))
    await rimraf(PATHS.IMG, (e) => console.error(e))

  fs.readdir(inputPath, (err, folders) => {
    if (err) return console.log('Unable to scan directory: ' + err)

    folders.forEach(folder => {
      graph[folder] = processFolder(folder, inputPath)
    })

    fs.writeFile(`${PATHS.STATIC}/graph.json`, JSON.stringify(graph), function (err) {
      if (err) return console.log(err)
      console.log("Graph file generated!");
    });
  })
}

const artistsPath = path.join(PATHS.DATA, '/artists')
createGraphFromFolder(artistsPath)

