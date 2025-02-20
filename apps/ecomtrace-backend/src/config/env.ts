import * as dotenv from 'dotenv';

dotenv.config();

const config = {
	port: process.env.PORT || 3001,
	nodeEnv: process.env.NODE_ENV || 'development',
	logLevel: process.env.LOG_LEVEL || 'info',
	mongoUri: process.env.MONGO_URI,
};

export default config;
