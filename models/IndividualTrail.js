const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IndividualTrailSchema = new Schema({
	name: String,
	condition: String,
	lastUpdated: String,
	// lastUpdated: Date,
});

IndividualTrailSchema.methods.lastUpdatedDate = function () {
	this.lastUpdated = Date.now();

	return this.lastUpdated;
};

const IndividualTrail = mongoose.model(
	'IndividualTrail',
	IndividualTrailSchema
);

module.exports = IndividualTrail;
