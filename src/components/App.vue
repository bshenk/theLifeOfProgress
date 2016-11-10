<template>
  <div class="app">
	  <sidebar
			bannerWidth="60%"
			bannerImage="./static/tlop-logo.png"
		></sidebar>
	  <main-content></main-content>
  </div>
</template>

<script>
import Sidebar from './sidebar/'
import MainContent from './main-content/'
import './style.scss'
import 'normalize.css'
import 'milligram'

export default {
  name: 'app',
  components: {
    Sidebar,
		MainContent
  },
	data: function() {
		return {
			msg: 'Hello',
			buttonText: 'BUTTON !!!!'
		}
	},
	methods: {
		log: function(text) {
			console.log(text);
		}
	}
}
</script>
