let mongoose = require('mongoose');
let db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trailsDB', {
	useNewUrlParser: true,
	useFindAndModify: false,
});

let trailSystemSeed = [
	{
		name: 'Brazos River Park/New Territory Trails',
		lat: 29.568817,
		lng: -95.660302,
		open: true,
		address: '18427 Southwest Fwy, Sugar Land, TX 77479',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Bamboo Chute',
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
				name: 'Brazos Bend',
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
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Heron Loop Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Highway 99 RC/LB Connector',
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
				name: 'New Territory/Tower Run Access',
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
				name: 'The Roller Coaster Lowers',
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
				name: 'Tower Run',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Tower Run 2',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Memorial Park',
		lat: 29.764972,
		lng: -95.441725,
		open: true,
		address: '7575 N Picnic Ln, Houston, TX 77007',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Blue Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Green Ridge Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hogg Woods Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Orange Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Purple Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Purple Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'RC Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Red Connector',
				condition: 'Dry',
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
				name: 'Rollercoaster East',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Rollercoaster West',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'South Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Triangle',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Triangle Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Triangle Underpass',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'West Access Road',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Yellow Trail',
				condition: 'Dry',
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
				name: '100 Acre Wood Alt',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: '100 Acre Wood North',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: '100 Acre Wood South',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Armadillo Dash',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Barbeque Run',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'BBQ to South Ridge',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Creekside',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Creekside Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Creekside Cutoff',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Cypress Trailhead',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Cypresswood Bike Path',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Cypresswood Hike & Bike',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Fast and Furious',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Happy Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Moore',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Moore Bridge',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'North Ridge',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Rabbit Run',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Rim Bender',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'South Ridge',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Old Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Y Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Trailhead Connect',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Waterfall',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'YMCA Access',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'River Park Trails/River Bend',
		lat: 29.575953,
		lng: -95.683112,
		open: true,
		address: '5653 W Riverpark Dr, Sugar Land, TX 77479',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Brazos Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Cottonwood',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Heron Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hill Canyon Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Pioneer Ridge',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'River Bend Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Jack Brooks',
		lat: 29.362338,
		lng: -95.041002,
		open: true,
		address: 'Jack Brooks Road, Hitchcock, TX 77563',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Autobahn',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'By-pass',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Brickyard',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Canal Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Canal Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Cedar Bends',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Cedar Breaks Bypass',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: "Dragon's Back",
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hell 1',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hell 2',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hell 2 Bypass',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hermit Run Cutoff',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: "Hermit's Run",
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hermit Run NE Access',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hobo Camp Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Home Stretch',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Home Stretch',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Joggernut',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Playground',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Beginning',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Never Ending Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Outback',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: "There's More",
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Anthills/Terry Hershey Park',
		lat: 29.761634,
		lng: -95.604678,
		open: true,
		address: '1001 S Dairy Ashford Rd, Houston, TX 77077',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Anthills',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Beyond Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Justin Brindley Memorial Park',
		lat: 29.556111,
		lng: -95.641165,
		open: true,
		address: 'Sugar Land, TX 77479',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Justin Brindley Memorial',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Oyster Creek',
		lat: 29.587867,
		lng: -95.592315,
		open: true,
		address: '15300 University Blvd, Sugar Land, TX 77479',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Bangarang',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Bypass',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Funner alt-line',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Grass Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Grassy Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: "Kelly's Bypass",
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Noodle Legs Bypass',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'OC MTB Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Oyster Creek Paved Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Paved Bangarang Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Rabbit Run',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Rabbit Run, too',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Road Crossing',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Swamp Drop (alt-line)',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Upside Down',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Cullinan Park',
		lat: 29.635845,
		lng: -95.660365,
		open: true,
		address: '12414 Highway 6 S, Sugar Land, TX 77498',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Bootlegger',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'East Bank Blitz',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Gully Bend',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: "Hodge's Bend Cemetery",
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: "Mary's Bend",
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Old Pecan Tree',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Oyster Creek Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Oyster Creek Shortcut',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Oyster Creek Shortcut 2',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Piney Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Piney Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Piney Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Pumpkin Pass',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Red Gulley',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Finger',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'West Bank Blitz',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Brazos Bend State Park',
		lat: 29.375059,
		lng: -95.596581,
		open: true,
		address: '21901 Farm to Market Rd 762, Needville, TX 77461',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: '40 Acre Lake Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Bayou Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Big Creek Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Bluestern Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Creekwood Lake Loop Inner',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Creekwood Lake Loop Outer',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Elm Lake Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: "Franky's Dam Trail",
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hale Lake Loop Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hale Lake Loop Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hale Lake Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Horseshoe Lake Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Live Oak Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Pilant Slough Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Red Buckeye Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Riverview Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Roadside Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Sawmill Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Spillway Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Whiteoak Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Pasadena Trails',
		lat: 29.637021,
		lng: -95.130311,
		open: true,
		address: '7102 Crenshaw Rd, Pasadena, TX 77505',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Armand Bayou East',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Armand Bayou West',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Holly Bay Park to Armand Bayou West',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Mason Creek Trails',
		lat: 29.755734,
		lng: -95.709844,
		open: true,
		address: '2500 Porter Rd, Katy, TX 77493',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hike & Bike North Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Hike & Bike South Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Cypresswood',
		lat: 30.011266,
		lng: -95.506544,
		open: true,
		address: '6727 Cypresswood Dr, Spring, TX 77379',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Back to the Future',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Beaver Pond Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Black Diamond',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Creekside',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'DCR Express',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Do It Again',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Dry Creek',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Fastway',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Gourley Nature',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: "I'm Going Home",
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Meyer Pond Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Midway',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'MiniMe',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'NoBrakes',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'One Way Out',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: "Out n'In",
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Rim Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'SideWinder',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Start Me Up',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Street Side',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'The Bowl',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Timberlane',
		lat: 30.043888,
		lng: -95.389244,
		open: true,
		address: '22700 Lemon Grove Dr, Spring, TX 77373',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Timberlane Bike Path',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Timberlane Bike Path',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Timberlane MTB',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Timberlane MTB (North Loop)',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Spring Creek Park',
		lat: 30.106155,
		lng: -95.652646,
		open: true,
		address: '15012 Brown Rd, Tomball, TX 77377',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: "Archer's Trail",
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Coral Canyon Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Spring Creek East',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Spring Creek Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'George Mitchell Preserve Trails',
		lat: 30.162452,
		lng: -95.517182,
		open: true,
		address: 'The Woodlands, TX 77381',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Burroughs Connector to SCNT',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Connector',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Crossover Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Direct Route to Burroughs Connector to SCNT',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Fitness Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Flintridge Bike Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Gray Fox Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Main Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Racoon Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Road Runner Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'SCNT - West of Crossover',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'SCNT East - Gosling to Closed Bridge',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Spring Creek Greenway Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'West Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Wetlands Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Lake Houston Wilderness Park',
		lat: 30.144466,
		lng: -95.168704,
		open: true,
		address: '25840 FM 1485, New Caney, TX 77357',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: '5 mile Road',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Ameritrail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Dogwood Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Forest Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Loggers Loop Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Peach Creek Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'River Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Yaupon Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Stephen F. Austin State Park',
		lat: 29.821765,
		lng: -96.112717,
		open: true,
		address: 'Park Rd 38, San Felipe, TX 77473',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Barred Owl Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Brazos Bottom Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Copperhead Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Cottonwood Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Fishbone Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Ironwood Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Opossum Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Opossum Top',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Pileated Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Sycamore Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Double Lake Recreation Area',
		lat: 30.549113,
		lng: -95.129706,
		open: true,
		address: '301 FM 2025 Rd, Coldspring, TX 77331',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: '220 Spur Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'C-Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Crossover',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Cut the Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Dam Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'DL X-Over',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'DLRA Access',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'DLRA Connect',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'DLRA Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'DLRA Trailhead',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Henry Lake North',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Henry Lake South',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Lakeside Connector 1',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Lakeside Connector 2',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Lakeside Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'RCW Loop',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Trail of Woe',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	{
		name: 'Bridgeland',
		lat: 29.96074,
		lng: -95.7405,
		open: true,
		address: '19019 N Bridgeland Lake Pkwy, Cypress, TX 77433',
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
		name: 'Jim and JoAnn Fonteno Family Park',
		lat: 29.80595,
		lng: -95.19452,
		open: true,
		address: '14350 1/2 Wallisville Rd, Houston, TX 77049',
		trails: [
			{
				trailId: new mongoose.Types.ObjectId().toHexString(),
				name: 'Trail',
				condition: 'Dry',
				lastUpdated: Date.now(),
			},
		],
	},
	// {
	// 	name: 'Anthills/Terry Hershey Park',
	// 	lat: 29.77358,
	// 	lng: -95.60626,
	// 	open: true,
	// 	address: '1001 S Dairy Ashford Rd, Houston, TX 77077',
	// 	trails: [
	// 		{
	// 			trailId: new mongoose.Types.ObjectId().toHexString(),
	// 			name: 'Trail',
	// 			condition: 'Dry',
	// 			lastUpdated: Date.now(),
	// 		},
	// 	],
	// },
];

// let messageSeed = [
// 	{
// 		name: 'Inez Escandon',
// 		email: 'iescan4@gmail.com',
// 		message: 'Hello World!',
// 	},
// ];

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

// db.NewMessage.deleteMany({})
// 	.then(() => db.NewMessage.collection.insertMany(messageSeed))
// 	.then((data) => {
// 		console.log(data.result.n + ' records inserted!');
// 		process.exit(0);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 		process.exit(1);
// 	});
