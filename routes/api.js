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

//TODO FIX API REQUEST...SEARCHING FOR TRAIL SYSTEM ID BUT DOENST EXIST
router.put('/api/trails/:id', (req, res) => {
	console.log(req.body);
	db.TrailSystem.findOneAndUpdate(
		{ id: req.params.id },
		{ $set: { condition: req.body.condition, lastUpdated: Date.now() } }
	)
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
