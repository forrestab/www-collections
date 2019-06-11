<template>
	<section class="deck">
		<h2 v-if="title">{{ title }}</h2>
		<ul class="deck-items">
			<li v-for="item in items" :key="item.id">
				<a :href="item.path">{{ item.title }}</a>
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
	props: {
		title: { type: String },
		items: { type: Array }
	}
}
</script>
