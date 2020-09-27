let mongoose = require('mongoose');
let db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trailsDB', {
	useNewUrlParser: true,
	useFindAndModify: false,
});

let trailSystemSeed = [
	{
		name: 'Sugar Land Brazos River Park/New Territory Trails',
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
		name: 'Justin P. Brindley/Sugar Land Memorial Park',
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
