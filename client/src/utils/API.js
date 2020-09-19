import axios from 'axios';

const URL = '/api/trails';

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
	search: function () {
		return axios.get(URL);
	},
};
