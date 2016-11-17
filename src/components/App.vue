<template>
  <div class="app">
	  <sidebar
			bannerWidth="80%"
			bannerImage="./static/tlop-logo.png"
		></sidebar>
	  <main-content>
		</main-content>
  </div>
</template>

<script>
import Vue from 'vue'

// Custom components
import Sidebar from './sidebar/'
import MainContent from './main-content/'

// Firebase/Vue
import VueFire from 'vuefire'
import Firebase from 'firebase'

// Apollo/GraphQL
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

// CSS
import '../css/app.scss'
import 'normalize.css'
// import 'milligram'
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

// Initialize Apollo
const apolloClient = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'http://localhost:3030/graphql',
		transportBatching: true
	})
});

Vue.use(VueApollo, { apolloClient });

export default {
  name: 'app',
  components: {
    Sidebar,
		MainContent
  },
	data () {
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
