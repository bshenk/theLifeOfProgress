export default {
	state: {
		title: 'Routine'
	},
	mutations: {
		'UPDATE_MESSAGE' (state, payload) {
			state.testing = payload.value;
		}
	}
}
