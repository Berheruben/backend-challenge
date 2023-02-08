

### STACKS:

I used node.js together with express.js, with several libraries/dependencies added:
- nodemon: used to restart the server automatically when I had to make changes to the code.
- multer: used for handling multipart/form data, which is mostly used for file upload.
- sharp: used to resize an image.


### PROJECT STRUCTURE:

The project consists of:
- A folder called "services", in which there is a javascript file (file.js) used to manage access to the storage.
- A Dockerfile.
- The package.json and package-lock.json files contain the various libraries and dependencies, and finally the server.js contains the various endpoints, necessary to be able to:


### HTTP APIs:

POST: /images/
- Upload an image.
  
GET: /images/
- Show all images by their name.
  
DELETE: /images/:filename
- Delete an image.
  
GET: /images/:filename/resize?width={width}&height={height}
- Resize an image by passing it the width and length as parameters.

### START ON LOCAL MACHINE:


```
docker builds . -t <name>/<nameImage>
```

```
docker run -d -p 8080:8080 <name>/<nameImage>
```