const path = require('path')
const { processMetaFile } = require('./meta')
const { processImages } = require('./images')

/**
 *
 * @param {string} folder -- name of current_folder
 * @param {string} inputPath -- initial folder path
 */
async function processFolder(folder, inputPath) {
  const currentPath = path.join(inputPath, '/', folder)
  const metaFilePath = path.join(currentPath, '/meta.yml')

  // Process available images, and return list of imagepath
  const metaContent = await processMetaFile(metaFilePath)
  const images = await processImages(currentPath, folder)
  const data = Object.assign(metaContent, images)

  return data
}

module.exports = {
  processFolder
}
