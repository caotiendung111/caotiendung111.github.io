const sharp = require('sharp');
const fs = require('fs');

const inputFile = 'photo_3x4_300dpi (1) (1).jpg';
const tempFile = 'temp_photo.jpg';

sharp(inputFile)
  .resize(300, 400, { fit: 'inside' })
  .jpeg({ quality: 60 })
  .toFile(tempFile)
  .then(() => {
    fs.renameSync(tempFile, inputFile);
    console.log('Image compressed successfully!');
  })
  .catch(err => {
    console.error('Error compressing image:', err);
  });
