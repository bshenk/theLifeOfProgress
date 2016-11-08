<template>
  <div id="app">
    <img src="./assets/logo.png">
		<hello title="Welcome to the Life of Progress."></hello>

		<button v-on:click="log('haha')">{{ buttonText }}</button>
		<router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import 'normalize.css'
import 'milligram'

export default {
  name: 'app',
  components: {
    Hello
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
