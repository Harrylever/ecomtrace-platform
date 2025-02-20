import { Request, Response } from 'express';
import { v4 } from 'uuid';
import LogModel from '../models/log.model';
import logger from '../config/logger';

export async function receiveRepeaterController(req: Request, res: Response) {
	const { forward_type } = req.query;
	if (!forward_type) {
		res.status(400).json({ error: 'forward_type is required' });
		return;
	}

	const { username, message, dateTime } = req.body;

	try {
		const logDetails = {
			uid: v4(),
			message,
			dateTime,
			author: username,
			log_type: forward_type,
		};

		logger.info({ mesage: 'Log Data to add to db', log: logDetails });

		await LogModel.create(logDetails);

		res.status(201).json({
			message: 'Log entry saved',
		});
	} catch (error) {
		res.status(500).json({
			message: 'Internal Server Error',
			error: error,
		});
	}
}

export async function getLogsController(req: Request, res: Response) {
	const allLogs = await LogModel.find().limit(20);

	res.status(200).json({
		data: allLogs,
		message: 'Logs',
	});
}
