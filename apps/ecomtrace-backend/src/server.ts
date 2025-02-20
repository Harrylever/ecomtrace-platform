import http from 'http';
import app from './app';
import config from './config/env';
import logger from './config/logger';
import { setupWebSocket } from './websocket/setup';

const server = http.createServer(app);
setupWebSocket(server);

server.listen(config.port, () => {
	logger.info(`Server is running on port ${config.port}`);
});
