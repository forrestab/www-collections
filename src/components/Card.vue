<template>
	<figure>
		<CloudinaryImage :src="data.cover" v-if="data.cover" />
		<figcaption>
			<h1>{{ data.title }}</h1>
			<slot :meta="data" />
		</figcaption>
	</figure>
</template>

<style lang="scss" scoped>

</style>

<script>
import CloudinaryImage from "~/components/CloudinaryImage.vue";

export default {
	components: {
		CloudinaryImage
	},
	props: {
		data: { type: Object }
	}
}
</script>
