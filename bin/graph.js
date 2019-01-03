const path = require('path')
const fs = require('fs').promises
const rimraf = require('rimraf')
const { processFolder }= require('./graph/folders')
const { PATHS } = require('./graph/constants')


async function createGraphFromFolder(inputPath) {
  const graph = {}

  // Cleanup the existing Images Path to avoid
  await rimraf(PATHS.IMG, (e) => console.error(e))

  try {
    const folders = await fs.readdir(inputPath)

    async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
      }
    }

    await asyncForEach(folders, async (folder) => {
      const data = await processFolder(folder, inputPath)
      graph[folder] = data
    })

    try {
      await fs.writeFile(`${PATHS.STATIC}/graph.json`, JSON.stringify(graph))
      console.log("Graph file generated!");
    } catch (err) {
      console.error(err)
    }
  } catch(err) {
    if (err) return console.log('Unable to scan directory: ' + err)
  }


}

const artistsPath = path.join(PATHS.DATA, '/artists')
createGraphFromFolder(artistsPath)

