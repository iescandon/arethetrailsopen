const router = require('express').Router();
const db = require('../models');

router.get('/api/trails', (req, res) => {
	db.TrailSystem.find({})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put('/api/trails', (req, res) => {
	console.log(req.body);
	db.TrailSystem.update(
		{ _id: req.body.id },
		{ $set: { open: req.body.status } }
	)
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

//TODO FIX API REQUEST...SEARCHING FOR TRAIL SYSTEM ID BUT DOENST EXIST
router.put('/api/trails/:id', (req, res) => {
	console.log(req.params.id, req.body);
	// db.TrailSystem.findByIdAndUpdate(
	// 	{ _id: req.body.selectedTrail, 'trails._id': req.params.id },
	// 	{
	// 		$set: {
	// 			'trails.$.condition': req.body.condition,
	// 			'trails.$.lastUpdated': Date.now(),
	// 		},
	// 	}
	// )
	db.TrailSystem.updateOne(
		{ _id: req.body.selectedTrail, 'trails._id': req.params.id },
		{
			$set: {
				'trails.$.condition': req.body.condition,
				'trails.$.lastUpdated': Date.now(),
			},
		}
	)
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
