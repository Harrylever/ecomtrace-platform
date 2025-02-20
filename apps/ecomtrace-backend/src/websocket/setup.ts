import http from 'http';
import logger from '../config/logger';
import { WebSocketServer } from 'ws';
import LogModel from '../models/log.model';

export const setupWebSocket = (server: http.Server) => {
	const wss = new WebSocketServer({ server });

	wss.on('connection', (ws) => {
		logger.info('New Websocket connection');

		const interval = setInterval(async () => {
			const logs = await LogModel.find().limit(20);

			if (ws.readyState === ws.OPEN) {
				ws.send(JSON.stringify({ message: 'Logs', data: logs }));
			}
		}, 20000);

		ws.on('message', (message) => {
			logger.info('Received:', message.toString());

			ws.send(`Echo: ${message}`);
		});

		ws.on('close', () => {
			logger.info('Websocket connection closed');
			clearInterval(interval);
		});
	});
};
