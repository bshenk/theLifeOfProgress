<template>
	<div class="sidebar">
		<div class="banner">
			<div class="image" :style="styleObject"></div>
		</div>
	</div>
</template>

<script>
	import './style.scss'
	export default {
		// Options / Data
		data () {
			return {
				styleObject: {
					width: this.bannerWidth,
					'background-image': `url('${this.bannerImage}')`,
					'background-repeat': 'no-repeat',
					'background-position': 'center'
				}
			}
		},
		props: ['bannerWidth', 'bannerImage'],
		computed: {},
		methods: {}
	}
</script>
