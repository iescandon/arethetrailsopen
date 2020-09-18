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
		childrenTrails: [
			{
				name: 'Tower Run',
				condition: 'Dry',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'Lung Buster',
				condition: 'Wet',
				lastUpdated: '09/15/2020',
			},
		],
	},
	{
		name: 'Memorial Park',
		lat: 29.7671,
		lng: -95.4478,
		open: true,
		childrenTrails: [
			{
				name: 'Yellow Trail',
				condition: 'Wet',
				lastUpdated: '09/18/2020',
			},
			{
				name: 'The Triangle',
				condition: 'Wet',
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
