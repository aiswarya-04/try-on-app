import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());
app.use('/api/users', userRoutes)

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB is connected!");
    } catch (error) {
        console.log("MongoDB connection failed:", error);
        process.exit(1);
    }
};

connectDB();

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})