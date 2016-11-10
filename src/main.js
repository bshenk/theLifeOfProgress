import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './components/App'

// VueComponents
import Routine from './components/routine/routine'

// Vuex Store
import store from './store'

const router = new VueRouter({
	routes: [
		{ path: '/routine', component: Routine }
	]
});

Vue.use(VueRouter);

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router
});
