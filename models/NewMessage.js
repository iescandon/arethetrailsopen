const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewMessageSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Please type in a name'],
	},
	email: {
		type: String,
		required: [true, 'Please type in an email address'],
	},
	message: {
		type: String,
		required: [true, 'Please type in a message'],
	},
});

const NewMessage = mongoose.model('NewMessage', NewMessageSchema);

module.exports = NewMessage;
