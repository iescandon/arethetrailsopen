const router = require('express').Router();
const db = require('../models');
const transporter = require('../transporter');
const creds = require('../config');

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
		{ $set: { open: req.body.status, lastToggled: Date.now() } }
	)
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

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

router.put('/api/trails/comments/:id', (req, res) => {
	console.log(req.body);
	db.TrailSystem.updateOne(
		{
			_id: req.body.selectedTrail,
			'trails.trailId': req.params.id,
		},
		{
			$set: {
				'trails.$.comment': req.body.comment,
				'trails.$.commentDate': Date.now(),
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

router.post('/api/messages', (req, res) => {
	db.NewMessage.create(req.body.message, (error, data) => {
		if (error) {
			console.log(error);
			res.send(error);
		} else {
			var name = req.body.message.name;
			var email = req.body.message.email;
			var message = req.body.message.message;
			var content = `name: ${name} \n email: ${email} \n message: ${message} `;
			var mail = {
				from: email,
				to: creds.USER,
				subject: 'Are the trails open?: Inquiry',
				text: content,
			};
			transporter.sendMail(mail, (err, data) => {
				if (err) {
					console.log(err);
					res.json({
						status: 'fail',
					});
				} else {
					console.log('success');
					res.json({
						status: 'success',
					});
				}
			});
		}
	});
});

module.exports = router;
