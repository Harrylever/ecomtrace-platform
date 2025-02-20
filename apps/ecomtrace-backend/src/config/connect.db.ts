import { connect } from 'mongoose';
import config from './env';
import logger from './logger';

const connectToDb = () => {
	if (!config.mongoUri) throw new Error('Mongodb URI missing!');

	connect(config.mongoUri, {
		dbName: 'dev',
	})
		.then(() => logger.info('Connected to db 🚀'))
		.catch((err) => logger.error(`Connection to db failed: ${err.message}`));
};

export default connectToDb;
