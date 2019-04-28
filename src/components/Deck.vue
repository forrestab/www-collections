<template>
	<section class="deck">
		<slot name="header" :data="data">
			<h2>{{ title }}</h2>
		</slot>
		<section class="deck-items">
			<template v-for="item in data.items">
				<slot name="card" :data="item" />
			</template>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.deck {
	padding: 1rem;

	&-items {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-auto-rows: 420px;
	}
}
</style>

<script>
export default {
	props: {
		title: { type: String },
		data: { type: Object }
	}
}
</script>
