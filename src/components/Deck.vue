<template>
	<div class="deck">
		<h2 v-if="title">{{ title }}</h2>
		<template v-for="item in items">
			<slot :data="item" />
		</template>
	</div>
</template>

<script>
export default {
	name: "CDeck",
	props: {
		title: { type: String },
		items: { type: Array }
	}
}
</script>

<style lang="scss" scoped>
.deck {

}
</style>
