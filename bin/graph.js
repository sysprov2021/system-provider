const path = require('path')
const fs = require('fs').promises
const rimraf = require('rimraf')
const { processFolder }= require('./graph/folders')
const { processYamlFile } = require('./graph/file')
const { PATHS } = require('./graph/constants')

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function createGraphFromFolder(inputPath) {
  const graph = {}

  // Cleanup the existing Images Path to avoid
  await new Promise(function(resolve, reject) {
    rimraf(PATHS.IMG, (err) => {
      if(err) {
        reject(err)
      }
      resolve(true)
    })
  })

  try {
    const folderName = path.basename(inputPath)
    const folders = await fs.readdir(inputPath, { withFileTypes: true })

    graph[folderName] = {}
    // Await all folder processes and operations to be done before writing a graph file
    await asyncForEach(folders, async (folder) => {
      if(!folder.isDirectory()) return
      const data = await processFolder(folder.name, inputPath)
      graph[folderName][folder.name] = data
    })
  } catch(err) {
    if (err) return console.log('Unable to scan directory: ' + err)
  }

  try {
    graph.pages = {}
    const newsContent = await processYamlFile(path.join(PATHS.DATA, '/news.yml'))
    Object.assign(graph.pages, newsContent)
  } catch (err) {
    console.error(err)
  }

  try {
    await fs.writeFile(`${PATHS.STATIC}/graph.json`, JSON.stringify(graph))
    console.log("Graph file generated!");
  } catch (err) {
    console.error(err)
  }
}

const artistsPath = path.join(PATHS.DATA, '/artists')
createGraphFromFolder(artistsPath)

