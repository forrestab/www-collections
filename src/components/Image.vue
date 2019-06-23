<template>
	<img :src="source">
</template>

<script>
export default {
	name: "CImage",
	props: {
		src: String
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
