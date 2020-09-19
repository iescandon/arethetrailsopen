import axios from 'axios';

const URL = '/api/trails';

export default {
	search: function () {
		return axios.get(URL);
	},
	updateCondition: function (id, condition) {
		console.log(id, condition);
		return axios.put(`${URL}/${id}`, { condition });
	},
};
