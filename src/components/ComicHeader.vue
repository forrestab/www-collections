<template>
	<header class="comic-header">
		<h2>{{ data.title }}</h2>
		<ul class="comic-header-stats">
			<li>
				<Stat label="Publisher">{{ data.publisher }}</Stat>
			</li>
			<li>
				<Stat label="Release Year">
					<time>{{ data.releaseYear }}</time>
				</Stat>
			</li>
			<li>
				<Stat label="Total Issues">{{ data.items.length }}</Stat>
			</li>
		</ul>
	</header>
</template>

<style lang="scss" scoped>
.comic-header {

	&-stats {
		display: flex;

		& > *:not(:last-child) {
			margin-right: 2rem;
		}
	}
}
</style>

<script>
import Stat from "~/components/Stat.vue"

export default {
	components: {
		Stat
	},
	props: {
		data: { type: Object }
	}
}
</script>
