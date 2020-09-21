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
		address: '18427 Southwest Fwy, Sugar Land, TX 77479',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Tower Run',
				condition: 'Hero',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Tower Run 2',
				condition: 'Hero',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Brazos Bend',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Brazos Bend',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Barbed Wire',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Wallow',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Operation Yellowbird',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'RC Uppers',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'RC Lowers',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Lungbuster',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Bamboo Chute',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: "Buddy's Trail",
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Da Bowl',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Memorial Park',
		lat: 29.7671,
		lng: -95.4478,
		open: false,
		address: '7575 N Picnic Ln, Houston, TX 77007',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Green Ridge Trail',
				condition: 'Tacky',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Blue Trail',
				condition: 'Hero',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Red Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Yellow Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Orange Trail',
				condition: 'Hero',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Purple Trail',
				condition: 'Tacky',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Rollercoaster West',
				condition: 'Muddy',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Rollercoaster East',
				condition: 'Muddy',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Triangle',
				condition: 'Wet',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Cypress Creek',
		lat: 29.98352,
		lng: -95.57724,
		open: true,
		address: '14234 W Cypress Forest Dr, Houston, TX 77070',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Jack Brooks',
		lat: 29.36522,
		lng: -95.03935,
		open: true,
		address: '5700 FM 2004 &, Hwy 6, Hitchcock, TX 77563',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Anthills/Terry Hershey Park',
		lat: 29.77358,
		lng: -95.60626,
		open: true,
		address: '1001 S Dairy Ashford Rd, Houston, TX 77077',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
];

let messageSeed = [
	{
		name: 'Inez Escandon',
		email: 'iescan4@gmail.com',
		message: 'Hello World!',
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

db.NewMessage.deleteMany({})
	.then(() => db.NewMessage.collection.insertMany(messageSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
