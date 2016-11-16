<template>
	<div class="main-content">
		<slot></slot>
		<div class="left">
			<router-view>
			</router-view>
		</div>

		<div class="right">
			<h1 class="route-title two">{{ routeTitle }}</h1>
			<h1 class="route-title three">{{ routeTitle }}</h1>
		</div>
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
		computed: {
			routeTitle () {
				let string = this.$route.path;

				return string.replace('/', '');
			}
		},
		methods: {}
	}
</script>
