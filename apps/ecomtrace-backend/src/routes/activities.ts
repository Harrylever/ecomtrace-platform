import express from 'express';
import {
	getLogsController,
	receiveRepeaterController,
} from '../controller/activities.controller';

const router = express.Router();

router.post('/receive-repeater', receiveRepeaterController);
router.get('/activities/logs', getLogsController);

export default router;
