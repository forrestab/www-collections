<template>
	<header>
		<h2>{{ data.title }}</h2>
		<LabelAndValue label="Publisher">{{ data.publisher }}</LabelAndValue>
		<LabelAndValue label="Release Year">
			<time>{{ data.releaseYear }}</time>
		</LabelAndValue>
		<LabelAndValue label="Total Issues">{{ data.items.length }}</LabelAndValue>
	</header>
</template>

<style lang="scss" scoped>

</style>

<script>
import LabelAndValue from "~/components/LabelAndValue.vue"

export default {
	components: {
		LabelAndValue
	},
	props: {
		data: { type: Object }
	}
}
</script>
