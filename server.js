require('dotenv').config();
const express = require('express');
const secure = require('ssl-express-www');
const mongoose = require('mongoose');
var cors = require('cors');
const transporter = require('./transporter');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(secure);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trailsDB', {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

app.use(require('./routes/api.js'));

if (process.env.NODE_ENV === 'production') {
	console.log(process.env.REACT_APP_GOOGLE_API_KEY);
	app.use(express.static('client/build'));
}

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
	transporter.verify((error, success) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Server is ready to take messages');
		}
	});
});
