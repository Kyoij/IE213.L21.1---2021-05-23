import { config } from 'dotenv';

config();

export const PORT = parseInt(process.env.PORT as string) || 3000;
export const MONGO_URI = process.env.MONGO_URI as string;
