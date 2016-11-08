<template>
  <div class="hello">
    <h1>{{ title }}</h1>
		<!--
		: is shorthand for v-bind
		@ is shorthand for v-on
	-->
		<input
			v-model="message"
		/>
		<h2>{{ message }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'hello',
	props: {
		title: String
	},
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
	computed: {
		message: {
			get() {
				return this.$store.state.routine.testing;
			},
			set(value) {
				this.$store.commit('UPDATE_MESSAGE', { value });
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
