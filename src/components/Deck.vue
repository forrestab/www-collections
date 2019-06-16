<template>
	<section class="deck">
		<h2 v-if="title">{{ title }}</h2>
		<Card
			v-for="item in items"
			:key="item.id"
			:title="item.title"
			:data="item"
		/>
	</section>
</template>

<style lang="scss" scoped>

</style>

<script>
import Card from "~/components/Card.vue";

export default {
	components: {
		Card
	},
	props: {
		title: { type: String },
		items: { type: Array }
	}
}
</script>
