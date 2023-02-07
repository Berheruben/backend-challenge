const express = require('express');
const app = express();
const multer = require("multer");
const path = require("path");
const fs = require('fs');
// storage engine 

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
    
})
// Endpoint to upload an image
app.post('/images', upload.single('image'), (req, res) => {
    const file = req.file;
    res.status(201).send({ fileName: file.filename });
  });
  
  // Endpoint to list all uploaded images by name
app.get('/images', (req, res) => {
    fs.readdir('uploads/', (err, files) => {
      if (err) {
        return res.status(500).send({ message: 'Failed to read uploaded files' });
      }
  
      res.status(200).send({
        files: files.map(fileName => ({ fileName }))
      });
    });
  });
  // Endpoint to delete an uploaded image
  app.delete('/images/:fileName', (req, res) => {
    const fileName = req.params.fileName;
  
    fs.unlink(`uploads/${fileName}`, (err) => {
      if (err) {
        return res.status(500).send({ message: 'Failed to delete the file' });
      }
  
      res.status(200).send({ message: 'File deleted successfully' });
    });
  });  


app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
  });