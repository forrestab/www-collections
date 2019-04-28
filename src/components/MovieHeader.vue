<template>
	<header class="movie-header">
		<h2>{{ data.title }}</h2>
		<ul class="movie-header-stats">
			<li>
				<Stat label="Total Movies">{{ data.items.length }}</Stat>
			</li>
		</ul>
	</header>
</template>

<style lang="scss" scoped>
.movie-header {

	&-stats {
		display: flex;

		& > *:not(:last-child) {
			margin-right: 2rem;
		}
	}
}
</style>

<script>
import Stat from "~/components/Stat.vue";

export default {
	components: {
		Stat
	},
	props: {
		data: { type: Object }
	}
}
</script>
