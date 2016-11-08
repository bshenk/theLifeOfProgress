import Vue from 'vue'
import Vuex from 'vuex'

// modules
import routine from './modules/routine'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		routine
	},
	// In strict mode, whenever Vuex state is mutated outside of mutation handlers, an error will be thrown. 
	strict: process.env.NODE_ENV !== 'production'
});
