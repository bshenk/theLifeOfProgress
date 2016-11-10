import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import App from './components/App'

// VueComponents
import Routine from './components/routine'

// Vuex Store
import store from './store'

const router = new VueRouter({
	routes: [
		{ path: '/routine', component: Routine }
	]
});

// Initialize Firebase
const config = {
	apiKey: "AIzaSyDVM5MjbNbwxG5OIA7cNG74Fj6polDdNXU",
	authDomain: "thelifeofprogress.firebaseapp.com",
	databaseURL: "https://thelifeofprogress.firebaseio.com",
	storageBucket: "thelifeofprogress.appspot.com",
	messagingSenderId: "343440159959"
};

const FireBaseApp = Firebase.initializeApp(config);
const db = FireBaseApp.database();

console.log(db.ref('routine'));

Vue.use(VueRouter);
Vue.use(VueFire);

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router
});
