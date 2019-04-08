<template>
	<figure>
		<figcaption>
			<h1>{{ data.title }}</h1>
			<slot :meta="data" />
		</figcaption>
	</figure>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
	props: {
		data: { type: Object }
	}
}
</script>
