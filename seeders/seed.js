let mongoose = require('mongoose');
let db = require('../models');

mongoose.connect('mongodb://localhost/trailsDB', {
	useNewUrlParser: true,
	useFindAndModify: false,
});

let trailSystemSeed = [
	{
		name: 'Brazos River Park',
		lat: 29.56977,
		lng: -95.66475,
		open: true,
		trails: [
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Tower Run',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Tower Run 2',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Brazos Bend',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Brazos Bend',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Barbed Wire',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Wallow',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Operation Yellowbird',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'RC Uppers',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'RC Lowers',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Lungbuster',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Bamboo Chute',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: "Buddy's Trail",
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Da Bowl',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
		],
	},
	{
		name: 'Memorial Park',
		lat: 29.7671,
		lng: -95.4478,
		open: true,
		trails: [
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Green Ridge Trail',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Blue Trail',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Red Trail',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Yellow Trail',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Orange Trail',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Purple Trail',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Rollercoaster West',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'Rollercoaster East',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				_id: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Triangle',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
		],
	},
];

db.TrailSystem.deleteMany({})
	.then(() => db.TrailSystem.collection.insertMany(trailSystemSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
