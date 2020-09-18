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

module.exports = router;
