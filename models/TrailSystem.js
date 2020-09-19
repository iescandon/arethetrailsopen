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
	trails: [IndividualTrailSchema],
});

// TrailSystemSchema.methods.lastUpdatedDate = function () {
// 	this.lastUpdated = Date.now();

// 	return this.lastUpdated;
// };

const TrailSystem = mongoose.model('TrailSystem', TrailSystemSchema);

module.exports = TrailSystem;
