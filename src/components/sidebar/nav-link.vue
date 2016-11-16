<template>
	<div class="navigation-link">
		<router-link :to="to" :exact="exact">
			{{ title }}
			<i :class="iconClass" />
		</router-link>
	</div>
</template>

<script>
	export default {
		// Options / Data
		data () {
			return {}
		},
		props: ['icon', 'to', 'title', 'exact'],
		computed: {
			iconClass: function() {
				return `icon-${this.icon}`
			}
		},
		methods: {}
	}
</script>
