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
				name: 'Tower Run',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Tower Run 2',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Brazos Bend',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Brazos Bend',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Barbed Wire',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'The Wallow',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Operation Yellowbird',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'RC Uppers',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'RC Lowers',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Lungbuster',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Bamboo Chute',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: "Buddy's Trail",
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
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
				name: 'Green Ridge Trail',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Blue Trail',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Red Trail',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Yellow Trail',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Orange Trail',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Purple Trail',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Rollercoaster West',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Rollercoaster East',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
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
