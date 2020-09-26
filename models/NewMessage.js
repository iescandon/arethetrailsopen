const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewMessageSchema = new Schema({
	name: String,
	email: String,
	message: String,
});

const NewMessage = mongoose.model('NewMessage', NewMessageSchema);

module.exports = NewMessage;
