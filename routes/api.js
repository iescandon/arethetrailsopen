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

//TODO FIX API REQUEST
router.put('/api/trails', (req, res) => {
	console.log(req.body);
	db.TrailSystem.update(
		{ _id: req.body.id },
		{ $set: { open: req.body.status } }
	)
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

//TODO FIX API REQUEST
router.put('/api/trails/:id', (req, res) => {
	console.log(req.params.id, req.body);
	db.TrailSystem.updateOne(
		{ _id: req.body.selectedTrail, 'trails.trailId': req.params.id },
		{
			$set: {
				'trails.$.condition': req.body.condition,
				'trails.$.lastUpdated': Date.now(),
			},
		}
	)
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/api/messages', (req, res) => {
	db.NewMessage.find({})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.post('/api/messages', (req, res) => {
	console.log(req.body);
	db.NewMessage.create(req.body.message, (error, data) => {
		if (error) {
			res.send(error);
		} else {
			res.send(data);
		}
	});
});

module.exports = router;
