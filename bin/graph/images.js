const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const { PATHS } = require('./constants')

const IMAGE_VALUES = {
  def: 1200,
  small: 200
}

function fileIsImageFilter(file) {
  const fileExtension = path.extname(file)
 return ['.jpg', '.jpeg', '.png'].includes(fileExtension)
}

function resizeAndSave(inputFile, outputPath) {
  const fileExtension = path.extname(inputFile)
  const fileName = path.basename(inputFile, fileExtension)
  const name = `${fileName}.${fileExtension}`

  const small = path.join(outputPath, '/', `small_${name}`)
  const def = path.join(outputPath, '/', name)

  sharp(inputFile)
    .resize(IMAGE_VALUES.small)
    .toFile(small);

  sharp(inputFile)
    .resize(IMAGE_VALUES.def)
    .toFile(def);

  return fileName
}

/**
 *
 * @param {string} currentPath
 * @param {string} outputPath
 * @param {string} folder
 */
function processImages(currentPath, folder) {
  let data = {
    title: undefined,
    images: []
  }

  fs.readdir(currentPath, (err, files) => {
    const images = files.filter(fileIsImageFilter)
    const outputPath = path.join(PATHS.IMG, '/', folder)

    if(images.length > 0)
      fs.mkdirSync(outputPath, { recursive: true })

    images.forEach(image => {
      const inputFile = path.join(currentPath, '/', image)
      const fileName = resizeAndSave(inputFile, outputPath)
      if(fileName === 'title')
        data.title = image
      else
        data.images.push(image)
    })
  })

  return data
}

module.exports = {
  processImages
}
