const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TrailSystemSchema = new Schema({
	name: String,
	lat: Number,
	lng: Number,
	open: Boolean,
	childrenTrails: [
		{
			name: String,
			condition: String,
			lastUpdated: String,
			// lastUpdated: Date,
		},
		// {
		// 	type: Schema.Types.ObjectId,
		// 	ref: 'IndividualTrail',
		// },
	],
});

TrailSystemSchema.methods.lastUpdatedDate = function () {
	this.lastUpdated = Date.now();

	return this.lastUpdated;
};

const TrailSystem = mongoose.model('TrailSystem', TrailSystemSchema);

module.exports = TrailSystem;
