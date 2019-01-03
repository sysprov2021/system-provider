const path = require('path')
const fs = require('fs').promises
const rimraf = require('rimraf')
const { processFolder }= require('./graph/folders')
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
    const folders = await fs.readdir(inputPath)

    // Await all folder processes and operations to be done before writing a graph file
    await asyncForEach(folders, async (folder) => {
      const data = await processFolder(folder, inputPath)
      graph[folder] = data
    })
  } catch(err) {
    if (err) return console.log('Unable to scan directory: ' + err)
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

