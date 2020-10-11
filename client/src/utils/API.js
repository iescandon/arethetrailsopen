import axios from 'axios';

const URL = '/api/trails';

export default {
	search: function () {
		return axios.get(URL);
	},
	updateCondition: function (id, condition, selectedTrail) {
		return axios.put(`${URL}/${id}`, { condition, selectedTrail });
	},
	updateStatus: function (id, status) {
		return axios.put(URL, { id, status });
	},
	sendMessage: function (message) {
		return axios.post('/api/messages', { message });
	},
	addComment: function (id, comment, selectedTrail) {
		return axios.put(`${URL}/comments/${id}`, { comment, selectedTrail });
	},
};
