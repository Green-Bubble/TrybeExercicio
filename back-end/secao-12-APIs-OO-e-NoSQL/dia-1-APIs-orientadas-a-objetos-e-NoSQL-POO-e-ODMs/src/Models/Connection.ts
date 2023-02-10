import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://localhost:27017/trix';

const connectToDatabase = (
  mongoDataBaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDataBaseURI);

export default connectToDatabase;