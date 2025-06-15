import express from 'express';


const router = express.Router();


import multer from 'multer';

import path from 'path';


import fs from "fs";

import { fileURLToPath } from 'url';
import createimg from './controller/controllers.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create uploads folder if not exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Save file with timestamp + original name
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Single file upload route
router.post('/upload', upload.single('file2'), createimg)



export default router;
