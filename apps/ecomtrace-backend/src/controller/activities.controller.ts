import { Request, Response } from 'express';
import { v4 } from 'uuid';
import LogModel from '../models/log.model';

// type IForwardType = 'error-tracing' | 'speed-monitoring' | 'session-replay';

// const ForwardTypeMap: Record<IForwardType, string> = {
// 	'error-tracing': '',
// 	'speed-monitoring': '',
// 	'session-replay': '',
// };

export async function receiveRepeaterController(req: Request, res: Response) {
	const { forward_type } = req.query;
	if (!forward_type) {
		res.status(400).json({ error: 'forward_type is required' });
		return;
	}

	const { author, message, log_type, dateTime } = req.body;

	try {
		await LogModel.create({
			uid: v4(),
			author,
			message,
			log_type,
			dateTime,
		});

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
	const allLogs = await LogModel.find();

	res.status(200).json({
		data: allLogs,
		message: 'Logs',
	});
}
