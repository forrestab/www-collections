<template>
	<img :src="source">
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
	props: {
		src: { type: String }
	},
	computed: {
		source() {
			return `https://res.cloudinary.com/${this.$static.metaData.cloudinary.cloudName}/image/upload/w_250/${this.src}`;
		}
	}
}
</script>

<static-query>
query {
	metaData {
		cloudinary {
			cloudName
		}
	}
}
</static-query>
