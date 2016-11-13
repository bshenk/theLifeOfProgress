<template>
	<div class="main-content">
		<slot></slot>
		<router-view></router-view>
	</div>
</template>

<script>
	import './style.scss'
	export default {
		// Options / Data
		data () {
			return {}
		},
		props: [],
		computed: {},
		methods: {}
	}
</script>
