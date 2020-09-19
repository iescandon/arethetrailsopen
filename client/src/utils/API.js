import axios from 'axios';

const URL = '/api/trails';

export default {
	search: function () {
		return axios.get(URL);
	},
};
