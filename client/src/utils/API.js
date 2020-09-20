import axios from 'axios';

const URL = '/api/trails';

export default {
	search: function () {
		return axios.get(URL);
	},
	updateCondition: function (id, condition, selectedTrail) {
		console.log(id, condition, selectedTrail);
		return axios.put(`${URL}/${id}`, { condition, selectedTrail });
	},
	updateStatus: function (id, status) {
		console.log(id, status);
		return axios.put(URL, { id, status });
	},
};
