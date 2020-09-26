const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IndividualTrailSchema = new Schema({
	name: String,
	condition: String,
	lastUpdated: Date,
});

const TrailSystemSchema = new Schema({
	name: String,
	lat: Number,
	lng: Number,
	open: Boolean,
	address: String,
	trails: [IndividualTrailSchema],
});

const TrailSystem = mongoose.model('TrailSystem', TrailSystemSchema);

module.exports = TrailSystem;
