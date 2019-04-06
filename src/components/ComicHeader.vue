<template>
	<div>
		<h2>{{ data.title }}</h2>
		{{ data.publisher }}
		{{ data.releaseYear }}
		{{ data.items.length }} issues
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
