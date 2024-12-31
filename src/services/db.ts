import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
dotenv.config();

const connectDB = (): void => {
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/epicure')
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err: Error) => {
      console.error('MongoDB connection error', err);
    });
};

export { connectDB, mongoose };