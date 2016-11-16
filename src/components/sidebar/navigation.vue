<template>
	<div class="navigation">
		<nav-link icon="home" to="/" title="Dashboard" exact />
		<nav-link icon="map" to="/routine" title="Routine" />
	</div>
</template>

<script lang="">
	import NavLink from './nav-link'

	export default {
		// Options / Data
		data () {
			return {}
		},
		components: {
			NavLink
		},
		props: [],
		computed: {},
		methods: {}
	}
</script>
