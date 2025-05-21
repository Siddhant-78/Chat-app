import express from 'express';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';

dotenv.config();
const app = express();

app.use("/api/auth", authRoutes)

const port = process.env.PORT || 5001;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
  console.log(`MongoDB Connected`);
});