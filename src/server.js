import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import router from './routes.js';
import dotenv from 'dotenv'
const app = express();
const PORT = 5000;

// Enable CORS (allow React frontend to connect)

const result = dotenv.config();
console.log(result);
console.log(process.env.CLOUDINARY_API_SECRET)
// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse incoming JSON data
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
