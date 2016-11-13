<template>
  <div class="app">
	  <sidebar
			bannerWidth="60%"
			bannerImage="./static/tlop-logo.png"
		></sidebar>
	  <main-content>
		</main-content>
  </div>
</template>

<script>
// Custom components
import Sidebar from './sidebar/'
import MainContent from './main-content/'

// Firebase/Vue
import VueFire from 'vuefire'
import Vue from 'vue'
import Firebase from 'firebase'

// CSS
import './style.scss'
import 'normalize.css'
import 'milligram'
import 'simple-line-icons/css/simple-line-icons.css'

// Initialize Firebase
const config = {
	apiKey: "AIzaSyDVM5MjbNbwxG5OIA7cNG74Fj6polDdNXU",
	authDomain: "thelifeofprogress.firebaseapp.com",
	databaseURL: "https://thelifeofprogress.firebaseio.com",
	storageBucket: "thelifeofprogress.appspot.com",
	messagingSenderId: "343440159959"
};

const FirebaseApp = Firebase.initializeApp(config);
const db = FirebaseApp.database();

Vue.use(VueFire);

export default {
  name: 'app',
  components: {
    Sidebar,
		MainContent
  },
	data: function() {
		return {}
	},
	firebase: {
		testing: {
			source: db.ref('testing/'),
			asObject: true
		}
	}
}
</script>
