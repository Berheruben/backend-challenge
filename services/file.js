import fs from 'node:fs/promises'
import sharp from 'sharp'

const getFiles = async () => {
  const files = await fs.readdir('uploads/')
  return files
}

const deleteFile = async fileName => {
  return await fs.unlink(`uploads/${fileName}`)
}

const resizeFile = async (fileName, width, height) => {
  if (!fileExist(fileName)) {
    throw new Error(`${fileName} not found`)
  }
  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    throw new Error("Expected positive integers for width and height'")
  }
  const fileBuffer = await sharp(`uploads/${fileName}`)
    .resize(width, height)
    .toBuffer()
  return fileBuffer
}

const fileExist = async fileName => {
  try {
    return await fs.stat(`uploads/${fileName}`)
  } catch (error) {
    return false
  }
}

export default {
  getFiles,
  deleteFile,
  resizeFile
}
