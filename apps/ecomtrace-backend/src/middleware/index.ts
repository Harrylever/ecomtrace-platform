import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import logger from '../config/logger';

const middleware = (app: express.Application) => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(
		cors({
			origin: '*',
		})
	);
	app.use(
		morgan('combined', {
			stream: { write: (message) => logger.info(message.trim()) },
		})
	);
	app.use(compression());
	app.use(helmet());
};

export default middleware;
