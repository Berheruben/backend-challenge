import express from 'express'
import multer from 'multer'
import fileService from './services/file.js'

const PORT = 8080
export const app = express()

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (_, file, cb) => {
    return cb(null, `${file.originalname}`)
  }
})
const upload = multer({ storage })
// Endpoint to upload an image
app.post('/images', upload.single('image'), (req, res) => {
  const file = req.file

  return res.status(201).send({ fileName: file.filename })
})

// Endpoint to list all uploaded images by name
app.get('/images', async (_, res) => {
  try {
    const files = await fileService.getFiles()
    return res.status(200).send({ images: files.map(file => ({ name: file })) })
  } catch (error) {
    return res.status(500).send({ message: 'Failed to read uploaded files' })
  }
})

// Endpoint to resize an uploaded image
app.get('/images/:name/resize', async (req, res) => {
  const width = parseInt(req.query.width)
  const height = parseInt(req.query.height)
  const name = req.params.name
  try {
    const fileBuffer = await fileService.resizeFile(name, width, height)
    return res.status(200).contentType('image/jpeg').send(fileBuffer)
  } catch (error) {
    
    res.status(500).send({ error: error.message })
  }
})

// Endpoint to delete an uploaded image
app.delete('/images/:name', async (req, res) => {
  const name = req.params.name
  try {
    await fileService.deleteFile(name)
    return res.status(200).send({ message: 'File deleted successfully' })
  } catch (error) {
    return res.status(500).send({ message: 'Failed to delete the file' })
  }
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
