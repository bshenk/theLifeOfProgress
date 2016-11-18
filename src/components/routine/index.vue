<template>
	<div class="routine">
		<h1>{{ date }}</h1>
		<div class="break" />

		<!-- CONTENT BEGINS HERE -->
		<div class="task-list">
			<div class="task-block" v-for="taskblock in tasks">
				<div class="time">
					<div class="number">{{ taskblock.time.charAt(0) }}</div>
					<div class="am-pm">{{ taskblock.time.slice(1) }}</div>
				</div>
				<div class="tasks">
					<ul>
						<li v-for="task in taskblock.tasks">
							<input type="checkbox" />{{ task }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import moment from 'moment'
	import './style.scss'
	import axios from 'axios'
	import gql from 'graphql-tag'

	export default {
		beforeMount() {
			axios.get('static/data/day1routine.json').then((response) => {
				this.tasks = response.data;
			});
		},
		// Options / Data
		data () {
			return {
				tasks: {}
			}
		},
		props: ['title'],
		computed: {
			...mapState({ routine: state => state.routine }),
			date () {
				return moment().format('LL')
			}
		},
		methods: {

		},
		apollo: {
			hello: gql`{hello}`
		}
	}
</script>
