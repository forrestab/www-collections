<template>
	<div>
		{{ data.releaseYear }}
		{{ data.own }}
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
