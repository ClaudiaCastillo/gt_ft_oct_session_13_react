import axios from 'axios';

export default {
	createUser(data) {
		return axios.post('/api/users', data);
	}
}