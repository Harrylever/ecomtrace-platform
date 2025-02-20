import { Schema, model } from 'mongoose';

const logSchema = new Schema({
	uid: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	log_type: {
		type: String,
		required: true,
	},
	dateTime: {
		type: Date,
		required: true,
	},
});

const LogModel = model('LogModel', logSchema);
export default LogModel;
