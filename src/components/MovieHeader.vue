<template>
	<div>
		<h2>{{ data.title }}</h2>
		{{ data.items.length }} movies
	</div>
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
