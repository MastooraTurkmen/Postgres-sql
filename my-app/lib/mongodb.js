import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';

export default async function dbConnect() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useUnifiedTopology: true,
        })
        console.log('MongoDB connected successfully');
    } catch (error) {
        throw new Error('Failed to connect to MongoDB: ' + error.message);
    }
}

