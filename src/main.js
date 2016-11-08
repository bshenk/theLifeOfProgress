import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'

// VueComponents
import Hello from './components/Hello'
import Dashboard from './components/Dashboard'

// Vuex Store
import store from './store'

const router = new VueRouter({
	routes: [
		{ path: '/', component: Dashboard },
		{ path: '/hello', component: Hello }
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
