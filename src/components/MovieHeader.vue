<template>
	<header>
		<h2>{{ data.title }}</h2>
		<LabelAndValue label="Total Movies">{{ data.items.length }}</LabelAndValue>
	</header>
</template>

<style lang="scss" scoped>

</style>

<script>
import LabelAndValue from "~/components/LabelAndValue.vue";

export default {
	components: {
		LabelAndValue
	},
	props: {
		data: { type: Object }
	}
}
</script>
