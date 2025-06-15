
import { v2 as cloudinary } from 'cloudinary';

import dotenv from 'dotenv'
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


console.log(process.env.CLOUDINARY_API_SECRET)

const createimg=async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });

  }

    try {
    const filePath = req.file.path;

    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'my_uploads' // Optional folder in Cloudinary
    });

    // Remove file from server after upload
    

    res.json({
      message: 'Upload successful',
      url: result.secure_url
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
};


  /* res.json({
    message: 'File uploaded successfully!',
    file: req.file,
    fields: req.body
  }); */


export default createimg