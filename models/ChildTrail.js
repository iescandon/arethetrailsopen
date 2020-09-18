const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChildTrailSchema = new Schema({
	name: String,
	condition: String,
});

const ChildTrail = mongoose.model('ChildTrail', ChildTrailSchema);

module.exports = ChildTrail;
