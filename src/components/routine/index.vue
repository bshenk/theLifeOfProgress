<template>
	<div class="routine">
		<h1>{{ routine.title }}</h1>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		// Options / Data
		data () {
			return {}
		},
		props: ['title'],
		computed: mapState({ routine: state => state.routine }),
		methods: {}
	}
</script>
