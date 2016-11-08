export default {
	state: {
		testing: 'hahahaha'
	},
	mutations: {
		'UPDATE_MESSAGE' (state, payload) {
			state.testing = payload.value;
		}
	}
}
