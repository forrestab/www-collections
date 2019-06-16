<template>
	<figure>
		{{ data }}
		<figcaption>
			<h3>
				<g-link :to="data.path">{{ title }}</g-link>
			</h3>
		</figcaption>
	</figure>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
	props: {
		title: { type: String },
		data: { type: Object }
	}
}
</script>
