const fs = require('fs').promises
const path = require('path')
const sharp = require('sharp')
const { PATHS } = require('./constants')

const IMAGE_VALUES = {
  def: 1200,
  small: 400
}

function fileIsImageFilter(file) {
  const fileExtension = path.extname(file)
 return ['.jpg', '.jpeg', '.png'].includes(fileExtension)
}

async function resizeAndSave(inputFile, outputPath) {
  const filename = path.basename(inputFile)
  const small = path.join(outputPath, '/', `small_${filename}`)
  const def = path.join(outputPath, '/', filename)

  try {
    sharp(inputFile)
      .resize(IMAGE_VALUES.small)
      .toFile(small);

    sharp(inputFile)
      .resize(IMAGE_VALUES.def)
      .toFile(def);
  } catch (err) {
    console.error(err)
  }

}

/**
 *
 * @param {string} currentPath
 * @param {string} folder
 */
async function processImages(currentPath, folder) {
  let data = {
    title: undefined,
    images: []
  }

  const files = await fs.readdir(currentPath)
  const images = files.filter(fileIsImageFilter)

  if(images.length === 0) return data
  const outputPath = path.join(PATHS.IMG, '/', folder)
  await fs.mkdir(outputPath, { recursive: true })

  images.forEach(async image => {
    const inputFile = path.join(currentPath, '/', image)
    const fileNameWithoutExtension = path.basename(inputFile, path.extname(inputFile))
    resizeAndSave(inputFile, outputPath)

    if (fileNameWithoutExtension === 'title')
      data.title = image
    else if (fileNameWithoutExtension === 'bg')
      data.bg = image
    else
      data.images.push(image)
  })

  return data
}

module.exports = {
  processImages
}
