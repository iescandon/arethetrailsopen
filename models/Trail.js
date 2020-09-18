const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TrailSchema = new Schema({
	id: Number,
	name: String,
	lat: Number,
	lng: Number,
	open: Boolean,
	childrenTrails: [
		{
			type: Schema.Types.ObjectId,
			ref: 'ChildTrail',
		},
	],
});

const Trail = mongoose.model('Trail', TrailSchema);

module.exports = Trail;
